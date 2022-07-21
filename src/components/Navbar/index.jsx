import { HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <HStack>
            <Link to="/">Home</Link>
            <Link to="/ListaDeFavoritos">Lista de favoritos</Link>
        </HStack>
    )
}

export { Navbar }