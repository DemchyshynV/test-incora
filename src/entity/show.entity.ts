import {IGenre} from '../interfaces';

export abstract class Show {
    name:string;
    genre:IGenre;
    releaseDate:Date

    constructor(name: string, genre: IGenre, releaseDate: Date) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }

    abstract getDuration():number
}
