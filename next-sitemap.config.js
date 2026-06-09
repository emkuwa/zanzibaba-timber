/** @type {import('next-sitemap').NextSitemapConfig} */
module.exports = {
  siteUrl: 'https://timber.zanzibaba.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/admin/*'],
  sitemapConfig: {
    changefreq: 'weekly',
    priority: 0.7,
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/admin/' },
    ],
  },
};