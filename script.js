const container = document.querySelector('.container');
const banner = document.querySelector('.banner');
const thumbs = document.querySelectorAll('.thumbnail div');


container.addEventListener('click', function(e){
    // jika yang di klik adalah thumbnail
    if(e.target.parentElement.className == 'thumbnail'){
        // ganti gambar banner menjadi gambar yang ada di thumbnail
        let url = e.target.getAttribute('name');
        banner.style.backgroundImage = 'url('+url+')';
        
        banner.classList.add('fade');
        setTimeout(function(){
            banner.classList.remove('fade');
        }, 400);

        let i = 1;
        thumbs.forEach(function(thumb){
            thumb.className = 'thumb'+i++;
        })
        e.target.classList.add('active');
    }
});












// const ele = document.getElementById('id');
// ele.style. = 