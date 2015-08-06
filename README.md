# UI Building Tools - Demo

This was created from the scaffolding of UI Building Tools:
```
npm install -g yo grunt-cli git+https://github.com/NicolasRonsmans/ui-building-tools.git

yo ui-building-tools
```


## Install
```
git clone https://github.com/nicolasronsmansglobant/gallery.git

npm install
```


## Build

### Full
```
grunt build
```

### Js
#### Full
```
grunt js
```
#### hogan (precompile .mustache files)
```
grunt hogan
```
#### requirejs (concat and minify .js files)
```
grunt requirejs
```

### Css
#### Full
```
grunt css
```
#### less (compile .less files)
```
grunt less
```
#### cssmin (minify .css files)
```
grunt cssmin
```


## Hint

### Js
```
grunt jshint
```

### Css
```
grunt csslint
```


## Run
```
grunt start

>> http://localhost:6789
```

## Test

### Browser
```
grunt start

>> http://localhost:6789/node_modules/intern/client.html?config=tests/intern
```

### Bash
```
grunt test
```

## Release
```
git add .
git commit -m "Your commit message"

grunt bump:{patch|minor|major}
```
