btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', function () {
    timerActive = true;
});

btnPause = document.getElementById('btnPause');
btnPause.addEventListener('click', function () {
    timerActive = false;
});

btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function () {
    timerActive = false;
    timer = 0;
    refreshView();
});

currency = "$"

ddCurrency = document.getElementById('ddCurrency');
spanCurrency = document.getElementById('spanCurrency');

ddUSD = document.getElementById('ddUSD');
ddUSD.addEventListener('click', function () {
    currency = ddUSD.innerHTML;
    ddCurrency.innerHTML = currency;
    spanCurrency.innerHTML = currency;
});

ddEUR = document.getElementById('ddEUR');
ddEUR.addEventListener('click', function () {
    currency = ddEUR.innerHTML;
    ddCurrency.innerHTML = currency;
    spanCurrency.innerHTML = currency;
});

currencyRate = 14.99;

btnCurrency = document.getElementById('btnCurrency');
btnCurrency.addEventListener('click', function () {
    currencyRate = parseFloat(document.getElementById('moneyRate').value);
    refreshView();
});

timeText = document.getElementById('time');
moneyText = document.getElementById('moneyVal');

timerActive = false;
timer = 0;

function formatNumber(n) {
    return ("0" + n).slice(-2)
}

function formatTime(t) {
    hour = Math.floor(t / 3600)
    min = Math.floor((t % 3600) / 60)
    sec = Math.floor((t % 60))
    return formatNumber(hour) + ":" + formatNumber(min) + ":" + formatNumber(sec)
}

function formatMoney(t) {
    secRate = currencyRate / 3600;
    currentMoney = secRate * t;
    return currentMoney.toFixed(2);
}

function refreshView() {
    timeText.innerHTML = formatTime(timer);
    moneyText.innerHTML = formatMoney(timer);

}

function timerTask() {
    if (timerActive) {
        timer += 1;
    }
    refreshView();
}

setInterval(timerTask, 1000)
