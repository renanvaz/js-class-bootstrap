 var Teste1 = Class.extend({
    init: function(){
        console.log(this.value);
        this.value = 'value 1';
        console.log('init 1');
    },
    test: function (){
        console.log('test 1');
    }
});

var Teste2 = Teste1.extend({
    init: function(){
        this.value = 'value 2';
        this.super.init();
        console.log('init 2');
        console.log(this.value);
        this.test();
    },
    test: function (){
        this.super.test();
        console.log('test 2');
    }
});

var c = new Teste2();

console.log(c, typeof c, c instanceof Teste1, c instanceof Teste2);
