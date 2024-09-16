// ----------------free-movie---------------------------

let freeMovie = async () => {
  let freeMovieItem = "";
  try {
    let data = await fetch("http://localhost:3000/freeContent");
    let res = await data.json();

    freeMovieItem = res.map((item) => {
      return `<div class="slide">
      <img src="${item.src}" alt="${item.title}" class=""/>
      <span>${item.title}</span>
      </div>`;
    });

    document
      .querySelector(".free-slides")
      .insertAdjacentHTML("afterbegin", freeMovieItem.join(""));
  } catch (error) {
    console.log("Error");
  }
};


export default freeMovie();

// ----------------free-movie---------------------------