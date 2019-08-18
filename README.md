# ngx-element-life [![Build Status](https://travis-ci.org/KillerCodeMonkey/ngx-element-life.svg?branch=master)](https://travis-ci.org/KillerCodeMonkey/ngx-element-life)

An angular directive to easy listen when elements get initalised or destroyed.

## Donate/Support

If you like my work, feel free to support it. Donations to the project are always welcomed :)

<a href="https://www.buymeacoffee.com/bengtler" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

PayPal: [PayPal.Me/bengtler](http://paypal.me/bengtler)

BTC Wallet Address:
`3QVyr2tpRLBCw1kBQ59sTDraV6DTswq8Li`

ETH Wallet Address:
`0x394d44f3b6e3a4f7b4d44991e7654b0cab4af68f`

LTC Wallet Address:
`MFif769WSZ1g7ReAzzDE7TJVqtkFpmoTyT`

XRP Wallet Address:
`rXieaAC3nevTKgVu2SYoShjTCS2Tfczqx?dt=159046833`

## Installation

- `npm install ngx-element-life`
- install `@angular/core`, `@angular/platform-browser` and `rxjs` - they are peer dependencies

### For standard webpack, angular-cli and tsc builds

- import `ElementLifeModule` from `ngx-element-life`:

```TS
import { ElementLifeModule } from 'ngx-element-life'
```

- add `ElementLifeModule` to the imports of your NgModule:

```
@NgModule({
  imports: [
    ...,

    ElementLifeModule
  ],
  ...
})
class YourModule { ... }
```
- use `<div element-life (init)="handleInit()"></div>` in your templates to listen on an elements life cycle - init, viewInit and destroy.

### For SystemJS builds (Config)

- add ngx-element-life to your `paths`:
```
paths: {
  ...
  'ngx-element-life': 'node_modules/ngx-element-life/bundles/ngx-element-life.umd.js'
}
```
- set format and dependencies in `packages`:
```
packages: {
  'ngx-element-life': {
    format: 'cjs'
  }
}
```
- follow the steps of **For standard webpack and tsc builds**

## ElementLife Directive

### Usage

- selector: `element-life` - add it as attribute to a html-tag
- outputs:
  - `init` - notifies when the element is initialised
  - `viewInit` - notifies when child views of the element are init
  - `destroy` - notifies when the element gets destroyed

### Example

```HTML
<div
  element-life
  (init)="handleInit()"
  (viewInit)="handleViewInit()"
  (destroy)="handleDestroy()"
>
  <p>hello</p>
</div>
```

```TS
class MyComponent {
  handleInit() {
    // execute after init
  }

  handleViewInit() {
    // execute after view init
  }

  handleDestroy() {
    // execute after destroy
  }
}
```
