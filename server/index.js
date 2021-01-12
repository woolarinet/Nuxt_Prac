const { Nuxt, Builder } = require('nuxt');
const app = require('express')()
const port = process.env.PORT || 3000

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  const nuxt = new Nuxt(config)
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  app.listen(port, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port~hello JUNGWOO~", port); 
  })
}
start()
