import { Center } from '@chakra-ui/react'
import { data } from '../../assets/data'
import { Movie } from '../Movie'

const MoviesContainer = () => {

    return(
        <Center gap={10}>
            {data.map(movie => <Movie key={movie.id} info={movie} />)}
        </Center>
    )
}

export { MoviesContainer }