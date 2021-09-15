
let main = new Vue({

    el: "#root",
    data: {
        immagine: [
            {
                src: "https://it.videogamer.com/wp-content/uploads/2015/03/dragon-ball-z-super-extreme-butoden.jpg",
                alt: "Immagine dragon ball" 
            },

            {
                src: "https://static.posters.cz/image/1300/poster/naruto-shippuden-konoha-ninjas-i87466.jpg",
                alt: "Immagine naruto" 
            },

            {
                src: "https://www.lascimmiapensa.com/wp-content/uploads/2019/03/one-piece.jpg",
                alt: "Immagine one piece" 
            },

            {
                src: "https://www.tomshw.it/images/images/2021/01/anime-139142.jpg",
                alt: "Immagine death note" 
            },

            {
                src: "https://images.everyeye.it/img-articoli/my-hero-academia-recensione-stagione-dell-anime-studio-bones-v7-38054.jpg",
                alt: "Immagine my hero academy" 
            },

            {
                src: "https://www.hallofseries.com/wp-content/uploads/2020/08/Attack-on-Titan-anime-35895653-1170-832.jpg",
                alt: "Immagine attack on titan" 
            },
            
        ],
        indexImage: 0,
        classeAttiva: "active",
    },
    methods: {
        nextImage(){
            this.indexImage++;
            if(this.indexImage >= this.immagine.length){
                this.indexImage = 0;
            }
            console.log(this.indexImage, this.immagine.length);
        },

        behindImage(){
            this.indexImage--;
            if(this.indexImage < 0){
                this.indexImage = this.immagine.length - 1;
            }
            console.log(this.indexImage, this.immagine.length);
        }
    }
});
console.log("ciao");