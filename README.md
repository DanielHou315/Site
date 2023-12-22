[Reference](https://zhuanlan.zhihu.com/p/470586190)

# Project Guide
## Initialize Project
npx create-next-app@latest portfolio
​
## Configure Dark Mode
portfolio --> tailwind.config.ts --> Config: add “ darkMode: 'media', ”
​
## Run Dev Server
```
npm run dev
```
starts the dev server so you can see webpage at http://localhost:3000

## Test Build Website
```
npm run build
```
builds the site locally so you can check for any compilation errors.

## Export Website

Export of this site is completed with Github Actions. 

# Resources

## Tailwind CSS Documentation
https://v2.tailwindcss.com/docs/

## HTML Entities
https://www.w3schools.com/html/html_entities.asp


## Page Layout/Template in Next.js

[Layout/Templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) allow subpages of each section to have the exact same parts of pages wrapped around them, so you don't have to rewrite, say the background or menu bar for each section.

Layout shares entity across all pages using it, while template initialize a unique entity for each page. They CANNOT pass data down through child pages. 


