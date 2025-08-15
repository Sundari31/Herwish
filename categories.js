const categoryLink = document.getElementById("categoryLink")
const category = document.getElementById("category")

categoryLink.addEventListener("click",function(){
    category.scrollIntoView({
        behavior: "smooth"
    })
})