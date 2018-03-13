module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains authors.
  blogAuthorId: "Admin", // Default and fallback author ID used for blog posts without a defined author.
  siteTitle: "A Layman's Guide", // Site title.
  siteTitleAlt: "Layman's Guide", // Alternative site title for SEO.
  siteLogo:
    "https://t3.ftcdn.net/jpg/01/77/51/36/240_F_177513621_B6ZCurdWWheZzIAZjYEzNe0H4InRdk5f.jpg", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://laymansguide.github.io", // Domain of website without pathPrefix.
  pathPrefix: "/site", // Prefixes all links. (when deployed to laymansguide.github.io/site/.
  siteDescription:
    "Goto destination when starting a complex subject", // Website description 
  siteCover:
    "https://www.freelancermap.com/images/profil_elemente/background-profile.jpg", // Cover image used in header for home page. 
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "admin", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "XX-111111111-1", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/ansh103",
    "https://facebook.com/ab.designing",
    "mailto:anshbalde@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ansh103",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Facebook",
      url: "https://facebook.com/ab.designing",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:anshbalde@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Layman's Guide" ,// Label used before the year
    year: "2018", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://github.com/laymansguide" 
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#000000", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
