import {Show} from './show.entity';
import {IGenre} from '../interfaces';

export class Movie extends Show{

    constructor(name: string, genre: IGenre, releaseDate: Date,private duration:number) {
        super(name, genre, releaseDate);
    }

    getDuration(): number {
        return this.duration;
    }
}
