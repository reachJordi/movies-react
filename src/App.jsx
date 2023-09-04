import { useEffect, useState } from 'react'
import List from './components/List'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState({})
  
  // Runs on the first render
  // And any time any dependency value changes
  useEffect(() => {
    async function fetchData () {
        const movies = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bba7494475msh5b45d6ceabc2cf6p1192fdjsna705389f1625',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        })
        const response = await movies.json()
        console.log(response)
        if (response) {
            setMovies(response)
            setIsLoading(false)
        }
    }

    fetchData()
  },[]);

  return (
    <>
    {isLoading
          ? (
            <span>Loading...</span>
            )
          : (
            <div>
                {<List data={movies.data} />}
            </div>
            )}
    </>
  )
}

export default App
