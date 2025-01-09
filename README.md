   ## Bilgisayar Programcılığı Uzaktan Eğitim React.js Projesi - Gülçin Aslancı
   
   Öncelikle Proje dizinimi "gülçin-aslancı" olarak oluşturdum ve gerekli depolar npm ve npx komutlarıyla dahil ettim. Paketlerin başarılı bir şekilde kurulumu sonrasında, App.tsx dosyasına React parçaları entegre ederek uygulamam çalıştırmaya  başladı.

Projede sosyal medya ikonları ve kişisel fotoğraflarımı ekledim. Ödevimde tüm parametrelere uygun olarak, projeye dahil ettim.



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
