// データを受信
onmessage = (event) => {
    const result = event.data[0] + event.data[1];
    postMessage(result);
};