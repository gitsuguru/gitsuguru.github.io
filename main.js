
let result = '';
if (Notification.permission == "default") {
    Notification.requestPermission();
} else if (Notification.permission == "granted") {
    result = true;
} else {
    result = false;
}
window.addEventListener("blur", () => {
    if (result) {
        push();
    } else {
        alert('通知が許可されていません');
    }
});

const push = () => {
    new Notification("通知成功");
};
