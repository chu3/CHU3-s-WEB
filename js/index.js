// 丝滑滚动插件
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// 获取所有带有锚点链接的元素
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// 为每个锚点链接添加点击事件监听器
anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认的跳转行为

        const target = document.querySelector(link.getAttribute('href')); // 获取目标元素

        // 使用scrollIntoView()方法实现平滑滚动
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 下面class有active 的则在这个标签左右加上[]
// 例如：[Home]
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    if (a[i].classList.contains("active")) {
        a[i].innerHTML = "[" + a[i].innerHTML + "]";
    }
}

// 下滑超过100vh时，给 body添加.active，上滑到顶部时，移除.active
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
});