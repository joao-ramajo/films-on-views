const ptBR = document.getElementById('langPt');
const enUS = document.getElementById('langEn');
const jaJP = document.getElementById('langJP');

const elements=[
    document.getElementById('autor'),
     document.getElementById('titulo'),
      document.getElementById('paragrafo'),
       document.getElementById('a1'),
        document.getElementById('a2')
    ]



const dataPT = {
    autor : '<a href="https://pt.wikipedia.org/wiki/Hayao_Miyazaki">HAYAO MIYAZAKI</a>',
    titulo : 'A VIAGEM DE CHIHIRO',
    paragrafo : 'Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.',
    btn1 : 'Assistir agora',
    btn2 : 'Assista o trailer'
}

ptBR.addEventListener('click', ()=>{
    ptBR.classList.add('selected');
    enUS.classList.remove('selected');
    jaJP.classList.remove('selected')

    elements[0].innerHTML = dataPT.autor;
    elements[1].innerHTML = dataPT.titulo;
    elements[2].innerHTML = dataPT.paragrafo;
    elements[3].innerHTML = dataPT.btn1;
    elements[4].innerHTML = dataPT.btn2;
})

const dataEN ={
    autor: '<a href="https://en.wikipedia.org/wiki/Hayao_Miyazaki">HAYAO MIYAZAKI</a>',
    titulo: 'SPIRITED AWAY',
    paragrafo: 'Chihiro arrives in a magical world ruled by a witch. Those who disobey are turned into animals.',
    btn1: 'Watch Now',
    btn2: 'Watch the Trailer'
}

enUS.addEventListener('click', ()=>{
    ptBR.classList.remove('selected');
    enUS.classList.add('selected');
    jaJP.classList.remove('selected')

    elements[0].innerHTML = dataEN.autor;
    elements[1].innerHTML = dataEN.titulo;
    elements[2].innerHTML = dataEN.paragrafo;
    elements[3].innerHTML = dataEN.btn1;
    elements[4].innerHTML = dataEN.btn2;
})

const dataJP = {
    autor: '<a href="https://en.wikipedia.org/wiki/Hayao_Miyazaki">宮崎駿</a>',
    titulo: '千と千尋の神隠し',
    paragrafo: '千尋は魔法の世界に到着し、魔女に支配されています。服従しない者は動物に変えられます。',
    btn1: '今すぐ視聴',
    btn2: '予告編を見る'
}

jaJP.addEventListener('click', ()=>{
    ptBR.classList.remove('selected');
    enUS.classList.remove('selected');
    jaJP.classList.add('selected');

    elements[0].innerHTML = dataJP.autor;
    elements[1].innerHTML = dataJP.titulo;
    elements[2].innerHTML = dataJP.paragrafo;
    elements[3].innerHTML = dataJP.btn1;
    elements[4].innerHTML = dataJP.btn2;
})