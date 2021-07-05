// 1.快排
function qs (arr,start=0, end=arr.length-1) {
  if(arr.length<=1||start>=end) return
  let i=start+1;
  let j=end;
  while(i<=j){
    while(arr[start]>=arr[i]) i++;
    while(arr[j]>arr[end]) j--;
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }else{
      [arr[j],arr[start]] = [arr[start],arr[i]]
    }
  }
  qs(arr,start,j-1)
  qs(arr,j+1,end)
}

// 2.冒泡排序
function bubble(arr) {
  if(arr.length<=1) return;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
      if(arr[j]<arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
}

// debounce 只执行一次
function debounce(wait,fn){
  let timer = null;
  return () => {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(fn,wait)
  }
}

// 节流 单位时间内至少执行一次
function throttle(fn,wait){
  let timer=null;
  let v=false
  return () => {
    if(v){
      return false
    }
    v=true
    setTimeout(()=>{
      fn();
      v=false
    },wait)
  }
}

