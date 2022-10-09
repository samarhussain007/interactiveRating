const container = document.querySelector(".container");
const main = document.querySelector(".main");
const submitBtn = document.querySelector(".submit-btn");
const ulBtn = document.querySelector(".balls");
const allBtns = document.querySelectorAll(".balls-button");
const selected = document.querySelector(".selected");

let selectedNum = [];
ulBtn.addEventListener("click", function (e) {
  allBtns.forEach((el) => el.classList.remove("selected"));
  const btn = e.target.closest(".balls-button");
  if (!btn) return;
  if (!btn.classList.contains("selected")) {
    btn.classList.add("selected");
    selectedNum.push(btn.dataset.num);
  }
  submitBtn.addEventListener("click", function () {
    const rating = selectedNum.slice(-1);
    console.log(rating);
    container.innerHTML = "";
    const html = `    
    <div class="main main2">
      <img src="./images/illustration-thank-you.svg" class="ills" />
      <p class="ratings">You selected ${rating} out of 5</p>
      <h1 class="title">Thank you!</h1>
      <p class="description2">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>`;
    container.insertAdjacentHTML("afterbegin", html);
  });
});
