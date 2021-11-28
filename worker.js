// データを受信
onmessage = (event) => {
    const result = event.data[0] + event.data[1];
    // 計算結果を返却
    postMessage(result);
};

