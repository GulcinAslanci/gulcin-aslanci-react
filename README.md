## Bilgisayar Programcılığı Uzaktan Eğitim React.js CV Projesi - Gülçin Aslancı
   
   - Projenin ilk adım olarak dizin olarak "gülçin-aslancı" olarak oluşturulmasında, düzenli ve erişilebilir bir yapı elde ettim. Böylece proje dosyalarım kolayca yönetilebilir hale geldi.

- Gereksinimlerin tümünün kaydedilmesi npm ve npx komutları ile sorunsuz bir şekilde projeye dahil edilmesi. Paketlerin başarılı bir biçimlendirme sonrasında, projede kullanacağım tüm kütüphaneleri eksiksiz şekilde entegre ettim.

- App.tsx dosyasına React'in entegre edilmesi, uygulamanın temel olarak çözülmesini sağladım ve projeyi çalıştırmaya başlandı. Bu sayede uygulama kullanıcı etkileşimlerini düzgün bir şekilde yönetebilecek hale geldi.

- Projeye görsel açıdan zenginlik katmak amacıyla sosyal medya ikonları ve kişisel fotoğraflar ekledim. Bu sayede proje yalnızca işlevsel anlatımları aynı zamanda görsel olarak da dikkat çekici bir hale geldi.

- Ödevde tüm belirtilen etkilere ve sıcaklıklara uygun olarak projeyi tasarladım ve geliştirdim. Her aşamanın amacına uygun, fonksiyonel ve estetik açıdan zengin bir yapıdan oluşturdum.



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
#   g u l c i n - a s l a n c i - r e a c t 
 
 
