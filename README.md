# jquery.smoothscroll.js

jQuery plugin to animate scrolling to anchor links

## Downloading or installing via npm

[jquery.smoothscroll.js](https://github.com/ixkaito/jquery.smoothscroll.js/archive/master.zip)

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
