// ----------------comments---------------------------

let comments = async () => {
  let commentsItem = "";
  try {
    let data = await fetch("http://localhost:3000/Comments");
    let res = await data.json();

    commentsItem = res.map((item) => {
      return `<div class='w-[inherit] flex flex-col items-start relative'>
    <div class='w-[335px] flex justify-between items-center mb-[16px]'>
      <div class='flex '>
        <div class='ml-[4px]'>
          <img src="../Images/Comments/user.webp" class='!w-[24px] !h-[24px]' />
        </div>
        <h1 class='font-[ffont] text-[12px] text-[#ece6e6] content-center'> ${item.name}</h1>
      </div>
      <div>
        <img src="../Images/Comments/virgol.webp" class='!w-[40px] !h-[34px]' />
      </div>
    </div>
    <div class='flex !h-[75px] mb-[16px] font-[ffont] text-[11px] text-[white] leading-relaxed'>
      <p>
    ${item.message}
      </p>
    </div>
  </div>`;
    });

    document
      .querySelector(".comments-slides")
      .insertAdjacentHTML("afterbegin", commentsItem.join(""));
  } catch (error) {
    console.log("Error");
  }
};


export default comments();


