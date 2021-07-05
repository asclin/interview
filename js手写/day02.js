//深拷贝与浅拷贝


//深拷贝
function deepClone(target,map=new Map()){
    if(typeof target === 'object'){
      if(map.has(target)){
        return map.get(target)
      }
      let obj = Array.isArray(target)?[]:{}
      map.set(target,obj)
      for(let key in target){
          obj[key]=deepClone(target[key],map)
      }

    }else{
      return target
    }
}


//浅拷贝:对于对象拷贝只考虑第一层
function shallowClone(target){
  if(typeof target ==='object'){
    let res=Array.isArray(target)?[]:{}
    for(let key in target){
      if(target.hasOwnProperty(key)){
        res[key]=target[key]
      }
    }
    return res
  }else{
    return target
  }
}


//解析字符串查找对象
//parsePath('a.b.c')({a:{b:{c:2}}})
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}