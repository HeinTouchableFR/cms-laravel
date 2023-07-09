let editor = window.editor
editor.toFrench()
const fields = editor.fields()

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

  const appearances = (defaultPadding = 0) => {
    const background = [
      fields.Color('backgroundColor', {
        label: 'Fond',
        colors: Object.values(colors),
      }),
      fields.ImageUrl('backgroundDesktop', {
        label: 'Image de fond',
        default: '',
        onBrowse: editor.onBrowse,
      }),
      fields.ImageUrl('backgroundMobile', {
        label: 'Image de fond (Mobile)',
        default: '',
        onBrowse: editor.onBrowse,
      }),
    ]

    return [
      fields.Text('id', {
        label: 'ID',
        multiline: false,
      }),
      fields.Range('padding', {
        label: 'Padding vertical',
        default: defaultPadding,
        min: 0,
        max: 6,
        step: 1,
      }),
      fields.Checkbox('animate', {
        label: 'Element animé',
        default: false,
      }),
      fields.Row(background),
      fields.Row([
        fields.Color('titleColor', {
          label: 'Couleur des titres',
          colors: Object.values(colors),
          default: colors.contrast,
        }),
        fields.Color('textColor', {
          label: 'Couleur des textes',
          colors: Object.values(colors),
          default: colors.colorDark,
        }),
      ]),
      fields.Row([
        fields.Range('titleFontSize', {
          label: "Taille d'écriture des titres",
          min: 1,
          max: 8,
          step: 1,
        }),
        fields.Range('fontSize', {
          label: "Taille d'écriture",
          min: 1,
          max: 8,
          step: 1,
        }),
      ]),
      fields
        .Row([
          fields.Select('backgroundSize', {
            label: "Taille de l'image",
            default: '',
            options: [
              {
                value: 'cover',
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
          fields.Select('backgroundRepeat', {
            label: 'Répétition',
            default: '',
            options: [
              {
                value: 'no-repeat',
                label: 'Aucune',
              },
              {
                label: 'X',
                value: 'repeat-x',
              },
              {
                label: 'Y',
                value: 'repeat-y',
              },
              {
                label: 'X & Y',
                value: 'repeat',
              },
            ],
          }),
          fields.Select('backgroundXPosition', {
            label: 'Position (X)',
            default: '',
            options: [
              {
                value: 'left',
                label: 'Gauche',
              },
              {
                value: 'center',
                label: 'Centrer',
              },
              {
                value: 'right',
                label: 'Droite',
              },
            ],
          }),
          fields.Select('backgroundYPosition', {
            label: 'Position (Y)',
            default: '',
            options: [
              {
                value: 'top',
                label: 'Haut',
              },
              {
                value: 'center',
                label: 'Centrer',
              },
              {
                value: 'bottom',
                label: 'Bas',
              },
            ],
          }),
        ])
        .when('backgroundDesktop', true),
    ]
  }

  const getHero = () => {
    editor.registerComponent('hero', {
      title: 'Hero',
      category: 'Colonnes',
      fields: [
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Row([
                fields.Text('title', {
                  label: 'Titre',
                  default: 'Lorem ipsum dolor sit amet',
                  multiline: false,
                }),
                fields.TextAlign('titleAlign', {
                  label: 'Alignement',
                  default: 'center',
                }),
              ]),
              fields.HTMLText('content', {
                label: 'Contenu',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              fields.Repeater('buttons', {
                addLabel: 'Ajouter un bouton',
                fields: [
                  fields.Text('label', {
                    label: 'Label',
                    default: 'Call to action',
                    multiline: false,
                  }),
                  fields.Text('url', { label: 'URL', multiline: false }),
                  fields.Select('style', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Text('title', {
                label: 'Titre',
                default: 'Lorem ipsum dolor sit amet',
                multiline: false,
              }),
              fields.HTMLText('content', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Repeater('columns', {
                addLabel: 'Ajouter une colonne',
                fields: [
                  fields.Text('title', {
                    label: 'Titre',
                    default: 'Lorem ipsum dolor sit amet',
                    multiline: false,
                  }),
                  fields.HTMLText('content', {
                    label: 'Contenu',
                    multiline: true,
                    allowHeadings: true,
                    colors: Object.values(colors),
                    default:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iure necessitatibus nulla! Aperiam culpa deserunt iste mollitia nobis obcaecati reiciendis sapiente sunt tempora. Architecto aut consectetur est fugiat ipsum saepe.',
                  }),
                  fields.Repeater('links', {
                    addLabel: 'Ajouter un lien',
                    fields: [
                      fields.Text('label', {
                        label: 'Label',
                        help: 'Laisser vide pour garder le nom de la page',
                        multiline: false,
                      }),
                      fields.Select('url', {
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
                  fields.Checkbox('social', {
                    label: 'Réseaux sociaux',
                    default: true,
                  }),
                  fields.Checkbox('themeswitcher', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.HTMLText('credit', {
                label: 'Crédit',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              fields.Repeater('links', {
                addLabel: 'Ajouter un lien',
                fields: [
                  fields.Text('label', {
                    label: 'Label',
                    help: 'Laisser vide pour garder le nom de la page',
                    multiline: false,
                  }),
                  fields.Select('url', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Checkbox('logo', {
                label: 'Logo',
                default: false,
              }),
              fields.Checkbox('searchbar', {
                label: 'Barre de recherche',
                default: false,
              }),
              fields.Checkbox('auth', {
                label: 'Authentification',
                default: false,
              }),
              fields.Repeater('links', {
                addLabel: 'Ajouter un lien',
                fields: [
                  fields.Text('label', {
                    label: 'Label',
                    help: 'Laisser vide pour garder le nom de la page',
                    multiline: false,
                  }),
                  fields.Select('url', {
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
              fields.Number('logoWidth', {
                label: 'Largeur du logo',
                default: 120,
              }),
              fields.Number('logoHeight', {
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
    let linkComponent = fields.Repeater('links', {
      addLabel: 'Ajouter un lien',
      fields: [
        fields.Text('label', {
          label: 'Label',
          help: 'Laisser vide pour garder le nom de la page',
          multiline: false,
        }),
        fields.Select('url', {
          label: 'Documentation',
          options: [
            {
              value: '',
              label: '',
            },
            ...options,
          ],
        }),
        fields.Select('icon', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Text('title', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.HTMLText('title', {
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
        fields.Tabs({
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
        fields.Tabs({
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
        fields.Tabs({
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Repeater('fields', {
                addLabel: 'Ajouter un champ',
                fields: [
                  fields.Text('label', {
                    label: 'Label',
                    multiline: false,
                  }),
                  fields.Text('name', {
                    label: 'Nom',
                    multiline: false,
                  }),
                  fields.Select('type', {
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
                        value: 'fields.checkbox',
                        label: 'fields.Checkbox',
                      },
                    ],
                  }),
                  fields.Checkbox('required', {
                    label: 'Requis',
                    default: false,
                  }),
                  fields.Checkbox('full', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Repeater('blocs', {
                label: 'Contenu',
                addLabel: 'Ajouter un contenu',
                fields: [
                  fields.Text('title', { label: 'Titre', multiline: false }),
                  fields.ImageUrl('image', {
                    label: 'Image',
                    default: '',
                    onBrowse: editor.onBrowse,
                  }),
                  fields.HTMLText('content', {
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
        fields.Tabs({
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.ImageUrl('mainImage', {
                label: 'Image principale',
                default: '',
                onBrowse: editor.onBrowse,
              }),
              fields.ImageUrl('secondaryImage', {
                label: 'Image secondaire',
                default: '',
                onBrowse: editor.onBrowse,
              }),
              fields.Checkbox('invertingImages', {
                label: 'Inverser les images',
                default: false,
              }),
              fields.Text('title', { label: 'Titre', multiline: false }),
              fields.HTMLText('textAtLeft', {
                label: 'Texte à gauche',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              fields.HTMLText('textAtRight', {
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
        fields.Tabs(
          {
            label: 'Contenu',
            fields: [
              fields.Row([
                fields.Text('title', {
                  label: 'Titre',
                  default: 'Lorem ipsum dolor sit amet',
                  multiline: false,
                }),
                fields.TextAlign('titleAlign', {
                  label: 'Alignement',
                  default: 'center',
                }),
              ]),
              fields.HTMLText('content', {
                label: 'Contenu',
                multiline: true,
                allowHeadings: true,
                colors: Object.values(colors),
                default:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
              }),
              fields.Repeater('items', {
                addLabel: 'Ajouter une catégorie',
                fields: [
                  fields.Text('title', {
                    label: 'Titre',
                    default: 'Lorem ipsum dolor sit amet',
                    multiline: false,
                  }),
                  fields.Repeater('sub_items', {
                    addLabel: 'Ajouter un test',
                    fields: [
                      fields.HTMLText('content', {
                        label: 'Contenu',
                        multiline: true,
                        allowHeadings: true,
                        colors: Object.values(colors),
                        default:
                          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum impedit laborum mollitia similique suscipit voluptatum.',
                      }),
                      fields.Checkbox('isTest', {
                        label: 'Test effectué',
                        default: false,
                      }),
                      fields.HTMLText('comment', {
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
    editor
      .jsonFetchOrFlash('/api/posts', {
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
