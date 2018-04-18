
## 另外列出一些 javascript 获取url中各个部分的功能方法：

* window.location.host; //返回url 的主机部分，例如：www.xxx.com    
* window.location.hostname; //返回www.xxx.com    
* window.location.href; //返回整个url字符串(在浏览器中就是完整的地址栏)，例如：www.xxx.com/index.php?class_id=3&id=2    
* window.location.pathname; //返回/a/index.php或者/index.php    
* window.location.protocol; //返回url 的协议部分，例如： http:，ftp:，maito:等等。    
* window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符  