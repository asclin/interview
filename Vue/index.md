## $nextTick的作用以及和setTimeOut区别

nextTick是因为vue是DOM、数据异步刷新的。也就是说出于性能的额考虑，dom需要改变的话是会压队列，并且去重操作之后一次性进行DOM的更新，这就导致我们在操作完数据之后，拿不到最新的dom。所以我们把相关的逻辑放在nextTick的回调中，等到dom更新之后就会执行相应的回调。

nextTick一般使用promise实现的（设备不支持的情况下可能会使用setTimeOut），属于微任务的时候比setTimeOut优先级高

macrotasks(宏任务): setTimeout、setInterval、setImmediate、I/O、UI rendering 等。
microtasks(微任务): Promise、process.nextTick、MutationObserver 等。

## Vuex
Vuex的install功能 会把store这个对象，在beforeCreate生命周期钩子阶段里，mixin在根vue实例option上。
不能是created是因为option在created已经初始化好了

如果是根直接mixin进去，不是根节点就挂父亲节点store的引用，相当于所有组件都被注入了这个仓库

父beforeCreate-> 父created -> 父beforeMounte -> 子beforeCreate ->子create ->子beforeMount ->子 mounted -> 父mounted

state借用vue->data进行响应性处理

为什么要用action？
这样能把异步和同步拆分开，更明晰state是什么时候发生变化的

方便重用，中间层也方便替换和维护

## 路由懒加载

是通过()=>import('/index') 这样实现的，这样实现的原理在于webpack把这种component 打包成为了一个单独模块的js文件，等到对应路由加载的时候再去加载这个js文件，

> webpack会将懒加载的路由分块打包到一个单独的js中去，只有加载该路由的时候，才会加载这个chunk文件.而不是一次全部加载
