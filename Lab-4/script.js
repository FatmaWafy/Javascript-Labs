//c-1/////////////////////////////////////////////////
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;
let interval;

function start() {
  interval = setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 800);
}

function stop() {
  clearInterval(interval);
  images[currentIndex].classList.remove("active");
  currentIndex = 0;
  images[currentIndex].classList.add("active");
}

const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", start);
slider.addEventListener("mouseleave", stop);

//c-2//////////////////////////////////////////////////
const dropdown = document.getElementById("dropdown");
const details = document.getElementById("details");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = person.name;
      dropdown.appendChild(option);
    });

    dropdown.addEventListener("change", (event) => {
      const index = event.target.value;
      const person = data[index];

      details.innerHTML = `
        <p>Name:  ${person.name}</p>
        <p>Age:  ${person.age}</p>
        <p>Email:  ${person.email}</p>
      `;
    });
  })

  .catch((error) => {
    console.error("error", error);
    details.textContent = "failed";
  });
