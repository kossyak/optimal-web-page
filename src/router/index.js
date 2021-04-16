const routes = [
  {
    name: 'menu',
    path: 'menu/:name',
    data: () => import('@/menu/form/menu'),
    methods: () => import('@/methods/menu')
  },
  {
    name: 'form',
    path: 'form',
    data: () => import('@/forms/constructor')
  }
]

export default async function router() {
  const page = await import('/product/data.json')
  console.log(page)
  // document.body.innerHTML += `<img src="${require('/assets/logo.svg')}">`
  const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '')
  let d, m
  for (const route of routes) {
    try {
      const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$')
      const partPath = currentPath.match(reg)
      if (partPath) {
        d = await route.data()
        m = route in 'methods' && await route.methods()
      }
    } catch (err) {
      console.log(err)
    }
  }
  return { data: d && d.default, methods: m && m.default }
}