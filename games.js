// LANÇAMENTOS

let qntGames = 0;

atualizaJogos()

function atualizaJogos(qntGames) {
  fetch('https://api.rawg.io/api/games?key=dd4eae6aa9fd4ddcad700312af7c4076')
    .then(res => res.json())
    .then(data => {
      let str = '';
      for (let i = 0; i < qntGames; i++) {
        let jg = data.results[i];
        str += `<div class="col-md-6 col-lg-4 col-xxl-3">
            <div class="card_jogo">
              <h4 id="nomeJogo">${jg.name}</h4>
              <div id="cf">
                <img class="bottom" src="${jg.short_screenshots[1].image}" alt="Bootstrap" width="160"
                  height="90">
                <img class="top" src="${jg.background_image}" alt="Bootstrap" width="160" height="90">
              </div>
              <p> <a id="dta">Data de lançamento: ${dtLanca(data.results[i].released)}</a></p>
              <p> <a>Avaliação: ${(jg.rating)}</a></p>
              <p> <a class="moreInfo" href="detalhes.html?id=${jg.id}">Mais detalhes</a></p>
            </div>
          </div>`
      }
      document.getElementById('Games').innerHTML = str;
    })
}

// Data Brasileira
function dtLanca(dtbr) {
  let ano = dtbr.substring(4, 0);
  let mes = dtbr.substring(7, 5);
  let dia = dtbr.substring(10, 8);
  let lancamentoData = dia + '/' + mes + '/' + ano;
  return lancamentoData;
}

function btnLancamento() {
  if (qntGames < 9) {
    qntGames += 3;
    atualizaJogos(qntGames)
  } else {
    document.getElementById('btnLancamento').style.display = "none";
  }
}

//Página Detalhes
function detalhes(id) {
  
  console.log("deu certo")

  fetch('https://api.rawg.io/api/games?key=dd4eae6aa9fd4ddcad700312af7c4076')
  .then(res => res.json())

  .then(data => {

  let jg = data.results.findIndex (jg => jg.id == id)

    let str0 = `<div class="card col-md-4" >
      <div class="card_jogo">
      <h4 id="nomeJogo">${jg.name}</h4>
      <p><a> Review: ${(jg.reviews_text_count)}</a></p>
      <p><a> Update: ${(jg.updated)}</a></p>
    </div>
          </div>`

    document.getElementById('detalhes').innerHTML = str0

  })
    
}


//PLATAFORMAS

let qntPlataformas = 0;

atualizaPlataformas(qntPlataformas)

function atualizaPlataformas(qntPlataformas) {
  fetch('https://api.rawg.io/api/platforms?key=dd4eae6aa9fd4ddcad700312af7c4076')
    .then(res => res.json())
    .then(data => {
      let str1 = '';
      for (let i = 0; i < qntPlataformas; i++) {
        let pb = data.results[i];
        str1 += `<div class="col">
                <div class="conteudo_publ">
                  <h4>${pb.name}</h4>
                  <img src="${pb.image_background}" alt="Bootstrap" width="160" height="90">
                  <h5>Principais jogos</h5>
                  <li>${pb.games[0].name}</li>
                  <li>${pb.games[1].name}</li>
                  <li>${pb.games[2].name}</li>
                </div>
              </div>`
        console.log(pb)
      }
      document.getElementById('Plataformas').innerHTML = str1;
    })
}

function btnPlataformas() {
  if (typeof window !== 'undefined') {
    if (qntPlataformas < 9) {
      qntPlataformas += 3;
      atualizaPlataformas(qntPlataformas)
    } else {
      document.getElementById('btnPlataformas').style.display = "none";
    }
  }
  else { }
}

//PUBLISHERS

let qntPublishers = 0;

atualizaPublishers(qntPublishers)

function atualizaPublishers(qntPublishers) {
  fetch('https://api.rawg.io/api/publishers?key=dd4eae6aa9fd4ddcad700312af7c4076')
    .then(res => res.json())
    .then(data => {
      let str2 = '';
      for (let i = 0; i < qntPublishers; i++) {
        let pb = data.results[i];
        str2 += `<div class="col">
                <div class="conteudo_publ">
                  <h4>${pb.name}</h4>
                  <img src="${pb.image_background}" alt="Bootstrap" width="160" height="90">
                  <h5>Principais jogos</h5>
                  <li>${pb.games[0].name}</li>
                  <li>${pb.games[1].name}</li>
                  <li>${pb.games[2].name}</li>
                </div>
              </div>`
        console.log(pb)
      }
      document.getElementById('Publishers').innerHTML = str2;
    })
}

function btnPublishers() {
  if (typeof window !== 'undefined') {
    if (qntPublishers < 9) {
      qntPublishers += 3;
      atualizaPublishers(qntPublishers)
    } else {
      document.getElementById('btnPublishers').style.display = "none";
    }
  }
  else { }
}
