const {Media} = require("./Media");

class Movie extends Media {
    constructor(title,year,genre,director,duration,rating) {
      super(title,year,genre);
      this.director = director;
      this.duration = duration;
      this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
        // + this.title + ", Director: " + this.director + ", Year: " + this.year + ", Genre: " + this.genre + ", + ",Rating: " + this.rating;
    }

    static longestMovie(array){
        let maxD = array.reduce((a,b)=>a.duration>b.duration?a:b)
        return maxD;
    }
}

module.exports = {Movie};