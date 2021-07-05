//call
Function.prototype.call2 = function myCall(context){
  var context =context||window;
  context.fn=this;
  let args=[];
  for(let i=1;i<arguments.length;i++){
    args.push('arguments['+i+']')
  }
  //隐式调用Array.toString
  //eval 的this一般来说指向当前作用域
  let res = eval('context.fn('+args+')')
  delete context.fn
  return res
}

//apply
Function.prototype.apply2 = function(context , args){
  var context = context ||window
  context.fn = this 
  var res;
  if(!args){
    res = context.fn()
  }else{
    let arr=[]
    for(let i=0;i<args.length;i++){
      arr.push('args['+i+']')
    }
    res = eval('context.fn('+arr+')')
  }
  delete context.fn
  return res
}

//bind
Function.prototype.bind1=function (){
  const self=this;
  const args = Array.prototype.slice.call(arguments)
  const t = args.unshift(args)
  return function(){
    self.apply(t,args)
  }
}

//new,构造函数做第一个传进来
function myNew(){
  let obj= new Object()

  Constructor = Array.prototype.shift.call(arguments);

  obj.__proto__=Constructor.prototype

  let res = Constructor.apply(obj,arguments)
  return typeof res === 'object' ? res:obj
}