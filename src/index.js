import 'src/util/polyfill.js'
import clydene from 'src/myModule.js'

// Do dev-testing to your module here
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Dev mode enabled')
  window.clydene = clydene
}

// Library export
export default clydene
