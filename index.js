const colorGenerator = () => {
  let color = "#";
  const letters = "012EF";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 5)];
  }
  return color;
};

document.body.style.backgroundColor = "#222";
const section = document.createElement("section");
section.classList.add("flex");
document.body.appendChild(section);

const imageSection = document.createElement("section");
imageSection.classList.add("imageSectionStyle");
document.body.appendChild(imageSection);

for (let i = 0; i < 6; i++) {
  const color = colorGenerator();
  const myDiv = document.createElement("div");
  myDiv.id = `${i + 1}`;
  myDiv.classList.add("divStyle");
  const h2El = document.createElement("h2");
  h2El.textContent = `Animal no.${i + 1}`;
  h2El.style.color = color;
  const pEl = document.createElement("p");
  pEl.classList.add("pragraphStyle");
  pEl.textContent = `Show photo`;
  pEl.style.color = "white";
  myDiv.append(h2El, pEl);
  section.appendChild(myDiv);
}

for (let i = 0; i < section.children.length; i++) {
  section.children[i].children[1].addEventListener("click", () => {
    const animalPhoto = document.createElement("img");
    const src = `./images/${i + 1}.jpg`;
    animalPhoto.setAttribute("src", src);
    imageSection.innerHTML = "";
    imageSection.appendChild(animalPhoto);
  });
}

