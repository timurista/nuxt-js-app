# Demo App using Nuxtjs and Vue

> My unreal Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

Initially this was created by `create-vue-app` cli

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Nuxt Config

you can update title and description in config to see

on any PAGE component you can add `head` property and set the title

## Loading indicator
You can change the color, height and duration. And also failedColor, to tweak that loading bar.

## Build Setting
you can fine toon everything

## Config Props
Router, you can configure some things about view router
`router`, base path ie my app etc.
extendRoutes... you can add your own routes
function
```
extendRoutes(routes, resolve) {
  routes.push({
    path: '*'
    component: resolve(__dirname, 'pages/index.vue')
  })
}
```

linkActive to attach it to any active link

## Plugins in Nuxt Config

plugins let you execute some code before app is rendered and mounted. Cumbersome to import them. But right before root view.

## Universal vs SPA
First view rendered dynamically on the server
after first load, app turns into spa
great for seo
NODE JS needed

## SPA
app starts on first load
app stays spa
like normal vue app but simplified development
Static Host needed like s3

## static app
pre-rendered views loaded
after first load, app turns into SPA
great for seo
- static host needed
- with content, prepopulated files


