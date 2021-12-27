// // ボタンを取得
// const btn = document.querySelector("button");
// // ページ表示時にプッシュ通知許可を得る
// window.addEventListener("load", () => {
//     if ("Notification" in window && Notification.permission === "default") {
//         Notification.requestPermission();
//     }
// });
// // ボタンがクリックされた際にpush関数を実行
// btn.addEventListener("click", () => {
//     push();
// });
// // プッシュ通知が許可されていれば送信する
// function push() {
//     if ("Notification" in window && Notification.permission === "granted") {
//         new Notification("送信されました", {
//             body: "プッシュ通知が送信されました。",
//         });
//     } else {
//         alert("通知に対応していないブラウザか、通知が許可されていません。");
//     }
// }

const cookie = document.querySelector('h1');

// cookieに保存
document.cookie = 'age = 27'; // ①
document.cookie = `name = ${encodeURIComponent('すぐる')}`; // ②

// cookieの取得
const cookies = document.cookie;
// ;毎に文字列を分割
const cookieArray = cookies.split(";");
// オブジェクトに変型
let obj = {};
cookieArray.forEach((element) => {
    // =毎に文字列を分割
    const itemArray = element.split("=");
    // 文字列間の空白を削除
    const key = itemArray[0].trim();
    // デコード
    const value = decodeURIComponent(itemArray[1]);
    // オブジェクトに追加
    obj[key] = value;
});

console.log(obj);