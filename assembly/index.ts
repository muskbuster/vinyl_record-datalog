import { Context, logging } from "near-sdk-as";
import { Vinyls, vinyl } from "./models";

export function newVinyl(songName: string,artist: string,genre: string,price : string): void{
    assert(songName.length>0, "enter the name of the song");
    assert(artist.length>0, "whose beats are these");
    assert(genre.length>0,"genre of the song");
    assert(price.length>0,"price of vinyl in usd");
    let user = Context.sender;
    let toBlockchain = new Vinyls(songName,artist,genre,price);
    vinyl.push(toBlockchain);
    logging.log(songName+ ' borrowed by ' + user);
}

export function Vinylarsenal(): Array<Vinyls>{
    let result = new Array<Vinyls>(vinyl.length);
    for(let i=0; i<vinyl.length; i++){
        let toBlockchain = vinyl[i];
        result[i] = toBlockchain;
    }
    return result;
}

export function Vinylavailable(songName : string):Vinyls|null{
    assert(songName.length>0,"music cannot be defined but you gotta tell the song name mate");
  for (let i = 0; i < vinyl.length; i++) {
    if (vinyl[i].songName == songName) {
      let fromBlockchain = vinyl[i];
      return fromBlockchain;
    }
  }
  return null;
}
export function Genresearch(genre: string):Vinyls|null{
  assert(genre.length>0,"music cannot be defined but you gotta tell the song name mate");
for (let i = 0; i < vinyl.length; i++) {
  if (vinyl[i].genre == genre) {
    let fromBlockchain = vinyl[i];
    return fromBlockchain;
  }
}
return null;
}


//near call sudeep.testnet newVinyl '{"songName" : "rasputin", "artist":"boney", "genre" : "rock","price" : "12"}' --account-id sudeep.testnet
//near call sudeep.testnet newVinyl '{"songName" : "random access memory", "artist":"daft punk", "genre" : "edm","price" : "100"}' --account-id sudeep.testnet
//near call sudeep.testnet Vinylarsenal '{}' --account-id sudeep.testnet
//near call sudeep.testnet Vinylavailable '{"songName" : "rasputin"}' --account-id sudeep.testnet
//near call sudeep.testnet Genresearch '{"genre" : "edm"}' --account-id sudeep.testnet