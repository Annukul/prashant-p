// About me AJAX Request 
const btnShow = document.querySelector(".show");
const two = document.querySelector(".two");
const p = document.querySelector(".showajax");

btnShow.addEventListener("click", show);

function show() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'me.json', true);

    console.log('ReadyState: ', xhr.readyState);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let author = JSON.parse(this.responseText);

            let output = '';
            output += author.about;

            p.innerHTML = output;
            two.innerHTML = '';
        }
    }

    xhr.send();
}