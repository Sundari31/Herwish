  const images = [
    "./images/header1.jpg",
    "./images/header2.jpg",
    "./images/header3.jpg"
  ]

  let currentIndex = 0;

  const headerImage = document.getElementById("headerImage")
  const leftArrow = document.getElementById("leftArrow")
  const rightArrow = document.getElementById("rightArrow")

  function showImage(index) {
    headerImage.src = images[index];
  }

  leftArrow.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });

  rightArrow.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  })

