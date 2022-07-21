import { useFavoritesContext } from "../../context/favoritosContext"
import { VStack, Image, Text, Button } from '@chakra-ui/react'

const ListaDeFavoritos = () => {

    const { removeMovie, favoritesList, cleanFavorites } = useFavoritesContext()

    return(
        <>
            {favoritesList.map(movie => <VStack key={movie?.id}>
                <Image src={movie?.img} w="300px" />
                <Text>{movie?.name}</Text>
                <Button colorScheme="red" onClick={() => removeMovie(movie.id)}>Remover</Button>
            </VStack>)}
            {favoritesList.length != 0 && <Button colorScheme="teal" onClick={cleanFavorites}>Vaciar favoritos</Button>}
            {favoritesList.length === 0 && <Text>Aun no hay favoritos :(</Text>}
        </>
    )
}

export { ListaDeFavoritos }