module.exports = {
  title: 'Enqueue Zero',
  description: 'Enqueue Zero is publishing code principles.',
  ga: 'UA-36183732-4',
  lastUpdated: 'Last Updated',
  themeConfig: {
    repo: 'soasme/enqueuezero',
    editLinks: true,
    sidebar: {
      '/category/': ['algorithm', 'architecture', 'programming', 'techshack', 'utility'],
      '/changelog.html': ['', 'changelog'],
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    extendMarkdown: (md) => {
      // TOOD: integrate mermaid
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search', {
        searchMaxSuggestions: 5
      },
    ],
    [
      '@vuepress/register-components', {
        componentsDir: '.vuepress/components',
      }
    ]
  ]
}
