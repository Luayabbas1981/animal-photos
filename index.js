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
  h2El.style.color= color;
  const pEl = document.createElement("p");
  pEl.classList.add("pragraphStyle")
  pEl.textContent = `Show photo`;
  pEl.style.color = "white";
  myDiv.append(h2El, pEl);
  section.appendChild(myDiv);

 
}

for (let i = 0; i < section.children.length; i++) {
 
  section.children[i].children[1].addEventListener("click",()=>{
    const animalPhoto = document.createElement("img");
    const src = `./images/${i + 1}.jpg`;
    animalPhoto.setAttribute("src", src);
    imageSection.innerHTML="";
    imageSection.appendChild(animalPhoto);
    
   
  })
}























/* const mySection1 = document.createElement("section");
mySection1.className = "flexdiv";
document.body.append(flexDiv);

const mySection2 = document.createElement("section");
document.body.append(mySection2);


for (i = 1; i <= 6; i++) {
  const myDiv = document.createElement("div");
  myDiv.className = "product";
  myDiv.style.backgroundColor = "#5dbce7";
  flexDiv.append(myDiv);
  const myHead = document.createElement("h2");
  myHead.classList.add("myhead");
  myHead.textContent = `Animal No.${i}`;
  myDiv.append(myHead);
  const myParagraph = document.createElement("p");
  myParagraph.textContent = "See Animal Photo";
  myParagraph.className = `myparagraph num${i}`; //clasName "overwrite"
  myDiv.append(myParagraph);
  myHead.style.color = `${colorGenerator()}`;
  myParagraph.style.color = "white";
  myParagraph.style.cursor = "pointer";
  const imageDiv = document.createElement("div");
  mySection.append(imageDiv)
  for(j=1;j<=i;j++){
    const image = document.createElement("img");
    image.className = `image num${j}`;
    img[j].src = `./images/${j}.jpg`
    imageDiv.append(image);
  }
}
 */
