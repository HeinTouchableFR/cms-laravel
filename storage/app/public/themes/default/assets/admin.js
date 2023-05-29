import { jsonFetchOrFlash } from 'https://unpkg.com/@heintouchable/functions@0.0.5/Functions.standalone.js'
import {
  Checkbox,
  Color,
  Editor,
  FR,
  HTMLText,
  ImageUrl,
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

  const getFooter = options => {
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
                addLabel: 'Ajouter une catégorie',
                fields: [
                  Text('title', {
                    label: 'Titre',
                    default: 'Lorem ipsum dolor sit amet',
                    multiline: false,
                  }),
                  Repeater('sub_items', {
                    addLabel: 'Ajouter un test',
                    fields: [
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
    getTest()
  }

  if (mode === 'template') {
    jsonFetchOrFlash('/api/posts', {
      method: 'GET',
    })
      .then(data => {
        const options = []
        data['data'].map(post => {
          options.push({
            label: `${post.type} - ${post.label}`,
            value: JSON.stringify({
              path: post.path,
              label: post.label,
              slug: post.slug,
            }),
          })
        })

        getHero()
        getHeader(options)
        getFooter(options)
        getBlogHeader()
        getBlogPosts()
      })
      .catch(console.error)
  }
}

// On enregistre le custom element
editor.defineElement()
