const images = [
  "autumn.jpg",
  "busan-night.jpg",
  "korea-1.jpg",
  "korea-2.jpg",
  "mars.jpg",
  "namsan-night.jpg",
  "rock.jpg",
  "temple.jpg",
  "trees.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "background";
bgImage.style.minWidth = "100%";
bgImage.style.minHeight = "100%";
document.body.appendChild(bgImage);
