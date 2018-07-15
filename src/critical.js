//

import './scss/old.scss'
import './scss/modern.scss'

//

document.addEventListener('DOMContentLoaded', function () {
  (window.requestIdleCallback || window.setTimeout)(onDOMContentLoaded)
})

function onDOMContentLoaded () {
  console.log('onDOMContentLoaded')

  var $script = window.$script

  window.WebFontConfig = {
    google: {
      families: ['Lato:300']
    }
  }

  $script([
    '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
  ])

  const cssStyleSheet = supportFlexbox() ? 'css/modern.css' : 'css/old.css'

  cssLinkInjector(cssStyleSheet)
}

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then(function () { console.log('Service Worker Registered') })
  .catch(function () { console.log('Service Worker not Registered') })
}

document.addEventListener('DOMContentLoaded', function () {
  (window.requestIdleCallback || window.setTimeout)(onDOMContentLoaded)
})

//

function onDOMContentLoaded () {
  console.log('onDOMContentLoaded')

  var cssStyleSheet
  var $script = window.$script

  window.WebFontConfig = {
    google: {
      families: ['Lato:300']
    }
  }

  $script([
    '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
  ])

  $script('vendor/dio.js/dio.js', function () {
    $script(['browser.js'], function () {
      const browserLauncher = window.MyWebsite && window.MyWebsite.appHydratation || function noop () {}
      // delay bootstrap
      setTimeout(browserLauncher)
    })
  })

  cssStyleSheet = supportFlexbox() ? 'css/modern.css' : 'css/old.css'

  cssLinkInjector(cssStyleSheet)
}

/**/

function supportFlexbox () {
  var d = document.documentElement.style
  return ('flexWrap' in d) || ('WebkitFlexWrap' in d) || ('msFlexWrap' in d)
}

function cssLinkInjector (filename) {
  var headElement = document.getElementsByTagName('head')[0]
  var linkElement = document.createElement('link')
  linkElement.setAttribute('rel', 'stylesheet')
  linkElement.setAttribute('type', 'text/css')
  linkElement.setAttribute('href', filename)
  headElement.appendChild(linkElement)
}
