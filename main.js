/*=================================== Manu Bar Icon Toggle  ==================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};
/*=================================== Scroll Reveal  ==================================*/
/*=================================== Typed JS  ==================================*/
let typed = new Typed(".multiple-text", {
  strings: [
    "Front-End Developer",
    "JavaScript Developer",
    "ReactJs Developer",
    "NextJs Developer",
    "Responsive Designer",
    "Web Designer",
    "PSD To HTM Designer",
    "Figma To HTML Designer",
  ],
  typeSpeed: 70,
  backspeed: 70,
  backDelay: 100,
  loop: true,
});
