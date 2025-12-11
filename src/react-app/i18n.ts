import i18n from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  // 懒加载：只有用户切到英文，才去请求英文的 JSON
  .use(resourcesToBackend((language, namespace, callback) => {
    import(`./locales/${language}/${namespace}.json`)
      .then(resources => callback(null, resources))
      .catch(error => callback(error, null))
  }))
  .init({
    lng: 'zh-CN',
    fallbackLng: 'en-US',
    ns: ['ui', 'weapons', 'gears', 'gearmods', 'talents', 'attributes'], // 预加载的命名空间
    interpolation: { escapeValue: false }, // React 自带防注入
  })

export default i18n
