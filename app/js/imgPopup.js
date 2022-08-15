//popup

document.querySelectorAll('.image-product').forEach( element => {
    
    element.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = element.getAttribute('src');
        body.classList.add('no-scroll');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
    body.classList.remove('no-scroll');
}