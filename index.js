const announcementDate = new Date("2023-09-24T08:48:01.098Z");

let switcher = document.querySelector("#switcher");
switcher.onclick = function () {
    let main = document.querySelector("#main");
    if (main.classList.contains("light")) {
        main.classList.remove("light");
        main.classList.add("dark");
        document.querySelector(".lucide-moon").style.display = "none";
        document.querySelector(".lucide-sun").style.display = "block";
    } else {
        main.classList.remove("dark");
        main.classList.add("light");
        document.querySelector(".lucide-moon").style.display = "block";
        document.querySelector(".lucide-sun").style.display = "none";
    }
}

function timer() {
    const now = new Date();

    let years = now.getFullYear() - announcementDate.getFullYear();
    let months = now.getMonth() - announcementDate.getMonth();
    let days = now.getDate() - announcementDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    let timeString = "";

    if (years > 0) {
        timeString += years + (years === 1 ? " year, " : " years, ");
    }
    if (months > 0) {
        timeString += months + (months === 1 ? " month, " : " months, ");
    }
    if (days > 0) {
        timeString += days + (days === 1 ? " day, " : " days, ");
    }
    timeString += hours + (hours === 1 ? " hour, " : " hours, ");
    timeString += minutes + (minutes === 1 ? " minute, " : " minutes, ");
    timeString += seconds + (seconds === 1 ? " second" : " seconds");

    document.getElementById("timer").innerHTML = timeString;
}

timer();

setInterval(timer, 1000);
