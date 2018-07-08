# PAGES

This is an exmaple of vue pages for vue routing.

## Theory

You have a layout which is a frame in nuxt that hold each page inside of it. Styling and shared functionality. You can have multipe layouts for different parts of page.

* Layout
  * page 1 
    * child page
    * component
  * page 2
    * component

More on Routing in Nuxt: https://nuxtjs.org/guide/routing
More on Views, Layouts etc: https://nuxtjs.org/guide/views

## Vue Router vs Nuxt Router

nuxt link active is determined by url you are on and path you are pointing to.
`/posts` will return 

nuxt-router is an extension of vue-router
nuxt-link can be used just like vue-router page.




More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).


## Adding dynamic data

PostList needs to accept list of posts objects and we loop through it.

