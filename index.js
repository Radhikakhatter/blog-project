//function to display all image in the container
function displayImages(){
    container.image.forEach((image)=>{
        console.log(image);
    });

}
//function to display filter categories
function filterCategories(){
    return filterCategories.filter(category.includes(keyword));
}
