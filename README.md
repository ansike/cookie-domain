# 多级域名cookie读取测试

1. server1
  - 域名 aaa.com（一级）
2. server2
  - 域名 bbb.com（一级）
3. server3
  - 域名 child.aaa.com（二级）

测试步骤
1. 设置hosts
```shell
cat >>/etc/hosts<<EOF
127.0.0.1 aaa.com
127.0.0.1 bbb.com
127.0.0.1 child.aaa.com
EOF
```
2. 启动所有服务
```shell
cd server1 && node index.js
cd server2 && node index.js
cd server3 && node index.js
```
3. 观察请求
- 没有设置domain的情况下
aaa.com 种下cookie
bbb.com 无法读取cookie
child.aaa.com 无法读取cookie

- 设置了domain的情况下
aaa.com 种下cookie
bbb.com 无法读取cookie
child.aaa.com 能读取cookie


# 三级域名跨协议读取cookie

测试步骤
1. 设置hosts
```shell
cat >>/etc/hosts<<EOF
127.0.0.1 tt.console.xxx-preview.com
EOF
```
2. 启动服务
```shell
cd server4 && node index.js
```
4. 访问 tt.console.xxx-preview.com:9094
不修改console.xxx-preview.com 默认cookie方式
预期不会携带cookie请求

修改console.xxx-preview.com 默认cookie方式 => .console.xxx-preview.com
预期会携带cookie请求


参考文档：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies