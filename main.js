const btn = document.querySelector("button");
window.addEventListener("load", () => {
    if (("Notification" in window) && Notification.permission === "default") {
        Notification.requestPermission();
    }
});
btn.addEventListener("click", () => {
    push();
});
function push() {
    if (("Notification" in window) && Notification.permission === "granted") {
        new Notification("Push通知", {
            body: "通知が送信されました。",
            image: './img/soccer.png'
        });
    } else {
        alert("通知に対応していないブラウザか、通知が許可されていません。");
    }
}
