const trendingLink = document.getElementById("trendingLink")
const trendingProduct = document.getElementById("trendingProduct")
const likeBtns = document.querySelectorAll(".like-btn")

trendingLink.addEventListener("click", function () {
  trendingProduct.scrollIntoView({
    behavior: "smooth"
  })
})

likeBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    const svg = button.querySelector("svg")

    const isLiked = svg.classList.contains("fill-red-500")

    if (isLiked) {
      svg.classList.remove("fill-red-500")
      svg.classList.add("stroke-gray-500")
    } else {
      svg.classList.add("fill-red-500")
      svg.classList.remove("stroke-gray-500")
    }
  })
})
