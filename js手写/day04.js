//promise相关
Promise.all1=function(promises){
  return new Promise(function(resolve,reject){
    let count=0;
    let res=[]
    for(let i=0,len=promises.length;i<len;i++){
      promises[i].then(data=>{
        res[i] = data
        count +=1
        if(count === len){
          resolve(data)
        }
      },(err)=>{reject(err)})
    }
  })
}



//sleep



//promise+setTimeout实现fetch 



//ajax封装



//symbol.iterator实现对象遍历,添加迭代器


//全排列
function bfs(str){
  let res = []
  const arr = new Array(26).fill(0)
  for(let i=0;i<str.length;i++){
    arr[str.charCodeAt(i)-97] +=1
  }
  function check(str){
    const temp = new Array(26).fill(0)
    for(let i=0;i<str.length;i++){
      temp[str.charCodeAt(i)-97] +=1
    }
    for(let i=0;i<str.length;i++){
      if(arr[i]!=temp[i]){
        return false
      }
    }
    return true
  }
  function help(curr){
    if(curr.length===str.length){
      if(res.indexOf(curr) === -1&&check(curr)){
        res.push(curr)
      }
      return
    }else{
      for(let i=0;i<str.length;i++){
        help(curr + str[i])
      }
    }
  }
  
  help('')
  return res
}
// console.log(bfs('asa'))

function qs(arr,start=0,end=arr.length-1){
  if(arr.length<=1||start>=end){
    return
  }
  let i=start+1;
  let j=end;
  while(i<=j){
    while(arr[i]<=arr[start]) i++;
    while(arr[j]>arr[start]) j--;
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }else{
      [arr[start],arr[j]]=[arr[j],arr[start]]
    }
  }
  qs(arr,start,j-1)
  qs(arr,j+1,end)
}
let test=[11,3,9,10,-1,-19,4]
qs(test)
console.log(test)