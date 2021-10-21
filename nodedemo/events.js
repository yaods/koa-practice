var EventEmitter = require('events');

class Man extends EventEmitter {}

var man = new Man();
// 3、注册事件监听器前，事件先触发，则该事件会直接被忽略。
man.emit('wakeup',1);

man.on('wakeup', function(){
    console.log('man has woken up');
});

// 1、同个事件，多个事件监听器
man.on('wakeup', function(){
    console.log('man has woken up again');
});

// 2、只运行一次的事件监听器
man.once('wakeup', function(){
    console.log('man has woken up again2');
});

man.emit('wakeup',2);
// 4、移除事件监听器
// man.removeAllListeners();
man.emit('wakeup',3);