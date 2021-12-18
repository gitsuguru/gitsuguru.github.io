const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    push();
});

function push() {
    // ブラウザが通知をサポートしているか確認
    if (!("Notification" in window)) {
        alert("通知に対応していないブラウザです。");
    } else {
        switch (Notification.permission) {
            case 'default':
                Notification.requestPermission();
                break;
            case 'granted':
                new Notification('こんにちは');
                break;
            case 'denied':
                alert('通知が許可されていません');
                break;
        }
    }
};

