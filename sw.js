// cacheしたいファイルを定義
const cachePage = [
    "index.html",
    "./main.css",
    "./p.html"
];
// キャッシュ名を定義
const CACHE_NAME = "sampleCache";

self.addEventListener("install", function (event) {
    // 引数の処理が成功したかどうかを判定
    event.waitUntil(
        // 任意のcache名を定義(Cache API)
        caches.open(CACHE_NAME).then(function (cache) {
            // cacheにファイルを定義
            return cache.addAll(cachePage);
        })
    );
});

self.addEventListener("activate", (event) => {
    const useCache = [CACHE_NAME];
    event.waitUntil(
        // 現在使用されているcacheを取得
        caches.keys().then((cacheNames) => {
            // 引数の処理が解決されるまで待つ
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // useCacheではないキャッシュ(古いキャッシュ)は削除する
                    if (useCache.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
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
