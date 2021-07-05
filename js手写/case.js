//需要每个地点有的地铁下一站的list,假设是一个map
//map中对应的list结构可以包含几号地铁
let map = new Map();
map.set('shl',['beixinj',])
function path(from,to){
  let res=[]
  let temp=[]
  function help(now,temp){
    temp.push(now)
    if(now===to){
      res.push(temp.slice(0))
      return
    }else{
      //获得本站的下一站的列表
      let list = map.get(now)
      for(let item of list){
        help(item)
      }
      temp.pop()
    }
  }
  help(from,temp)
  return res
}