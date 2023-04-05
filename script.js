// create checkerboard

//get the body element
//add divs into the body element

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "800px";
container.style.width = "800px";

for (let i = 0; i <= 63; i++) {
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  console.log(randomColor);

  const row = Math.floor(i / 8);

  if ((i + row) % 2 === 0) {
    tile.style.background = `#${randomColor}`;
  } else {
    tile.style.background = `#${randomColor}`;
  }

  container.append(tile);
}

document.body.append(container);
console.log(document);
