fetch("https://v1.hitokoto.cn/")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("hitokoto").innerHTML = data.hitokoto;
        document.getElementById("from_who").innerHTML = data.from_who;
        document.getElementById("from").innerHTML = data.from;
    })
    .catch(function () {
        document.getElementById("hitokoto").innerHTML = '方外旗物尚白，兵尚剑，刑则绍昧断绝。';
        document.getElementById("from").innerHTML = '管子·幼官';
    });

window.onload = function () {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    isDarkTheme.matches ? darkMode() : lightMode();
    isDarkTheme.addListener(e => {
        e.matches ? darkMode() : lightMode();
    })
}

// 主题设置为深色
function darkMode() {
    document.querySelector('#favicon').href = './icon_white.svg';
}

// 主题设置为浅色
function lightMode() {
    document.querySelector('#favicon').href = './icon_dark.svg';
}
