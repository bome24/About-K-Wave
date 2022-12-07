let target = document.querySelector("#dynamic");


function randomTitle() {
    let titleArr = ["K-팝에 대해", "K-드라마에 대해", 
    "K-영화에 대해", "한류에 대해"];
    let selectTitle = titleArr[Math.floor(Math.random() * titleArr.length)];
    let selectTitleArr = selectTitle.split("");
    
    return selectTitleArr
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomTitle());
}

function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    }
    else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomTitle());

function blink() {
    target.classList.toggle("active");
}

setInterval(blink, 500);