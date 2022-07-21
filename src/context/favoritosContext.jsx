import { createContext, useState, useContext } from "react"

const FavoritesContext = createContext([])
export const useFavoritesContext = () => useContext(FavoritesContext)

export function FavoritesContextProvider({children}) {

    const [favoritesList, setFavoritesList] = useState([])

    const isInList = (id) => favoritesList.find(movie => movie.id === id) ? true : false

    const addToFavorite = (movie) => {
        if (!isInList(movie.id)) {
            setFavoritesList([...favoritesList, movie])
        } else {
            alert("Ya esta agregada!!")
        }
    }

    const removeMovie = (id) => setFavoritesList(favoritesList.filter(movie => movie.id != id))

    const cleanFavorites = () => setFavoritesList([])

    return (
        <FavoritesContext.Provider value={{
            addToFavorite,
            favoritesList,
            removeMovie,
            cleanFavorites
        }}>
          {children}
        </FavoritesContext.Provider>
      );
}