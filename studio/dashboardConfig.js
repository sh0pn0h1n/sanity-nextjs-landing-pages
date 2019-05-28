export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ceceb8fcb2a0db9dc565c95',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-chx4u23z',
                  apiId: '7d2a4197-bae9-4ac0-95d6-e56d2f47a184'
                },
                {
                  buildHookId: '5ceceb8ff1819d04d302087d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-42zx5onp',
                  apiId: 'b5a30598-53cd-4d87-a720-6bb1db290a3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sh0pn0h1n/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-42zx5onp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
