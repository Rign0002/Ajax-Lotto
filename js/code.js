let home = document.querySelector("#home");
let list = document.querySelector("#list");


document.addEventListener("DOMContentLoaded", init);

function init() {
    addEventListners();


    home.classList.toggle("page");

}

function addEventListners() {
    let generateButton = document.querySelector("#btnSend");
    let restartButton = document.querySelector("#btnBack");

    generateButton.addEventListener("click", generateClick);
    restartButton.addEventListener("click", restartClick);

}

function generateClick() {
    list.classList.toggle("page");
    home.classList.toggle("page");

    let digitsValue = document.querySelector("#digits").value;
    let maxValue = document.querySelector("#max").value;


    let url = "http://davidst.edumedia.ca/mad9014/nums.php?";
    let form = new FormData();
    let configurations = {
        mode: "cors",
        method: "POST",
        body: form
    };

    let numList = document.querySelector(".num_list");

    if (digitsValue.length === 0 || maxValue.length === 0) {
        alert("Please fill out the required fields.");
        list.classList.toggle("page");
        home.classList.toggle("page");

    }

    form.append("digits", digitsValue);
    form.append("max", maxValue);

    let req = new Request(url, configurations);

    fetch(req)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            let randomNumbers = data.numbers.join(" ");
            return randomNumbers;
        })
        .then(data => {
            for (let i = 0; digitsValue; i++) {
                let newListItem = document.createElement("li");
                numList.appendChild(newListItem);
                newListItem.textContent = data;
                return data;
            }
        })
        .catch(() => {
            alert("File Transfer Error");
        });
}


function restartClick() {
    list.classList.toggle("page");
    home.classList.toggle("page");
    location.reload();
}

