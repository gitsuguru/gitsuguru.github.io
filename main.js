const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    push();
});

function push() {
    // ブラウザが通知をサポートしているか確認
    if (!("Notification" in window)) {
        alert("通知に対応していないブラウザです。");
    } else {
        Notification.requestPermission()
            .then(function (permission) {
                if (permission == "granted") {
                    new Notification("こんにちは");
                    alert(1);
                } else {
                    alert("通知が許可されていません");
                }
            });
    }
}
