const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    push();
});

function push() {
    // ブラウザが通知をサポートしているか確認
    if (!("Notification" in window)) {
        alert("通知に対応していないブラウザです。");
    } else {
        if (Notification.permission === "default") {
            Notification.requestPermission();
        } else if (Notification.permission === "granted") {
            new Notification("通知成功");
        } else {
            alert("通知が許可されていません。");
        }
        alert("1");
    }
};

