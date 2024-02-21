const go_to_film = document.getElementById('a1')
const go_to_trailer = document.getElementById('a2')
go_to_film.addEventListener('click', ()=>{
    var url = 'https://www.netflix.com/br/title/60023642';
    window.open(url, '_blank');
})

// go_to_trailer.addEventListener('click', ()=>{
//     var url = 'https://www.youtube.com/watch?v=70NhEBzLKU8';
//     window.open('#trailer');
// })