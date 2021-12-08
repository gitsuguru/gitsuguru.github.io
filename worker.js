// Service Workerを新規インストール(更新)した際の処理
self.addEventListener("install", (event) => {
    console.log("インストール");
});
// Service Workerがactivateになった時の処理
self.addEventListener("activate", (event) => {
    event.waitUntil("アクティベート");
});
// Service Workerがリソースのリクエストを検知した際の処理
self.addEventListener("fetch", (event) => {
    event.waitUntil("リソースのリクエストを検知");
});