const buttons = {
    button1: document.querySelector('.button1'),
    button2: document.querySelector('.button2'),
    button3: document.querySelector('.button3'),
    button4: document.querySelector('.button4'),
    button5: document.querySelector('.button5')
};
    
const images = {
    images1: document.querySelectorAll('.breakfast'),
    images2: document.querySelectorAll('.mainDishes'),
    images3: document.querySelectorAll('.drinks'),
    images4: document.querySelectorAll('.dessert')
};

function hiddenImages(){
    Object.values(images).forEach(imagesList => {
        imagesList.forEach(imagesAdd => {
            imagesAdd.classList.add('hiddenImages');
        });
    });
};

function showAllImages() {
    Object.values(images).forEach(imagesList => {
        imagesList.forEach(image => {
            image.classList.remove('hiddenImages');
        });
    });
}

function showImages(imagesList){
    imagesList.forEach(imagesRemove =>{
        imagesRemove.classList.remove('hiddenImages');
    });
};

function selectMenu(){

    const clickButton = event.target;

    hiddenImages();

    if(clickButton === buttons.button1){
        showAllImages();
    } else if(clickButton === buttons.button2){
        showImages(images.images1);
    } else if(clickButton === buttons.button3){
        showImages(images.images1);
    } else if(clickButton === buttons.button4){
        showImages(images.images1);
    } else if(clickButton === buttons.button5){
        showImages(images.images4);
    }
}