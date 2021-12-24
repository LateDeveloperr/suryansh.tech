module.exports = {
  siteMetadata: {
    description: "Personal page of Suryansh Jaiswal",
    locale: "en",
    title: "Suryansh Jaiswal",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: {
          'back': '#edf0f3',
          'front': '#2b3137',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#405060',
          'skill-2': '#fc8732',
          'skill-3': '#2ebc50',
        },
      },
    },
  ],
}