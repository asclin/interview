// sleep 
function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time))
}
sleep(3000).then(()=>console.log(1));

//async await
async function sleepAsync(t) {
  await sleep(t)
  //TODO
  console.log(1)
  return
}
// sleepAsync(5000)

var minPathSum = function (grid) {
  let m = grid.length, n = grid[0].length
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  f[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
      f[i][0] = f[i - 1][0] + grid[i][0]
  }
  for (let i = 1; i < n; i++) {
      f[0][i] = f[0][i-1] + grid[0][i]
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j]
      }
  }
  return f[m - 1][n - 1]
}
minPathSum([[1,3,1],[1,5,1],[4,2,1]])