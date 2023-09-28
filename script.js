let hit, scoreNumber = 0, clickedNumber;



const random = () => {
    return Math.floor(Math.random()*10);
}


const getNewHit = () => {  
    hit = random();
    document.querySelector("#hit").textContent = hit;
}

const increaseScore = () => {
        scoreNumber += 10;
        document.querySelector("#score").textContent = scoreNumber;
}


const bubble = () => {
    let number, makeBubble = "";
    for(let i=0;i<=127;i++){
        number = Math.floor(Math.random()*10);
        makeBubble += `<div class="bubble">${number}</div>`;
    }  
    document.querySelector("#pbtm").innerHTML = makeBubble;
}

function runTimer () {
    let timer = 60;
    let runner = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(runner);
            document.querySelector("#pbtm").innerHTML = `
            <div id="GameOver">
                <h1>Game Over</h1>
                <h1>Your Score:${scoreNumber}</h1>
            </div>`;
        }
        
  },1000)
}


document.querySelector("#pbtm").addEventListener("click", (details) => {
    clickedNumber = Number(details.target.textContent);
    
        if(clickedNumber === hit) {
            increaseScore();
            getNewHit();
            bubble();
        }
        else{
            getNewHit();
            bubble();
        }
})




bubble();
getNewHit();
runTimer();

