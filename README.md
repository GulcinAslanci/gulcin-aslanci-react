## Bilgisayar Programcılığı Uzaktan Eğitim React.js Projesi - Gülçin Aslancı

Bu ödev kapsamında, projeyi React.js ile geliştirdim. Başlangıçta, "gülçin-aslancı" ismiyle bir proje dizini oluşturduğum ve npm ve npx komutları ile gerekli paketleri projeye dahil ettiğim adımla başladım. Paketlerin başarılı bir şekilde kurulumunun ardından, App.tsx dosyasına gerekli React bileşenlerini entegre ederek uygulama yapılandırmasına başladım.

Proje, sosyal medya ikonları ve kişisel fotoğrafımı da içerecek şekilde düzenledim. Gerekli medya dosyalarını projeye ekledim ve uygun yerlere yükledim. Sosyal medya bağlantıları, projeye işlevsellik katmak amacıyla React bileşenleriyle birlikte yerleştirdim. Bu adımları, ödevde belirttiğiniz tüm kriterleri karşılamak adına özenle seçip ve projeye dahil ettim.

## React.js Vite Yapılandırması ve ESLint Kurulumu 

Projede, React.js için yapılandırılmış minimal bir Vite setup'ı kullanıldı. Vite, yüksek performanslı geliştirme süreçleri için optimize edilmiş bir yapılandırmadır. HMR (Hot Module Replacement) desteği ile React bileşenleri üzerinde yapılan değişikliklerin anında uygulanabilmesi sağlanmıştır. Geliştirme süreci boyunca, ESLint kurallarını projeye entegre ettim ve projenin tür güvenliği (type safety) konusunda daha katı kurallar uygulanabilmesi adına ESLint yapılandırmasını genişlettim.

Özellikle, üretim uygulamaları geliştirilirken, ESLint yapılandırmasını tür farkındalığı (type aware) kurallarıyla güncellemeyi tercih ettim. Bunun için parserOptions kısmına, tsconfig.node.json ve tsconfig.app.json dosyalarını projeye dahil ettim. Bu sayede, projenin tüm tür güvenliği kurallarıyla uyumlu hale gelmesi sağladı.

Ayrıca, tseslint.configs.recommended yerine tseslint.configs.recommendedTypeChecked ya da tseslint.configs.strictTypeChecked seçeneklerinden biri kullanılarak, geliştirme aşamasındaki kod kalitesi daha üst seviyeye çıkarmış oldum. Bunun yanı sıra, eslint-plugin-react plugin’i entegre edilerek React ile ilgili daha özelleşmiş linting kuralları uygulandı. jsx-runtime kurallarını da ekleyerek, modern React özellikleriyle uyumlu bir yapı kurdum.

Proje yapılandırmasını oluştururken, sadece React’in temel özelliklerine odaklanmadım, aynı zamanda tür güvenliği ve doğru yapılandırma adına ESLint’in önerdiği en iyi uygulamaları da takip ettim. Bu şekilde, uygulamanın daha sağlam, sürdürülebilir olmasını sağladım.




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js

import react from 'eslint-plugin-react'

export default tseslint.config({

  settings: { react: { version: '18.3' } },
  plugins: {
  
    react,
  },
  rules: {
    
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
#   g u l c i n - a s l a n c i - r e a c t  
 