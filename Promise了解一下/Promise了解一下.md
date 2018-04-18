
**JavaScript 群讨论? 为什么小面的代码先输出2,在输出1**

**async  await 关键字的功能了解一下?**

```
async function aa() {
    await setTimeout(() => {
        console.log(1)
    }, 2000);
    console.log(2)
}
aa();       // 2 , 2秒之后打印1
```

![Promise了解一下,async 和 await 的机制](http://p7dcjrp8i.bkt.clouddn.com/promise.png)

```
function needWait(sec=0){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if (sec > 0) {
                console.log('ok');
                resolve();
			} else {
				console.log('oh no');
				reject();
			}
		}, sec);
	});
}
async function aa (sec){
	await needWait(sec).then(()=>{
		console.log('await它最主要的意图是用来等待 Promise 对象的状态被 resolved or rejected');
	}, () => {
		console.log('failed');
	});
	console.log(2)
}

// 调用输出 -- 达到了等待异步请求完成之后在执行,后边的代码
aa()
Promise {<pending>}
oh no
failed
2

// 调用输出
aa(2000)
Promise {<pending>}
ok
await它最主要的意图是用来等待 Promise 对象的状态被 resolved or rejected
2
```
* await它最主要的意图是用来等待 Promise 对象的状态被 resolved or rejected
* 如果await后面是 promise对象就会触发异步函数停止执行并且等待 promise 的解决（resolved、rejected）,如果等的是正常的表达式则立即执行，包括await setTimeout('', 2000)这种函数都等于正常的表达式。
* promise和（async、await）是配合使用的
* ES6提出了promise、ES7提出了async、await
* async、await是配套使用的，使用的目标对象就是返回Promise对象的方法体。
* 不用promise，那么你的async、await就等于没用了，若想实现你的想法，就只能：

> 这是ES5的写法：

![es5写法](http://p7dcjrp8i.bkt.clouddn.com/ES5.png)

> 这是ES6的写法：

![es5写法](http://p7dcjrp8i.bkt.clouddn.com/ES6.png)


ES6的优势就很明显了，回调函数的逻辑不再强耦合在核心方法体之中。


* async是干什么用的?
[async是干什么用的?参考链接](https://segmentfault.com/a/1190000011526612)
