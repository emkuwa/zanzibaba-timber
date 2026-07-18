/** @type {import('next-sitemap').NextSitemapConfig} */
module.exports = {
  siteUrl: 'https://timber.zanzibaba.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/admin/*'],
  transform: async (config, path) => {
    const isHardwoodProduct = path.startsWith('/hardwood/')
    return {
      loc: path,
      changefreq: isHardwoodProduct ? 'weekly' : config.changefreq,
      priority: isHardwoodProduct ? 0.9 : path === '/hardwood' ? 0.85 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
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
