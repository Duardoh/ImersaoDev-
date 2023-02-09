document.write("<p>" + "RECOMENDAÇÕES PARA ASSISTIR" + "</p>");

var listaSeries = ["https://m.media-amazon.com/images/M/MV5BMmZmMjgyOTUtZjljMS00NjhlLTkzMmItM2EyMzY5NzU0NzFiXkEyXkFqcGdeQXVyNjIzMTEyNDk@._V1_FMjpg_UX1000_.jpg",
                   "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg",
                   "https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
                   "https://feira.tangerina.news/wp-content/uploads/2022/12/the-white-lotus-2-temporada-cartaz-hbo.jpg",
                   "https://cdn-prog.hbolatam.com/series/images/season/20_601613_PT.jpg"];


// comentar em varias linhas = selecionar o que deseja e Ctrl / 


// for(var i =0;i<listaSeries.length;i++) {         
  
//   //1º = declarar o valor do i; 2º = colocar até aonde ir; 3º quando fizer tudo somar mais 1

// document.write("<img src=" + listaSeries[i] + ">");
// }

var listaNomeSeries = ["The Bear", "The Last of Us", "Severance", "The White Lotus", "Westworld"]

var i=0;
while(i<listaSeries.length) {         
  if(listaSeries[i].endsWith('jpg')){
    document.write('<img src=' + listaSeries[i] + '>')
    document.write('<p class="listaNomes">' + listaNomeSeries[i] + '</p>')
    i++
  } else {}
}
