if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("worker.js")
        .then((register) => {
            console.log("登録に成功しました。：" + register);
        })
        .catch((error) => {
            console.log("登録に失敗しました。：" + error);
        });
}
