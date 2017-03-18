const countDownDate = new Date("Dec 31, 2019 23:45:00").getTime();

var countdownfunction = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("_counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("_counter".innerHTML = "EXPIRED");
    }
}, 1000);