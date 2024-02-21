const ptBR = document.getElementById('langPt');
const enUS = document.getElementById('langEn');
const jaJP = document.getElementById('langJP');

const elements=[
    document.getElementById('autor'),
     document.getElementById('titulo'),
      document.getElementById('paragrafo'),
       document.getElementById('a1'),
        document.getElementById('a2'),
         document.getElementById('trailer')
    ]



const dataPT = {
    autor : '<a href="https://pt.wikipedia.org/wiki/Hayao_Miyazaki" target="_BLANK">HAYAO MIYAZAKI</a>',
    titulo : 'A VIAGEM DE CHIHIRO',
    paragrafo : 'Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.',
    btn1 : 'Assistir agora',
    btn2 : 'Assista o trailer',
    trailer : 'Trailer'
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
    elements[5].innerHTML = dataPT.trailer;
})

const dataEN ={
    autor: '<a href="https://en.wikipedia.org/wiki/Hayao_Miyazaki" target="_blank">Hayao Miyazaki</a>',
    titulo: 'A Viagem de Chihiro',
    paragrafo: 'Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.',
    btn1: 'Assistir agora',
    btn2: 'Assista o trailer',
    trailer: 'Trailer'
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
    elements[5].innerHTML = dataEN.trailer;
})

const dataJP = {
    autor: '<a href="https://ja.wikipedia.org/wiki/%E5%AE%AE%E5%B4%8E%E9%A7%BF" target="_blank">宮崎駿</a>',
    titulo: '千と千尋の神隠し',
    paragrafo: '千尋は魔法の世界に到着し、魔女に支配されています。服従しない者は動物に変えられます。',
    btn1: '今すぐ視聴',
    btn2: '予告編を見る',
    trailer: 'トレーラー'
    
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
    elements[5].innerHTML = dataJP.trailer;
})