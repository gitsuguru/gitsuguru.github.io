
window.addEventListener("blur", () => {
    push();
});

const push = () => {
    if (Notification.permission == "default") {
        Notification.requestPermission();
    } else if (Notification.permission == "granted") {
        new Notification('通知成功');
    } else {
        alert('通知が許可されていません');
    }
};
