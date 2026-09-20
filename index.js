<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>テストHTML</title>
<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #f2f2f7;
    color: #222;
}

header {
    background: #007aff;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    max-width: 700px;
    margin: 20px auto;
    padding: 0 15px;
}

.card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}

h1, h2 {
    margin-top: 0;
}

button {
    border: 0;
    border-radius: 10px;
    padding: 12px 18px;
    background: #007aff;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:active {
    transform: scale(0.97);
}

input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}

#message {
    margin-top: 15px;
    font-weight: bold;
}

.counter {
    font-size: 40px;
    text-align: center;
    margin: 15px 0;
}

.row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.row button {
    flex: 1;
    min-width: 100px;
}

#clock {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
}
</style>
</head>

<body>

<header>
    <h1>HTMLテストページ</h1>
    <p>動作確認用</p>
</header>

<main>

    <div class="card">
        <h2>① JavaScriptテスト</h2>
        <p>ボタンを押して動作を確認できます。</p>

        <button onclick="showMessage()">テストする</button>

        <div id="message"></div>
    </div>

    <div class="card">
        <h2>② カウンター</h2>

        <div class="counter" id="counter">0</div>

        <div class="row">
            <button onclick="changeCounter(-1)">−1</button>
            <button onclick="changeCounter(1)">＋1</button>
            <button onclick="resetCounter()">リセット</button>
        </div>
    </div>

    <div class="card">
        <h2>③ 入力テスト</h2>

        <input
            type="text"
            id="nameInput"
            placeholder="名前を入力"
        >

        <button onclick="showName()">表示</button>

        <p id="nameResult"></p>
    </div>

    <div class="card">
        <h2>④ 現在時刻</h2>

        <div id="clock">--:--:--</div>
    </div>

    <div class="card">
        <h2>⑤ 計算テスト</h2>

        <input
            type="number"
            id="num1"
            placeholder="数字1"
        >

        <input
            type="number"
            id="num2"
            placeholder="数字2"
        >

        <button onclick="calculate()">足し算</button>

        <p id="result"></p>
    </div>

</main>

<script>
let counter = 0;

function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "JavaScriptは正常に動作しています！";
}

function changeCounter(value) {
    counter += value;
    document.getElementById("counter").textContent = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
}

function showName() {
    const name = document.getElementById("nameInput").value;
    const result = document.getElementById("nameResult");

    if (name.trim() === "") {
        result.textContent = "名前を入力してください。";
        return;
    }

    result.textContent = "こんにちは、" + name + "さん！";
}

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;
}

function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent =
        "答え：" + (num1 + num2);
}

updateClock();
setInterval(updateClock, 1000);
</script>

</body>
</html>
