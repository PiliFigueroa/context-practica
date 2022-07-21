import { VStack, Image, Text, Button } from '@chakra-ui/react'
import { useFavoritesContext } from '../../context/favoritosContext'

const Movie = ({ info }) => {

    const { addToFavorite } = useFavoritesContext()

    return(
        <VStack>
            <Image src={info?.img} w="300px" />
            <Text>{info?.name}</Text>
            <Button colorScheme="teal" onClick={() => addToFavorite(info)}>Agregar a favoritos</Button>
        </VStack>
    )
}

export { Movie }