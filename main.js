const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    push();
});

function push() {
    // ブラウザが通知をサポートしているか確認
    if (!("Notification" in window)) {
        alert("通知に対応していないブラウザです。");
    } else {
        if (Notification.permission == "default") {
            // 通知許可を求める
            Notification.requestPermission();
        } else if (Notification.permission == "granted") {
            alert(1);
            new Notification("こんにちは");
        } else {
            // denied
            alert("通知が許可されていません");
        }
    }
};

