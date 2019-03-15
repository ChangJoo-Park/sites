import 'prismjs/themes/prism-tomorrow.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'ko' }
  head.meta.push({ name: 'title', content: '1Q87 - Software Engineer' })
  head.meta.push({ name: 'Description', content: 'Hello World - Blog in StartUp Company' })

  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })
  head.link.push({
    rel: 'stylesheet',
    href: '//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css'
  })
}