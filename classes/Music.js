const {Media} = require("./Media");

class Music extends Media {
    constructor(title,year,genre,artist,length) {
      super(title,year,genre);
      this.artist = artist;
      this.length = length;
    }
    summary(){
        return "Title: " + this.title + ", Artist: " + this.artist + ", Year: " + this.year + ", Genre: " + this.genre + ", Length: " + this.length + " seconds";
    }

    static shortestAlbum(array){
        let maxD = array.reduce((a,b)=>a.duration<b.duration?a:b)
        return maxD;
    }
}


module.exports = {Music};