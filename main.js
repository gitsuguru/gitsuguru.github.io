const push = () => {
    new Notification("通知成功");
};
let result = '';
console.log(1);
if (Notification.permission == "default") {
    Notification.requestPermission();
    console.log(2);
} else if (Notification.permission == "granted") {
    result = true;
    console.log(3);
} else {
    result = false;
    console.log(4);
}
window.addEventListener("blur", () => {
    console.log(5);
    if (result) {
        push();
        console.log(6);
    } else {
        alert('通知が許可されていません');
    }
});
