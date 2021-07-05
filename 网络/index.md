## 浏览器缓存流程- 字段细节需要注意
字段优化
强缓存 Cache-Control 验证 。命中200
协商缓存  If-Modified-Since 和 If-None-Match。 未修改直接304，过期直接响应+200


## http+https+http2.x
长轮询和短轮询
两者不同点
间隔发生在服务端还是浏览器端: http 长轮询在服务端会 hold 一段时间, http 短轮询在浏览器端 “hold”一段时间;
长轮询实时性更好，控制权在服务器。

websocket服务器推送，心跳保证连接有效

101 切换通信协议switch proctol ->websocket
301 永久重定向
302 临时重定向，权限跳转登陆用
304 协商缓存命中
403 服务器禁止访问
404 资源未找到
400 请求错误
500 服务器端错误
503 服务器繁忙

GET：通用获取数据
HEAD：获取资源的元信息
POST：提交数据
PUT：修改数据
DELETE：删除数据
CONNECT：建立连接隧道，用于代理服务器
OPTIONS：列出可对资源实行的请求方法，常用于跨域
TRACE：追踪请求-响应的传输路径

#### HTTPS 是什么具体流程

首先先进行ssl握手
服务器返回包含公钥的CA证书
客户端验证证书合法
生成随机数通过公钥加密
加密后传给服务器，服务器用私钥解密
而后通过商定好的随机key进行对称加密通信

## websocket

key words: H5的新协议，tcp全双工通信，http通信只能由客户端发起、没有同源限制、数据轻量

websocket握手为了兼容http协议使用了一个http Upgrade请求：Origin字段表明源，避免没有同源策略的危险脚本恶意攻击。1002协议错关闭链接

Sec-WebSocket-Key（请求头）以及Sec-WebSocket-Accept（响应头）
Websocket协议需要保证客户端发起的Websocket连接请求只会被能理解Websocket协议的服务器所识别。

心跳ping-pong：给每个链接对象设置isAlive，定时任务遍历链接ping，监听客户端是否响应pong，超时未响应直接terminate
根据规范，当客户端接收到Ping消息后Pong响应消息会自动发送。

心跳是为了长时间不通信，但链接又有必要存在的情况，如果客户端本地网络关闭，但服务器不知道，浪费链接，服务器推送又丢失。

ws怎么身份认证？new的时候直接带token

frame数据帧作为传输结构：二进制和文本数据

## tcp vs udp
tcp面向连接，可靠服务（无差错，有序，不丢失），udp无连接（不保证可靠交付）
tcp面向字符，无结构字符流，udp面向报文
tcp是端到端的，udp可以一对多，多对多，多对一

tcp拥塞控制，快速重传，阈值乘法减小

## xss csrf网络攻击
xss一般是用户输入执行恶意脚本，解决方案：cookie：http-only，关键字符检测
csrf 跨站请求伪造，是在用户不知情的情况下利用用户的cookie进行请求
解决方案 samesite：strict(必须是同一个url才能带cookie)，lax（导航到固定的get之类的请求可以带cookie），none

## 跨域
1.本地proxyTable
2.jsonp
3.cors，后端设置access-controll准入
4.iframe
5.nginx反向代理

为什么浏览器的请求有两次，一次options，第二次才是真正请求？哪些场景用到
cors非简单请求会先进行一次options 的请求看后续请求是否可用

简单请求具体来说，就是在头信息之中，增加一个Origin字段

如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段（详见下文），就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

## ajax vs fetch

## cookie localStorage/sessionStorage 

## http2.0多路复用的使用场景