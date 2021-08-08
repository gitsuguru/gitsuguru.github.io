self.addEventListener("install", function (event) {
    console.log("[ServiceWorker] Install");
});

self.addEventListener("activate", function (event) {
    console.log("[ServiceWorker] Activate");
});

self.addEventListener("fetch", function (event) {});
