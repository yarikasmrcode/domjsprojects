const openButton = document.getElementById('open-button');
const modalContainer = document.getElementById('modal-container');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', function(){

    modalContainer.style.display = 'block';

});

closeButton.addEventListener('click',function(){
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
})