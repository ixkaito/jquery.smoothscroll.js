# jquery.smoothscroll.js

[![GitHub release](https://img.shields.io/github/release/ixkaito/jquery.smoothscroll.js.svg?style=flat-square)](https://github.com/ixkaito/jquery.smoothscroll.js/releases)
[![npm](https://img.shields.io/npm/v/jquery.smoothscroll.js.svg?style=flat-square)](https://www.npmjs.com/package/jquery.smoothscroll.js)
[![license](https://img.shields.io/github/license/ixkaito/jquery.smoothscroll.js.svg?maxAge=2592000&style=flat-square)](https://github.com/ixkaito/jquery.smoothscroll.js/blob/master/LICENSE)

jQuery plugin to animate scrolling to anchor links

## Downloading or installing via npm

[![ZIP](https://img.shields.io/badge/download-zip-yellow.svg?longCache=true&style=for-the-badge)](https://github.com/ixkaito/jquery.smoothscroll.js/archive/master.zip)
[![ZIP](https://img.shields.io/badge/download-tar.gz-orange.svg?longCache=true&style=for-the-badge)](https://github.com/ixkaito/jquery.smoothscroll.js/archive/master.tar.gz)

or

```bash
$ npm install --save-prod jquery.smoothscroll.js
```

## Loading jQuery and jquery.smoothscroll.js

```html
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="/path/to/jquery.smoothscroll.min.js"></script>
```

**Webpack or Browserify**

```javascript
global.$ = global.jQuery = require('jquery');
require('jquery.smoothscroll.js');
```

## Usage

```javascript
$(function() {
  $('a[href*="#"]').smoothscroll();
});
```

## Options and Settings

```javascript
$('a[href*="#"]').smoothscroll({
  duration: 400,
  easing: 'swing',
  offset: 0,
  hash: true,
  focus: true,
});
```

## Copyright

Kite [@ixkaito](https://github.com/ixkaito)

## License

MIT
