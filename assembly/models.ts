import { PersistentVector, Context } from "near-sdk-as";

@nearBindgen
export class Vinyls{ 
    songName : string;
    artist : string;
    genre : string;
    price : string;
    user : string;

    constructor(songName: string,artist: string,genre: string,price: string){
        this.songName =songName;
        this.artist = artist;
        this.genre = genre;
        this.price = price;
        this.user = Context.sender;
    }
}


export const vinyl = new PersistentVector<Vinyls>("l");