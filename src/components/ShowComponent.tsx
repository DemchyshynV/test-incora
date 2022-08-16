import {FC, ReactChild, ReactChildren, ReactNode} from 'react';
import {Show} from '../entity';

interface IProps {
    show: Show;
}

const StreamingServiceComponent: FC<IProps> = ({show}) => {
    return (
        <div>
                {show.name} -- {show.releaseDate.getFullYear()} -- {show.genre.name} -- {show.getDuration()}
        </div>
    );
};

export {StreamingServiceComponent};
