import { jsonFetchOrFlash } from 'https://unpkg.com/@heintouchable/functions@0.0.5/Functions.standalone.js'
import {
  Checkbox,
  Color,
  Editor,
  FR,
  HTMLText,
  ImageUrl,
  Number,
  Range,
  Repeater,
  Row,
  Select,
  Tabs,
  Text,
  TextAlign,
} from './Editor.standalone.js'

let editor = new Editor({
  lang: FR,
})

const visualEditor = document.querySelector('editor-builder')
if (visualEditor) {
  const mode = visualEditor.getAttribute('mode') || 'post'
  let colors = {
    white: 'var(--white)',
    color1: 'var(--color-1)',
    color2: 'var(--color-2)',
    color3: 'var(--color-3)',
    color4: 'var(--color-4)',
    color5: 'var(--color-5)',
    color6: 'var(--color-6)',
    colorDark: 'var(--color-dark)',
    color: 'var(--color)',
    colorLight: 'var(--color-light)',
    contrast: 'var(--contrast)',
    background: 'var(--background)',
  }

  const setAttachment = attachment => {
    const changeEvent = document.createEvent('HTMLEvents')
    changeEvent.initEvent('change', false, true)
    return attachment.id
  }

  const onBrowse = async () => {
    return new Promise(function (resolve, reject) {
      const modal = document.createElement('modal-dialog')
      modal.style.zIndex = 20000
      modal.setAttribute('overlay-close', 'overlay-close')
      const fm = document.createElement('file-manager')
      fm.setAttribute('data-endpoint', '/admin/attachment')
      modal.appendChild(fm)
      fm.addEventListener('file', e => {
        resolve(setAttachment(e.detail))
        modal.close()
      })
      document.body.appendChild(modal)
    })
  }

  const appearances = (defaultPadding = 0) => {
    const background = [
      Color('backgroundColor', {
        label: 'Fond',
        colors: Object.values(colors),
      }),
      ImageUrl('backgroundDesktop', {
        label: 'Image de fond',
        default: '',
        onBrowse: onBrowse,
      }),
      ImageUrl('backgroundMobile', {
        label: 'Image de fond (Mobile)',
        default: '',
        onBrowse: onBrowse,
      }),
    ]

    return [
      Range('padding', {
        label: 'Padding vertical',
        default: defaultPadding,
        min: 0,
        max: 15,
        step: 1,
      }),
      Row(background),
      Row([
        Color('titleColor', {
          label: 'Couleur des titres',
          colors: Object.values(colors),
          default: colors.contrast,
        }),
        Color('textColor', {
          label: 'Couleur des textes',
          colors: Object.values(colors),
          default: colors.colorDark,
        }),
      ]),
      Row([
        Select('backgroundSize', {
          label: "Taille de l'image",
          default: '',
          options: [
            {
              value: '',
              label: 'Remplir',
            },
            {
              value: 'contain',
              label: 'Contenir',
            },
            {
              value: 'auto',
              label: 'Original',
            },
          ],
        }),
        Select('backgroundRepeat', {
          label: 'Répétition',
          default: '',
          options: [
            {
              value: '',
              label: 'Aucune',
            },
            {
              value: 'X',
              label: 'repeat-x',
            },
            {
              value: 'Y',
              label: 'repeat-y',
            },
            {
              value: 'X & Y',
              label: 'repeat',
            },
          ],
        }),
        Select('backgroundXPosition', {
          label: 'Position (X)',
          default: '',
          options: [
            {
              value: 'left',
              label: 'Gauche',
            },
            {
              value: '',
              label: 'Centrer',
            },
            {
              value: 'right',
              label: 'Droite',
            },
          ],
        }),
        Select('backgroundYPosition', {
          label: 'Position (Y)',
          default: '',
          options: [
            {
              value: 'left',
              label: 'Gauche',
            },
            {
              value: '',
              label: 'Centrer',
            },
            {
              value: 'right',
              label: 'Droite',
            },
          ],
        }),
      ]).when('backgroundDesktop', true),
    ]
  }

  const getHero = () => {
    editor.registerComponent('hero', {
      title: 'Hero',
      category: 'Colonnes',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Row([
                Text('title', {
                  label: 'Titre',
                  default: 'Lorem ipsum dolor sit amet',
                  multiline: false,
                }),
                TextAlign('titleAlign', {
                  label: 'Alignement',
                  default: 'center',
                }),
              ]),
              HTMLText('content', {
                label: 'Contenu',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              Repeater('buttons', {
                addLabel: 'Ajouter un bouton',
                fields: [
                  Text('label', {
                    label: 'Label',
                    default: 'Call to action',
                    multiline: false,
                  }),
                  Text('url', { label: 'URL', multiline: false }),
                  Select('style', {
                    label: 'Style de bouton',
                    default: 'primary',
                    options: [
                      {
                        value: 'primary',
                        label: 'Normal',
                      },
                      {
                        value: 'primary-outlined',
                        label: 'Inversé',
                      },
                    ],
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(5)],
          },
        ),
      ],
    })
  }

  const getLastPosts = () => {
    editor.registerComponent('last-posts', {
      title: 'Derniers articles',
      category: '',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Text('title', {
                label: 'Titre',
                default: 'Lorem ipsum dolor sit amet',
                multiline: false,
              }),
              HTMLText('content', {
                label: 'Contenu',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(5)],
          },
        ),
      ],
    })
  }

  const getFooter = options => {
    editor.registerComponent('footer-columns', {
      title: 'Colonnes',
      category: 'Footer',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Repeater('columns', {
                addLabel: 'Ajouter une colonne',
                fields: [
                  Text('title', {
                    label: 'Titre',
                    default: 'Lorem ipsum dolor sit amet',
                    multiline: false,
                  }),
                  HTMLText('content', {
                    label: 'Contenu',
                    multiline: true,
                    allowHeadings: true,
                    colors: Object.values(colors),
                    default:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iure necessitatibus nulla! Aperiam culpa deserunt iste mollitia nobis obcaecati reiciendis sapiente sunt tempora. Architecto aut consectetur est fugiat ipsum saepe.',
                  }),
                  Repeater('links', {
                    addLabel: 'Ajouter un lien',
                    fields: [
                      Text('label', {
                        label: 'Label',
                        help: 'Laisser vide pour garder le nom de la page',
                        multiline: false,
                      }),
                      Select('url', {
                        label: 'Page ou article',
                        options: [
                          {
                            value: '',
                            label: '',
                          },
                          {
                            value: JSON.stringify({
                              path: 'home',
                              label: 'Accueil',
                            }),
                            label: 'Accueil',
                          },
                          {
                            value: JSON.stringify({
                              path: 'blog.index',
                              label: 'Blog',
                            }),
                            label: 'Blog',
                          },
                          {
                            value: JSON.stringify({
                              path: 'portfolio.index',
                              label: 'Portfolio',
                            }),
                            label: 'Portfolio',
                          },
                          ...options,
                        ],
                      }),
                    ],
                  }),
                  Checkbox('social', {
                    label: 'Réseaux sociaux',
                    default: true,
                  }),
                  Checkbox('themeswitcher', {
                    label: 'Thème',
                    default: false,
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
    editor.registerComponent('footer-credit', {
      title: 'Crédit',
      category: 'Footer',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              HTMLText('credit', {
                label: 'Crédit',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              Repeater('links', {
                addLabel: 'Ajouter un lien',
                fields: [
                  Text('label', {
                    label: 'Label',
                    help: 'Laisser vide pour garder le nom de la page',
                    multiline: false,
                  }),
                  Select('url', {
                    label: 'Page ou article',
                    options: [
                      {
                        value: '',
                        label: '',
                      },
                      {
                        value: JSON.stringify({
                          path: 'home',
                          label: 'Accueil',
                        }),
                        label: 'Accueil',
                      },
                      {
                        value: JSON.stringify({
                          path: 'blog.index',
                          label: 'Blog',
                        }),
                        label: 'Blog',
                      },
                      {
                        value: JSON.stringify({
                          path: 'portfolio.index',
                          label: 'Portfolio',
                        }),
                        label: 'Portfolio',
                      },
                      ...options,
                    ],
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getHeader = options => {
    editor.registerComponent('header', {
      title: 'Header',
      category: 'Template',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Checkbox('logo', {
                label: 'Logo',
                default: false,
              }),
              Checkbox('searchbar', {
                label: 'Barre de recherche',
                default: false,
              }),
              Checkbox('auth', {
                label: 'Authentification',
                default: false,
              }),
              Repeater('links', {
                addLabel: 'Ajouter un lien',
                fields: [
                  Text('label', {
                    label: 'Label',
                    help: 'Laisser vide pour garder le nom de la page',
                    multiline: false,
                  }),
                  Select('url', {
                    label: 'Page ou article',
                    options: [
                      {
                        value: '',
                        label: '',
                      },
                      {
                        value: JSON.stringify({
                          path: 'home',
                          label: 'Accueil',
                        }),
                        label: 'Accueil',
                      },
                      {
                        value: JSON.stringify({
                          path: 'blog.index',
                          label: 'Blog',
                        }),
                        label: 'Blog',
                      },
                      {
                        value: JSON.stringify({
                          path: 'portfolio.index',
                          label: 'Portfolio',
                        }),
                        label: 'Portfolio',
                      },
                      ...options,
                    ],
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [
              ...appearances(0),
              Number('logoWidth', {
                label: 'Largeur du logo',
                default: 120,
              }),
              Number('logoHeight', {
                label: 'Hauteur du logo',
                default: 120,
              }),
            ],
          },
        ),
      ],
    })
  }

  const getHeaderDocumentation = options => {
    let linkComponent = Repeater('links', {
      addLabel: 'Ajouter un lien',
      fields: [
        Text('label', {
          label: 'Label',
          help: 'Laisser vide pour garder le nom de la page',
          multiline: false,
        }),
        Select('url', {
          label: 'Documentation',
          options: [
            {
              value: '',
              label: '',
            },
            ...options,
          ],
        }),
        Select('icon', {
          label: 'Icône',
          options: [
            {
              value: '',
              label: '',
            },
            {
              value: 'home',
              label: 'Accueil',
            },
            {
              value: 'pen',
              label: 'Stylo',
            },
          ],
        }),
      ],
    })

    linkComponent.options.fields.push(linkComponent)

    editor.registerComponent('headerDocumentation', {
      title: 'Header Documentation',
      category: 'Template',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Text('title', {
                label: 'Titre',
                help: 'Laisser vide pour ne pas mettre de titre',
                multiline: false,
              }),
              linkComponent,
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getPageHeader = () => {
    editor.registerComponent('page-header', {
      title: 'Titre de la page',
      category: 'Page',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              HTMLText('title', {
                label: 'Titre',
                multiline: false,
                allowHeadings: true,
                colors: Object.values(colors),
                default: 'Lorem ipsum dolor sit amet',
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getBlogHeader = () => {
    editor.registerComponent('blog-header', {
      title: 'Blog header',
      category: 'Template',
      fields: [
        Tabs({
          label: 'Apparence',
          fields: [...appearances(0)],
        }),
      ],
    })
  }

  const getArticleHeader = () => {
    editor.registerComponent('article-header', {
      title: 'Article header',
      category: 'Article',
      fields: [
        Tabs({
          label: 'Apparence',
          fields: [...appearances(0)],
        }),
      ],
    })
  }

  const getBlogPosts = () => {
    editor.registerComponent('blog-posts', {
      title: 'Liste de tous les articles',
      category: 'Template',
      fields: [
        Tabs({
          label: 'Apparence',
          fields: [...appearances(0)],
        }),
      ],
    })
  }

  const getContactForm = () => {
    editor.registerComponent('contact-form', {
      title: 'Formulaire de contact',
      category: 'Formulaire',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Repeater('fields', {
                addLabel: 'Ajouter un champ',
                fields: [
                  Text('label', {
                    label: 'Label',
                    multiline: false,
                  }),
                  Text('name', {
                    label: 'Nom',
                    multiline: false,
                  }),
                  Select('type', {
                    label: 'Type de champ',
                    default: 'input',
                    options: [
                      {
                        value: 'input',
                        label: 'Input',
                      },
                      {
                        value: 'textarea',
                        label: 'TextArea',
                      },
                      {
                        value: 'checkbox',
                        label: 'Checkbox',
                      },
                    ],
                  }),
                  Checkbox('required', {
                    label: 'Requis',
                    default: false,
                  }),
                  Checkbox('full', {
                    label: 'Pleine largeur',
                    default: false,
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getServiceSection = () => {
    editor.registerComponent('service-section', {
      title: 'Section des services',
      category: 'Page',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Repeater('blocs', {
                label: 'Contenu',
                addLabel: 'Ajouter un contenu',
                fields: [
                  Text('title', { label: 'Titre', multiline: false }),
                  ImageUrl('image', {
                    label: 'Image',
                    default: '',
                    onBrowse: onBrowse,
                  }),
                  HTMLText('content', {
                    label: 'Contenu',
                    multiline: true,
                    allowHeadings: true,
                    colors: Object.values(colors),
                    default:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getComments = () => {
    editor.registerComponent('comments', {
      title: 'Commentaires',
      category: 'Article',
      fields: [
        Tabs({
          label: 'Apparence',
          fields: [...appearances(0)],
        }),
      ],
    })
  }

  const getBlogLayout = () => {
    editor.registerComponent('blog-layout', {
      title: 'Présentation Blog',
      category: 'Article',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              ImageUrl('mainImage', {
                label: 'Image principale',
                default: '',
                onBrowse: onBrowse,
              }),
              ImageUrl('secondaryImage', {
                label: 'Image secondaire',
                default: '',
                onBrowse: onBrowse,
              }),
              Checkbox('invertingImages', {
                label: 'Inverser les images',
                default: false,
              }),
              Text('title', { label: 'Titre', multiline: false }),
              HTMLText('textAtLeft', {
                label: 'Texte à gauche',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              HTMLText('textAtRight', {
                label: 'Texte à droite',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(0)],
          },
        ),
      ],
    })
  }

  const getTest = () => {
    editor.registerComponent('test', {
      title: 'Test',
      category: 'Colonnes',
      fields: [
        Tabs(
          {
            label: 'Contenu',
            fields: [
              Row([
                Text('title', {
                  label: 'Titre',
                  default: 'Lorem ipsum dolor sit amet',
                  multiline: false,
                }),
                TextAlign('titleAlign', {
                  label: 'Alignement',
                  default: 'center',
                }),
              ]),
              HTMLText('content', {
                label: 'Contenu',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              Repeater('items', {
                addLabel: 'Ajouter un item',
                fields: [
                  Text('title', {
                    label: 'Titre',
                    default: 'Lorem ipsum dolor sit amet',
                    multiline: false,
                  }),
                  HTMLText('content', {
                    label: 'Contenu',
                    multiline: true,
                    allowHeadings: true,
                    colors: Object.values(colors),
                    default:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
                  }),
                  Checkbox('isTest', {
                    label: 'Test effectué',
                    default: false,
                  }),
                  HTMLText('comment', {
                    label: 'Commentaire',
                    multiline: true,
                    allowHeadings: true,
                    colors: Object.values(colors),
                    default:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
                  }),
                ],
              }),
            ],
          },
          {
            label: 'Apparence',
            fields: [...appearances(5)],
          },
        ),
      ],
    })
  }

  if (mode === 'post') {
    getHero()
    getLastPosts()
    getPageHeader()
    getArticleHeader()
    getContactForm()
    getServiceSection()
    getComments()
    getBlogLayout()
    getTest()

    editor.registerTemplate({
      name: 'Template réalisation',
      data: [
        {
          padding: 2,
          backgroundColor: 'var(--color-light)',
          backgroundDesktop: '',
          backgroundMobile: '',
          titleColor: 'var(--contrast)',
          textColor: 'var(--color-dark)',
          backgroundSize: '',
          backgroundRepeat: '',
          backgroundXPosition: '',
          backgroundYPosition: '',
          _name: 'article-header',
        },
        {
          mainImage: 0,
          secondaryImage: 0,
          title: 'Lorem ipsum dolor sit amet',
          textAtLeft:
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          textAtRight:
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          padding: 4,
          backgroundColor: '',
          backgroundDesktop: '',
          backgroundMobile: '',
          titleColor: 'var(--contrast)',
          textColor: 'var(--color-dark)',
          backgroundSize: '',
          backgroundRepeat: '',
          backgroundXPosition: '',
          backgroundYPosition: '',
          invertingImages: false,
          _name: 'blog-layout',
        },
        {
          mainImage: 0,
          secondaryImage: 0,
          title: 'Lorem ipsum dolor sit amet',
          textAtLeft:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          textAtRight:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          padding: 4,
          backgroundColor: '',
          backgroundDesktop: '',
          backgroundMobile: '',
          titleColor: 'var(--contrast)',
          textColor: 'var(--color-dark)',
          backgroundSize: '',
          backgroundRepeat: '',
          backgroundXPosition: '',
          backgroundYPosition: '',
          invertingImages: true,
          _name: 'blog-layout',
        },
        {
          mainImage: 0,
          secondaryImage: 0,
          title: 'Lorem ipsum dolor sit amet',
          textAtLeft:
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          textAtRight:
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi blanditiis consectetur, dicta dolore doloribus esse fuga impedit molestiae nulla optio porro quam quasi, rerum ullam vero voluptatum. Mollitia, quas?</p>',
          padding: 4,
          backgroundColor: '',
          backgroundDesktop: '',
          backgroundMobile: '',
          titleColor: 'var(--contrast)',
          textColor: 'var(--color-dark)',
          backgroundSize: '',
          backgroundRepeat: '',
          backgroundXPosition: '',
          backgroundYPosition: '',
          invertingImages: false,
          _name: 'blog-layout',
        },
      ],
    })
  }

  if (mode === 'template') {
    jsonFetchOrFlash('/api/posts', {
      method: 'GET',
    })
      .then(data => {
        const options = []
        const documentations = []
        data['data'].map(post => {
          if (post.type !== 'Documentation') {
            options.push({
              label: `${post.type} - ${post.label}`,
              value: JSON.stringify({
                path: post.path,
                label: post.label,
                slug: post.slug,
              }),
            })
          } else {
            documentations.push({
              label: `${post.type} - ${post.label}`,
              value: JSON.stringify({
                path: post.path,
                label: post.label,
                slug: post.slug,
              }),
            })
          }
        })

        getHero()
        getLastPosts()
        getHeader(options)
        getFooter(options)
        getBlogHeader()
        getBlogPosts()
        getHeaderDocumentation(documentations)
      })
      .catch(console.error)
  }
}

// On enregistre le custom element
editor.defineElement()
