const switches = document.querySelectorAll(".experience__box-switch");

const handleSwitch = (e) => {
  switches.forEach((item) => {
    item.classList.remove("switch-active");
  });
  e.target.classList.add("switch-active");
};

switches.forEach((item) => {
  item.addEventListener("click", handleSwitch);
});
