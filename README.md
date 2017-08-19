# jquery.smoothscroll.js

jQuery plugin to animate scrolling to anchor links

## Download or install via npm

[jquery.smoothscroll.js](https://github.com/ixkaito/jquery.smoothscroll.js/archive/master.zip)

or

```bash
$ npm install --save-prod jquery.smoothscroll.js
```

## Include jquery.smoothscroll.js on your site

```html
<script src="jquery.min.js"></script>
<script src="jquery.smoothscroll.min.js"></script>
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
  speed: 500,
  easing: 'swing',
  offset: 0,
  hash: true,
});
```

## Copyright

Kite [@ixkaito](https://github.com/ixkaito)

## License

MIT
