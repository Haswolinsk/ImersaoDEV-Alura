var listaAnimes = ["https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg",
"https://gatecima.com/wp-content/uploads/2021/09/24f75e4891b4bcd2db30e699c478d93c-282-poster.jpg",
"https://images.justwatch.com/poster/248497985/s332/one-piece-1999.%7Bformat%7D",
"https://www.jbchost.com.br/editorajbc/wp-content/uploads/2021/05/haikyu-big-01-capa-p.jpg"]

for (let i = 0; i < listaAnimes.length; i++) {
    document.write(`<img src="${listaAnimes[i]}">`);
}