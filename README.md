# Js Class Bootstrap

Would like to extend a class in javascript in a practical way?

This project has two simple features:
- Class.extend method
- Parent access from "this.super" property.

## Example
```js
    var Test1 = Class.extend({
        init: function(){
            console.log('init 1');
        }
    });

    var Teste2 = Teste1.extend({
        init: function(){
            this.super.init();
            console.log('init 2');
        }
    });

    var o = new Teste2();
```

## Want contribuite?

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


