// ----------------T1-Slider---------------------------

let slide = document.querySelectorAll('.slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
const pages = document.querySelectorAll('.spanp');

let counter = 0;
slide.forEach((item, index) => {
    item.style.transform = `translatex(${index * 100}%)`
})

function counterslide(c) {
    slide.forEach((item, index) => {
        item.style.transform = `translatex(${(index - c) * 100}%)`
    })


    // disable
    if (c == 0) {
        next.style.opacity = "0.2"

    }else{
        next.style.opacity = "1"
    } if (c == slide.length - 1) {
        prev.style.opacity = "0.2"
    }else{
        prev.style.opacity = "1"
    }

    // pagination
    pages.forEach((page, index) => {

        
        if (index === c) {

            page.style.backgroundColor = "white";

        }else{
            page.style.backgroundColor = "black";
        }
    });


}


next.addEventListener("click", () => {
    if (counter != 0) {
        counter--;
        counterslide(counter);
        
    }

})

prev.addEventListener("click", () => {
    if (counter != slide.length - 1) {
        counter++;
        counterslide(counter);
        
    }

})




// ----------------T1-Slider---------------------------
