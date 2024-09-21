import createSlider from "./public/JS/t1Slider.js";

let best = async () => {
  let seriesButton = document.querySelector("#series-button");
  let movieButton = document.querySelector("#movie-button");
  let bestofItem = "";
  let detail = "";
  let bestofGenre = "";

  try {
    let data = await fetch("./db.json");
    let res = await data.json();

    function updateDetail(items, element, type, index) {
      let selectedItem =
        type === "movie"
          ? res.bestOf.bestOfMovie[index]
          : res.bestOf.bestOfSeries[index];

      element.style.opacity = "1";
      element.style.transform = "scale(1.1)";
      element.style.border = "2px solid rgba(255, 255, 255, 0.7)";
      element.style.borderRadius = "10px";

      items.forEach((item) => {
        if (item != element) {
          item.style.opacity = "0.65";
          item.style.transform = "scale(1)";
          item.style.border = "none";
          item.style.borderRadius = "0px";
        }
      });

      document.querySelector(
        ".bestof-bg"
      ).style.background = `url('${selectedItem.bg}') no-repeat`;
      document.querySelector(".bestof-bg").style.backgroundSize = "cover";

      bestofGenre = selectedItem.genre
        .map((itemGenre) => {
          return `<span class="py-[3px] px-[15px] bg-[#282828] rounded-[24px] min-w-[50px] block text-center">${itemGenre}</span>`;
        })
        .join("");

      detail = `
              <div class="flex flex-col ml-[10px]">
                <a href="#" class="mb-[12px] text-[16px] font-[700] leading-[32px]">${selectedItem.title}</a>
                <div class="mb-[24px]"></div>
                <div class="mb-[24px] text-[#a1a1a1] font-[100] leading-[12px]">کارگردان: ${selectedItem.director}</div>
                <div class="gap-[8px] flex items-center mb-[24px]">
                  ${bestofGenre}
                </div>
                <div class="mb-[24px] text-[12px] leading-[26px] max-w-[708px] whitespace-nowrap overflow-hidden text-ellipsis">${selectedItem.description}</div>
              </div>
              <div class="absolute left-[140px] top-0">
                <img src="${selectedItem.logo}" alt="" class="block max-h-[190px] w-full max-w-[220px] ">
              </div>
            
          `;
      document.querySelector(".bestof-detail").innerHTML = detail;
      if (selectedItem.Episodes) {
        console.log(document.querySelector(".bestof-slides"));

        document.querySelector(".bestof-slides").innerHTML =
          selectedItem.Episodes.map((itemEpisode) => {
            console.log(itemEpisode.image);
            if (!itemEpisode.free) {
              return `<div class="slide">
        <div class=" relative mb-[8px] rounded-[10px] overflow-hidden h-[180px]">
        <div class="pt-[57.6%]"></div>
          <img src="${itemEpisode.image}" alt="" class="h-full w-full absolute inset-0" />
          <div class="absolute bg-[rgba(0,0,0,0.4)] backdrop-blur-[5px] inset-[-4px]"></div>
          <span
            class="absolute rounded-[50%] bg-[rgba(0,0,0,0.4)] backdrop-blur-[14px] w-[48px] h-[48px] flex items-center justify-center left-[calc(50%-24px)] top-[calc(50%-24px)]">
            <img src="../Images/icon-lock.png" alt="" class="w-[50%]">
          </span>
        </div>
        <div class="text-[11px] text-[#f6f6f6] leading-[15px] font-[700]">${itemEpisode.title}</div>
      </div>`;
            } else {
              return `<div class="slide">
        <div class=" relative mb-[8px] rounded-[10px] overflow-hidden h-[180px]">
          <div class="pt-[57.6%]"></div>
          <img src="${itemEpisode.image}" alt="" class="h-full w-full absolute inset-0" />
          <div class="flex justify-between items-center w-full absolute p-[10px] bottom-0 z-[10]">
          <div
            class="flex items-center gap-[4px] px-[8px] py-[4px] bg-[#1d2b1f]  text-[#4dab56] rounded-[24px]">
            <span class="block ">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.6667 13.3333H3.33337C2.80294 13.3333 2.29423 13.1226 1.91916 12.7475C1.54409 12.3724 1.33337 11.8637 1.33337 11.3333V4.66663C1.33337 4.13619 1.54409 3.62749 1.91916 3.25241C2.29423 2.87734 2.80294 2.66663 3.33337 2.66663H12.6667C13.1971 2.66663 13.7058 2.87734 14.0809 3.25241C14.456 3.62749 14.6667 4.13619 14.6667 4.66663V11.3333C14.6667 11.8637 14.456 12.3724 14.0809 12.7475C13.7058 13.1226 13.1971 13.3333 12.6667 13.3333ZM2.86197 4.19522C2.73695 4.32025 2.66671 4.48981 2.66671 4.66663V11.3333C2.66671 11.5101 2.73695 11.6797 2.86197 11.8047C2.98699 11.9297 3.15656 12 3.33337 12H12.6667C12.8435 12 13.0131 11.9297 13.1381 11.8047C13.2631 11.6797 13.3334 11.5101 13.3334 11.3333V4.66663C13.3334 4.48981 13.2631 4.32025 13.1381 4.19522C13.0131 4.0702 12.8435 3.99996 12.6667 3.99996H3.33337C3.15656 3.99996 2.98699 4.0702 2.86197 4.19522ZM9.62005 8.66663L7.33338 10.1466C7.20743 10.23 7.0612 10.2776 6.91031 10.2843C6.75941 10.291 6.60954 10.2565 6.4767 10.1846C6.34387 10.1128 6.23307 10.0061 6.15616 9.87611C6.07925 9.74612 6.03911 9.59767 6.04004 9.44663V6.49996C6.03911 6.34892 6.07925 6.20047 6.15616 6.07048C6.23307 5.94049 6.34387 5.83384 6.4767 5.76195C6.60954 5.69005 6.75941 5.65561 6.91031 5.66231C7.0612 5.669 7.20743 5.71659 7.33338 5.79996L9.62005 7.26663C9.737 7.34218 9.83316 7.44582 9.89975 7.5681C9.96634 7.69038 10.0012 7.8274 10.0012 7.96663C10.0012 8.10586 9.96634 8.24288 9.89975 8.36516C9.83316 8.48744 9.737 8.59108 9.62005 8.66663Z"
                  fill="#18A456"></path>
              </svg>
            </span>
            <span class="block text-[#4dab56]">رایگان</span>
          </div> 
          <div class="bg-[rgba(0,0,0,0.4)] px-[8px] py-[4px] text-[1.1rem]  text-[#e3e3e3] backdrop-blur-[14px] rounded-[8px]">${itemEpisode.time}</div>

          </div>
          
        </div>
        <div class="text-[11px] text-[#f6f6f6] leading-[15px] font-[700]">${itemEpisode.title}</div>
      </div>`;
            }
          }).join("");
      }

      createSlider(".bestof-slider", {
        SpaceBetween: 20,
        DisableNavigation: true,
        slidesPerView: 4,
      });
    }

    // detail
    const updateDetailListeners = (items, type) => {
      items.forEach((element, index) => {
        element.addEventListener("click", () => {updateDetail(items, element, type, index);});
      });
    };

    // Render poster items
    const renderBestOfItems = (type) => {
      if (type === "movie") {
        bestofItem = res.bestOf.bestOfMovie
          .map((item) => {
            return `<a class="bestof-movie-click relative mb-[8px]">
                      <div class=""></div>
                      <span class="absolute opacity-[0.65] bottom-[8px] flex justify-center z-[5] w-full"><img src="${item.exclusive}" alt="" /></span>
                      <img src="${item.poster}" alt="" class="rounded-[8px]" />
                    </a>`;
          })
          .join("");
      } else {
        bestofItem = res.bestOf.bestOfSeries
          .map((item) => {
            return `<a class="bestof-series-click relative mb-[8px]">
                      <div class=""></div>
                      <span class="absolute opacity-[0.65] bottom-[8px] flex justify-center z-[5] w-full"><img src="${item.exclusive}" alt="" /></span>
                      <img src="${item.poster}" alt="" class="rounded-[8px]" />
                    </a>`;
          })
          .join("");
      }
      document.querySelector(".bestof-items").innerHTML = bestofItem;

      // Add click listeners to the newly rendered items
      const bestofItems = document.querySelectorAll(
        type === "movie" ? ".bestof-movie-click" : ".bestof-series-click"
      );
      updateDetail(bestofItems, bestofItems[0], type, 0);
      updateDetailListeners(bestofItems, type);
    };

    // Initial render for series
    renderBestOfItems("series");

    // Event listeners for buttons
    seriesButton.addEventListener("click", () => {
      renderBestOfItems("series");
      seriesButton.style.background = "rgba(255,255,255,.12)";
      movieButton.style.background = "transparent";
    });

    movieButton.addEventListener("click", () => {
      renderBestOfItems("movie");
      seriesButton.style.background = "transparent";
      movieButton.style.background = "rgba(255,255,255,.12)";
    });
  } catch (error) {
    console.log("error:", error);
  }
};

export default best;