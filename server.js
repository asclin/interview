var ws = require("nodejs-websocket");
console.log("Connecting ...");
//服务端推送
var server = ws.createServer(function(conn){
    let timer=null
    conn.on("text",function(str){
        //服务端打印接收到的数据
        console.log("News:" + str);
        //接收到的数据打上标记“Server-”，再发送回客户端
        let i=0;
        timer = setInterval(function(){
        conn.sendText("Server-第"+ i +'条信息');
        i++
        },3000)
    });

    conn.on("close",function(code,reason) {
        clearInterval(timer)
        console.log("Disconnected.");
    });

    conn.on("error",function(code,reason) {
        console.log("Error.")
    });
    
}).listen(3000);

console.log("Server runing!");