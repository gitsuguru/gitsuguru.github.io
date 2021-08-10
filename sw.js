// cacheしたいファイルを定義
const cachePage = [
    "index.html",
    "./main.css",
    "./p.html"
];

self.addEventListener("install", function (event) {
    // 引数の処理が成功したかどうかを判定
    event.waitUntil(
        // 任意のcache名を定義(Cache API)
        caches.open("sampleCache").then(function (cache) {
            // cacheにファイルを定義
            return cache.addAll(cachePage);
        })
    );
});

self.addEventListener("fetch", function (event) {
    // fetchハンドリングを抑止(Response用のPromiseを定義)
    event.respondWith(
        // レスポンスの中にcacheと一致するものがあるか判定
        caches.match(event.request).then(function (response) {
            if (response) {
                // cacheを返却
                return response;
            }
            // レスポンスを返却
            return fetch(event.request);
        })
    );
});
