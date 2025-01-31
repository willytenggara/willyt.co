const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Ensure options are plain JavaScript objects and values
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // ...existing code...
})
