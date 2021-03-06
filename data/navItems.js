const navItems = {}

// Items in the top nav and breadcrumb navs
navItems.all = [
  { href: '/blog/', text: 'Blog' },
  { href: '/blog/tags/', text: 'Tags' },
  { href: '/cookbook/', text: 'Cookbook' },
  { href: '/weekly-log/', text: 'Weekly log' },
  { href: '/weekly-log/2021/', text: '2021' },
]

navItems.topNav = navItems.all.filter((item) =>
  ['Blog', 'Cookbook', 'Weekly log'].includes(item.text)
)

module.exports = navItems
