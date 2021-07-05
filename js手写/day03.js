//版本号比对



//链表转化树形
function List2Tree(arr){
  let res=[]
  const map=new Map()
  for(let item of arr){
    if(item.parent===null){
      res.push(item)
    }else{
      if(map.has(item.parent)){
        map.get(item.parent).push(item)
      }else{
        map.set(item.parent,[item])
      }
    }
  }
  function help(arr){
    for(let item of arr){
      item.children = map.get(item.id)?map.get(item.id):[]
      if(item.children.length!=0){
        help(item.children)
      }
    }
  }
  help(res)
}

// 字符串对象属性返回
function foundObjProperty (obj,str) {
    let arr = str.split('.');
    let i=0
    let res = obj;
    while(i<arr.length){
      res=res[arr[i]] || undefined
      i++;
      if(res === undefined) break
    }
    return res ? res :undefined;
}
// console.log(foundObjProperty({"wandai":{'zx':{'lwj':100}}},'wandai.zx.lwj'))

//数组去重、数组去重
function rmDup(arr){
  return arr.reduce((acc,item)=>{
    if(acc.indexOf(item)===-1){
      acc.push(item)
    }
    return acc
  },[])
}

//数组扁平化
function rmInc(arr){
  return arr.reduce((res,item)=>{
    return res.concat(Array.isArray(item)?rmInc(item):item)
  },[])
}
// console.log(rmInc([1,1,[2,3,[4,[4]]]]))


//并发限制



//防抖、节流

//quicksort
function quicksort(arr,start,end){
  if(arr.length<=1||start>=end) return
  let i=start +1;
  let j=end
  while(i<=j){
    while(arr[i]<=arr[start])i++;
    while(arr[j]>arr[start]) j--;
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }else{
      [arr[start],arr[j]]=[arr[j],arr[start]]
    }
    quicksort(arr,start,j-1)
    quicksort(arr,j+1,end)
  }
}
let test=[1,3,4,-1,-7,6,2,1,10]
quicksort(test,0,test.length-1)
// console.log(test)


//大数相加
function bigAdd(num1,num2){
  let arr1=num1.toString().split('')
  let arr2=num2.toString().split('')
  if(arr1.length<arr2.length){
    let  temp=arr1
    arr1=arr2
    arr2=temp
  }
  let len1=arr1.length-1
  let len2=arr2.length-1
  let carry=0
  while(len1>=0){
    let sum ;
    if(len2>=0){
      sum =parseInt(arr1[len1])+parseInt(arr2[len2])+carry;
    }else{
      sum = parseInt(arr1[len1])+carry;
    }
    arr1[len1] = sum%10
    carry=Math.floor(sum/10)
    len1--;
    len2--;
  }
  if(carry===1){
    arr1.unshift('1')
  }
  return arr1.join('')
}
// console.log(bigAdd('9999999999999999999',1))