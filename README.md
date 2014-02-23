# Js Class Bootstrap

Would like to extend a class in javascript in a practical way?

This project has simple features:
- Class.extend method
- Parent access from "this.super" property.
- Constructor is a prototype method "init"

## Example
```js
// Create class Test1
var Test1 = Class.extend({
    init: function(){
        console.log('init 1');
    }
});

// Extends class Test1 to Test2
var Teste2 = Teste1.extend({
    init: function(){
        this.super.init();
        console.log('init 2');
    }
});

// Create object of Test2 (init method is the constructor and will be called automatically)
var o = new Teste2();
```

## Want contribute?

Install project

```bash
$ git@github.com:renanvaz/js-class-bootstrap.git clone
$ cd js-class-bootstrap
$ npm install
```

Build project

```bash
# File will be build into ./build/js/class.min.js
gulp
```


