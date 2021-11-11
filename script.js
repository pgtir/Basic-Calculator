const history = document.querySelector(".history-val");
const answer = document.querySelector(".answer-val");
const btns = document.querySelectorAll('button');
// history.innerText = "";
// answer.innerText = "";

btns.forEach(function(btn) {
    btn.addEventListener("click", findResult);
});
function findResult(e) {
    const button = e.target;
    
     if(button.classList.contains('clear')) {
        history.innerText = "";
        answer.innerText = "";
    } else if(button.classList.contains("backspace")) {
        answer.innerText = answer.innerText.substr(0, answer.innerText.length - 1);
    } else if((!isNaN(button.classList[1]) || (button.classList.contains(".")))) {
        answer.innerText += button.innerText;
    }
    else {
        
            history.innerText += answer.innerText + button.classList[1];;
            answer.innerText = '';
            if(button.classList.contains("=")) {
                history.innerText = history.innerText.substr(0, history.innerText.length - 1);
                answer.innerText = eval(history.innerText.toString());
                history.innerText = "";
            } 
    } 
 }