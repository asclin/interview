//快排，实现一个快排+优化（不用递归）
function quickSort(arr,start=0,end=arr.length-1){
  if(arr.length<=1||start>=end) return;
  let i=start + 1;
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
  quickSort(arr,start,j-1)
  quickSort(arr,j+1,end)
  return arr
}
// console.log(quickSort([11,3,9,10,-1,-19,4]))

//冒泡
function bubble(arr) {
  if(!arr || arr.length<=1) return arr
  for(let i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
// console.log(bubble([1,-1,2,33,1,2,20,-19,10]))



//归并



//链表倒数第k个
/* while(root,k){
  let p=q=root;
  while(k>1&&p.next){
    p=p.next
    k--
  }
  while(p.next){
    p=p.next
    q=q.next
  }
  return q
} */


//桶排序



//给定一个无序的整数数组，找到其中最长上升子序列的长度。         *  输入: [10,9,2,5,3,7,101,18] 


//二分查找
function search (arr,target) {
    let high=arr.length-1;
    let low=0;
    let mid;
    while(low<=high) {
      mid = Math.ceil((low+high)/2)
      if(arr[mid]===target) return mid;
      arr[mid]<target ? low = mid+1:high = mid-1
    }
    return -1;
}
console.log(search([1,2,3,5,6,8,12,45,56],56))

//二叉树最大深度

function hight(root){
  if(root===null){
    return 0
  }
  return Math.max(hight(root.left),hight(root.right))+1
}

function hight1(root){
  if(!root) return 0
  let res=0;
  let queue=[root]
  while(queue.length){
    let count=queue.length
    for(let i=0;i<count;i++){
      const node=queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    res +=1
  }
  return res
}