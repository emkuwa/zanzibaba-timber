/** @type {import('next-sitemap').NextSitemapConfig} */
module.exports = {
  siteUrl: 'https://timber.zanzibaba.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/admin/' },
    ],
  },
  transform: async (config, path) => {
    const base = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
    }

    if (path === '/' || path === '/sw') {
      return { ...base, changefreq: 'daily', priority: 1.0 }
    }

    if (
      path === '/prices' || path === '/sw/prices' ||
      path === '/timber-sizes' || path === '/sw/timber-sizes' ||
      path === '/marine-board' || path === '/sw/marine-board' ||
      path === '/plywood' || path === '/sw/plywood' ||
      path === '/treated-wood-poles' || path === '/sw/mbao-za-dawa'
    ) {
      return { ...base, changefreq: 'weekly', priority: 0.95 }
    }

    if (
      path === '/marine-board-zanzibar' ||
      path === '/plywood-zanzibar' ||
      path === '/timber-zanzibar' ||
      path === '/marine-board-price-zanzibar' ||
      path === '/plywood-price-zanzibar' ||
      path === '/construction-plywood-zanzibar' ||
      path === '/concrete-formwork-marine-board' ||
      path === '/about-zanzibaba-timber'
    ) {
      return { ...base, changefreq: 'monthly', priority: 0.90 }
    }

    if (
      path.startsWith('/locations/') ||
      path.startsWith('/sw/locations/') ||
      path === '/locations' || path === '/sw/locations'
    ) {
      return { ...base, changefreq: 'monthly', priority: 0.85 }
    }

    if (path === '/blog' || path === '/sw/blog') {
      return { ...base, changefreq: 'weekly', priority: 0.85 }
    }

    if (
      path.startsWith('/blog/') ||
      path.startsWith('/sw/blog/')
    ) {
      return { ...base, changefreq: 'monthly', priority: 0.70 }
    }

    if (
      path === '/about' || path === '/sw/about' ||
      path === '/contact' || path === '/sw/contact'
    ) {
      return { ...base, changefreq: 'monthly', priority: 0.60 }
    }

    if (
      path.startsWith('/timber-sizes/') ||
      path.startsWith('/sw/timber-sizes/') ||
      path.startsWith('/marine-board/') ||
      path.startsWith('/sw/marine-board/') ||
      path.startsWith('/plywood/') ||
      path.startsWith('/sw/plywood/')
    ) {
      return { ...base, changefreq: 'weekly', priority: 0.90 }
    }

    return base
  },
};