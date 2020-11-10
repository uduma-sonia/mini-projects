const turnOn = document.querySelector("#bulb-off");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  turnOn.classList.toggle("bulb-on");
  if (btn.innerHTML === "ON") {
    btn.innerHTML = "OFF";
  } else {
    btn.innerHTML = "ON";
  }
});
