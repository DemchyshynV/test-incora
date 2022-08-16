import {FC} from 'react';

import {Movie, Series, StreamingService, User} from './entity';
import {genres} from './db';
import {Episode} from './entity';
import {ShowComponent} from './components/ShowComponent';

const App:FC = () => {
    const episode = new Episode('first_episode', genres[0], new Date(),1.5);
    const series = new Series('s1', genres[0], new Date(2015, 6, 25), [episode],2);
    const movie = new Movie('batman', genres[2], new Date(2000, 5, 5),3);
    const streamingService = new StreamingService('myStream', [episode, series, movie]);
    const user = new User();
    user.subscribe(streamingService)

    return (
        <div>
            <div>
                <h1>Show</h1>
                <div>
                    {user.subscriptions[0].streamingService.shows.map(value => <ShowComponent key={value.name} show={value}/>)}
                </div>
            </div>
        </div>
    );
};

export {App};
