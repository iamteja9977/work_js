if (!localStorage.getItem("winner")) {
    localStorage.setItem("winner", JSON.stringify([]));
}
function getoption() {
    let ele = document.getElementsByName('difficulty');
    let difficulty;
    for (i = 0; i < ele.length; i++) {
        console.log(document.getElementById("level").value);
        if (document.getElementById("level").value !== undefined || difficulty == ele[i].value) {
            alert("Level Already Selected");
            break;
        }
        else if (ele[i].checked) {
            document.getElementById("level").innerHTML = (ele[i].value).toUpperCase();
            document.getElementById("level").value = ele[i].value;
            difficulty = ele[i].value;
            break;
        }
    }
    main();
}
let username = prompt("Enter your Name: ");
document.getElementById("player-name").innerText = (username.toUpperCase());
let attempts = 0;
document.getElementById("attempts").innerText = attempts;
const music = new Audio("audio.mp3");
const winner = new Audio("winner.mp3");
const loser = new Audio("loser.mp3")
let clickedarray = [];
function main() {
    let table = document.getElementById("my-game");
    let tableData = [];
    let row, column, counter = 0;
    for (let c = 1; c <= 100; c++) {
        tableData.push(c);
    }
    tableData.sort((a, b) => 0.5 - Math.random());
    for (let i = 1; i <= 10; i++) {
        row = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            column = document.createElement("td");
            column.id = tableData[counter];
            // column.innerText = tableData[counter];
            column.addEventListener("click", clickAction)
            row.appendChild(column);
            counter++;
        }
        table.appendChild(row);
    }
}
function clickAction(event) {
    //Loser Logic
    let clickedNum = event.target.id;
    let primearray;
    if (document.getElementById("level").value == "medium") {
        primearray = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    }
    else if (document.getElementById("level").value == "hard") {
        primearray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    }
    else {
        primearray = [2, 3, 5, 7];
    }
    if (primearray.includes(+clickedNum)) {
        loser.play();
        alert("Your Game is Over. Loser");
        return location.reload("/");
    }
    //Winner Logic
    else if (clickedNum == 1) {
        attempts++;
        winner.play();
        let data = { username, attempts, rank: null };
        let winners = JSON.parse(localStorage.getItem("winner"));
        winners.push(data);
        localStorage.setItem("winner", JSON.stringify(winners));
        alert(`You are a Winner and you took ${attempts} to Win`);
        return location.replace("leaderboard.html");
    }
    //Increase Attempts
    else {
        if (clickedarray.includes(+clickedNum)) {
            music.play();
            alert("Block already selected");
        }
        else {
            for (let x = clickedNum; x <= 100; x++) {
                if (x % clickedNum == 0) {
                    document.getElementById(x).style.backgroundColor = "#61DAFB";
                    clickedarray.push(+x);
                }
            }
            attempts++;
            document.getElementById("attempts").innerText = attempts;
        }
    }
}