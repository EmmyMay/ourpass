import { boot } from 'quasar/wrappers'
import { makeServer } from '../server'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  makeServer()
})
