const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    console.log(1);
    push();
});

const push = () => {
    console.log(2);
    if (Notification.permission == "default") {
        Notification.requestPermission();
        console.log(3);
    } else if (Notification.permission == "granted") {
        new Notification("通知成功");
    } else {
        console.log(4);
    }
};

