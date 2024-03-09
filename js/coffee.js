// 咖啡页面
const buttons = document.querySelectorAll(".introduce-button-item");
const contentSections = document.querySelectorAll(".introduce-content-list");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// 移除所有按钮的 "active" 类
		buttons.forEach((b) => {
			b.classList.remove("active");
		});

		// 移除所有内容区域的 "active" 类
		contentSections.forEach((section) => {
			section.classList.remove("active");
		});

		// 添加 "active" 类到点击的按钮
		button.classList.add("active");

		// 获取要显示的内容区域的ID
		const targetId = button.getAttribute("data-target");
		const targetSection = document.getElementById(targetId);

		// 添加 "active" 类到对应的内容区域
		targetSection.classList.add("active");
	});
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// 切换主题时检测
$(document).ready(function () {
	// 不断检测当主题发生变化时，检测是否为暗色主题
	setInterval(function () {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			// #wechat的 src 改为img/WeChat.png"
			document.getElementById("wechat").src = "img/WeChat.png";
			document.getElementById("shop").src = "img/shop2.png";
		} else {
			document.getElementById("wechat").src = "img/WeChat2.png";
			document.getElementById("shop").src = "img/shop.png";
		}
	}, 100);
});

$(document).ready(function () {
	// 给"coffee-order"按钮添加点击事件监听器
	$("#coffee-order-button").click(function () {
		// 当页面到底最底部时，Body 背景颜色变为白色，所有文字颜色变为黑色

		// 隐藏"coffee-order"
		$(".coffee-order").slideUp(200);
		// 滑出"wechat"
		$("#wechat-panel").slideDown();
		// 滚动页面到 "wechat-panel" 的位置
		$("html, body").animate(
			{
				scrollTop: $("#wechat-panel").offset().top,
			},
			1000
		); // 可以调整滚动速度（以毫秒为单位）
	});

	// .introduce-content-img 里面的.coffee-img点击后淡入隐藏
	$(".introduce-content-img .coffee-img").click(function () {
		$(this).fadeOut();
	});
	// coffee-img-main 点击这个后淡入显示全部
	$(".coffee-img-main").click(function () {
		$(".introduce-content-img .coffee-img").fadeIn();
	});
	// lead-box点击后淡入放大隐藏
	$(".lead-box").click(function () {
		// 放大效果
		$(this).animate(
			{
				width: "100%",
				height: "100%",
				top: "0",
				left: "0",
				margin: "0",
				padding: "0",
			},
			200
		);
		$(this).fadeOut();
	});
});

const themeToggleButton = document.getElementById("theme-toggle-button");
const body = document.body;

// 检查本地存储以确定当前主题
const currentTheme = localStorage.getItem("theme");

// 如果本地存储中有主题设置，则应用它
if (currentTheme) {
	body.classList.add(currentTheme);
}

// 点击按钮时切换主题
themeToggleButton.addEventListener("click", () => {
	if (body.classList.contains("dark")) {
		body.classList.remove("dark");
		localStorage.setItem("theme", "light");
	} else {
		body.classList.add("dark");
		localStorage.setItem("theme", "dark");
	}
});
