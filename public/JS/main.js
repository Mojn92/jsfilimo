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

// ----------------T1-Slider---------------------------

let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let counter = 0;
slide.forEach((item, index) => {
    item.style.transform = `translatex(${index * 100}%)`
})

function counterslide(c) {
    slide.forEach((item, index) => {
        item.style.transform = `translatex(${(index - c) * 100}%)`
    })

}

counterslide(counter)

next.addEventListener("click", () => {
    counter--;
    counterslide(counter);
})

prev.addEventListener("click", () => {
    counter++;
    counterslide(counter);
})




// ----------------T1-Slider---------------------------

// ----------------T1-Carouserl---------------------------



// ----------------T1-Carouserl---------------------------


// ----------------------Pagination-Js--------------------
function Pagination() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const pages = document.querySelectorAll('.spanp:not(.prev):not(.next)');
    let currentPage = 0;

    function updatePagination() {
        pages.forEach((page, index) => {
            
                page.style.backgroundColor = "black";
            if (index === currentPage) {
              
                page.style.backgroundColor = "white";

            }
        });
    }

    next.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePagination();
        }
    });

    prev.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePagination();
        }
    });

    updatePagination(); // Initial call to set the active page
}

Pagination();


// ----------------------Pagination-Js--------------------