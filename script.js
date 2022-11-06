const TIME = 10000;
let running = false;
let count = 0;
let q = true;
let failed = false;

function startGame() {
    // Update the count down every 1 second
    running = true;
    count = 0;
    q = true;
    failed = false;
    document.getElementById("score").innerHTML = "O - X - o";
    let timeRemaining = TIME;
    let x = setInterval(() => {

        timeRemaining -= 1000;
    
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    
        if (timeRemaining < 0 || running == false) {
            running = false;
            clearInterval(x);
            if(failed) {
                document.getElementById("timer").innerHTML = "FAILED";
            } else {
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
            
        }
    }, 1000);
}

window.addEventListener('keydown', (ev) => {
    if(running) {
        if(ev.code === 'KeyQ') {
            if(q) {
                count++;
            } else {
                running = false;
                failed = true;
                return;
            }
        } else if(ev.code === 'KeyP') {
            if(!q) {
                count++;
            } else {
                running = false;
                failed = true;
                return;
            }
        }
        q = !q;
        if(q) {
            document.getElementById("score").innerHTML = "O - " + count + " - o";
        } else {
            document.getElementById("score").innerHTML = "o - " + count + " - O";
        }
        
    }
});