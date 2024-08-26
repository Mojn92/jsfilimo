//----------------Question-Js--------------------------
for (let i = 1; i <= 4; i++) {
    let acc = document.querySelector(`.acc${i}`);
    let closing = document.querySelector(`.closing${i}`);
    let toggle = document.querySelector(`.toggle${i}`);

    toggle.addEventListener("click", () => {
        if (closing.style.display === 'none' || closing.style.display === '') {
            closing.style.display = 'block';
        } else {
            closing.style.display = 'none';
        }
    });
}

//----------------Question-Js--------------------------