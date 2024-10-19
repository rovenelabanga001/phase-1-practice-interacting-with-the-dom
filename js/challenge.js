let counter = document.querySelector("#counter");
console.log(counter);
let counterValue = 0;
let isPaused = false  
let interValid;

let pauseBtn = document.getElementById("pause")
function handleCounter() {
  //increment counter
  interValid = setInterval(() => {
    counterValue++;
    counter.innerText = counterValue;
  }, 1000);
}
//handle minus button
document.querySelector("#minus").addEventListener("click", () => {
  counterValue--;
  counter.innerText = counterValue;
});

//handle plus button
document.querySelector("#plus").addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
});

//handle heart button
document.querySelector("#heart").addEventListener("click", () => {
  const likesList = document.querySelector(".likes");
  const likeCounts = {};
  const counterVal = counter.innerText;
  console.log(counterVal);
  if (likeCounts[counterVal]) {
    likeCounts[counterVal]++;
  } else {
    likeCounts[counterVal] = 1;
  }

  let existingLikeItem = document.getElementById(`like-${counterVal}`);
  if (existingLikeItem) {
    existingLikeItem.innerText = `${counterValue} has been clicked ${likeCounts[counterValue]} times`;
  } else {
    let newLikeItem = document.createElement("li");
    newLikeItem.id = `like-${counterVal}`;
    newLikeItem.innerText = `${counterValue} has been liked ${likeCounts[counterValue]} times`;
    likesList.appendChild(newLikeItem);
  }
});

//handle pause button

//handle comment form
document.querySelector("#comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const commentContainer = document.getElementById("list");
  let p = document.createElement("p");
  p.textContent = document.getElementById("comment-input").value;
  commentContainer.appendChild(p);
  e.target.reset();
});


pauseBtn.addEventListener("click",(e)=>{
  if(isPaused){
    handleCounter()
    pauseBtn.textContent= "pause"
  }else{
    clearInterval(interValid)
    pauseBtn.textContent = "resume"
  }
  isPaused = !isPaused;

})
document.addEventListener("DOMContentLoaded", () => {
  handleCounter();
});

// let li = document.createElement("li");
// let p = document.createElement("p");
// p = counter.innerText;
// li = `${p} has been liked`;
// document.querySelector(".likes").appendChild(li);
