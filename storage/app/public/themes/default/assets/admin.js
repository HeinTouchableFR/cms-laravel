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
          default: 2,
        }),
        fields.Range('fontSize', {
          label: "Taille d'écriture",
          min: 1,
          max: 8,
          step: 1,
          default: 1,
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

  const link = (options = {}) => {
    return [
      fields.Text('label', {
        label: 'Label',
        help: 'Laisser vide pour garder le nom de la page',
        multiline: false,
      }),
      fields.Select('type', {
        label: 'Type de lien',
        default: 'internal',
        options: [
          {
            label: 'Lien interne',
            value: 'internal',
          },
          {
            label: 'Lien externe',
            value: 'external',
          },
        ],
      }),
      fields
        .Select('url', {
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
        })
        .when('type', 'internal'),
      fields
        .Text('url', {
          label: 'URL',
          multiline: false,
        })
        .when('type', 'external'),
    ]
  }

  const shape = (suffix = '') => {
    return [
      fields.Row([
        fields.Checkbox(`enableShape${suffix}`, {
          label: 'Vague',
        }),
        fields
          .Color(`colorShape${suffix}`, {
            label: 'Couleur',
            colors: Object.values(colors),
            default: 'var(--color)',
          })
          .when(`enableShape${suffix}`, true),
        fields
          .Select(`directionShape${suffix}`, {
            label: 'Direction',
            default: 'top',
            options: [
              {
                label: 'Haut',
                value: 'top',
              },
              {
                label: 'Bas',
                value: 'bottom',
              },
            ],
          })
          .when(`enableShape${suffix}`, true),
      ]),
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

  const getFooter = options => {
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
                fields: [...link(options)],
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
              fields.Checkbox('auth', {
                label: 'Authentification',
                default: false,
              }),
              fields.Repeater('links', {
                addLabel: 'Ajouter un lien',
                fields: [...link(options)],
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
                  Text('title', {
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
    getTest()
  }

  if (mode === 'template') {
    editor
      .jsonFetchOrFlash('/api/posts', {
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
