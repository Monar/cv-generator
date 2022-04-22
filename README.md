# cv-generator
Simple curriculum vitae generator.

Did not found anything on the internet realising following points so I've
created my own :D

* generate cv from .json or .yaml
* schemaless
* html/sass templates
* live preview 
* simple to use

## How to use it

```bashs
yarn
```
And then

``` bash 
yarn start
```

## To change template
```bash
ln -sfT ../templates/{template name} src/template
```

To export your cv to pdf, just print the page and set margins to none in print setup.

```bash
.
├── data // your private data (git ignored)
│   ├── cv.yaml
│   └── photo.jpg
├── src // project code
│   ├── base.scss
│   ├── index.js // hack this one if needed
│   └── template -> ../templates/default/
├── templates // template just link one of them to src/template
│   └── default
│       ├── css
│       ├── fonts
│       ├── index.html
│       └── index.scss
```

If you come up with some nice templates, don't hesitate to submit a merge request with it.
