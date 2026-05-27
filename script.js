const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn =>
      btn.classList.remove("active")
    );

    contents.forEach(content =>
      content.classList.remove("active")
    );

    button.classList.add("active");

    const tab = button.getAttribute("data-tab");

    document.getElementById(tab)
      .classList.add("active");

  });

});
const peekSlider = document.getElementById("peekSlider");

document.getElementById("peekNext").onclick = () => {

  peekSlider.scrollBy({
    left:320,
    behavior:"smooth"
  });

};

document.getElementById("peekPrev").onclick = () => {

  peekSlider.scrollBy({
    left:-320,
    behavior:"smooth"
  });

};
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {

    accordionItems.forEach(acc => {
      acc.classList.remove("active");
    });

    item.classList.add("active");

  });

});