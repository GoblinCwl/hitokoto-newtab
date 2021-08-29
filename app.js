fetch("https://v1.hitokoto.cn/")
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("hitokoto").innerHTML = data.hitokoto;
		document.getElementById("from_who").innerHTML = data.from_who;
		document.getElementById("from").innerHTML = data.from;
	})
	.catch(console.error);
