// ボタンを取得
const btn = document.querySelector("button");
// ページ表示時にプッシュ通知許可を得る
window.addEventListener("load", () => {
    if (("Notification" in window) && Notification.permission === "default") {
        Notification.requestPermission();
    }
});
// ボタンがクリックされた際にpush関数を実行
btn.addEventListener("click", () => {
    push();
});
// プッシュ通知が許可されていれば送信する
function push() {
    if (("Notification" in window) && Notification.permission === "granted") {
        new Notification("送信されました", {
            body: "プッシュ通知が送信されました。",
        });
    } else {
        alert("通知に対応していないブラウザか、通知が許可されていません。");
    }
}
