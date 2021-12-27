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
          'back': '#808080',
          'front': '#2b3137',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#1AA2D4',
          'skill-2': '#D0A384',
          'skill-3': '#ff0000',
        },
      },
    },
  ],
}