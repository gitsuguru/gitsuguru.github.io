// 各DOMを取得
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const sum = document.querySelector('#sum');
const btn = document.querySelector('#btn');

// WebWorkerを作成
const worker = new Worker('worker.js');
// WebWorker側にデータを送信
btn.addEventListener('click', () => {
    worker.postMessage([num1.value, num2.value]);
})
// WebWorkerよりデータを受信
worker.onmessage = (event) => {
    //結果を表示
    sum.textContent = event.data;
}