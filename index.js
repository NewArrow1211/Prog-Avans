const movies = [
    {
        index: 8,
        name: "Iron Man 1",
        Year: "2008", 
        imageUrl: "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675"
    },

    {
        index: 2,
        name: "Iron Man 2",
        Year: "2010", 
        imageUrl: "https://static.wikia.nocookie.net/ironman/images/d/df/P3546118_v_v8_af.jpg/revision/latest/top-crop/width/360/height/450?cb=20191202171556"
    },

    {
        index: 3,
        name: "Iron Man 3",
        Year: "2013", 
        imageUrl: "https://static.wikia.nocookie.net/ironman/images/1/11/P9259486_v_v8_aw.jpg/revision/latest/top-crop/width/360/height/450?cb=20191202172007"
    },

    {
        index: 4,
        name: "Captain America: The First Avenger",
        Year: "2011", 
        imageUrl: "https://i.pinimg.com/originals/d3/06/ba/d306ba59abe377ae093d6506dfdc07af.jpg"
    },

    {
        index: 5,        
        name: "Captain America: The Winter Soldier",
        Year: "2014", 
        imageUrl: "https://townsquare.media/site/442/files/2013/12/captain-america-2-empire-cover-photo-lead.jpg?w=980&q=75"
    },

    {
        index: 6,
        name: "Captain America: Civil War",
        Year: "2016", 
        imageUrl: "https://www.denofgeek.com/wp-content/uploads/2018/05/civilwar_1.jpg?resize=768%2C432"
    },

    {
        index: 7,
        name: "Avengers",
        Year: "2012", 
        imageUrl: "https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg"
    },

    {
        index: 1,
        name: "Avengers: Age of Ultron",
        Year: "2015", 
        imageUrl: "http://www.businesskorea.co.kr/news/photo/201403/2642_3877_0.jpg"
    },

    {
        index: 9,
        name: "Avengers: Infinity War",
        Year: "2018", 
        imageUrl: "https://cdn.arstechnica.net/wp-content/uploads/2018/04/aveng-infinwar-logo-800x417.jpg"
    },

    {
        index: 10,
        name: "Avengers: Endgame",
        Year: "2019", 
        imageUrl: "https://wegotthiscovered.com/wp-content/uploads/2018/11/Marvel-Avengers-4-title-1.jpg"
    },

]

movies.sort(function(a, b){
    var a1= a.Year, b1= b.Year;
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
});

movies.forEach((movie) => {
    const template = `  <div class="col-md-8 my-3">
                            <div class="card">
                                <img src=${movie.imageUrl} class="card-img-top" alt="${movie.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.name}</h5>
                                    <p class="card-text">${movie.Year}</p>
                                </div>
                            </div>
                        </div>`;


    document.querySelector("#movies-list").innerHTML += template;

})
