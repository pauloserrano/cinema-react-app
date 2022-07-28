import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from '../services/axios'

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get()
            .then(({ data }) => {
            setMovies(data)
            console.log(data)
        })
    }, [])

  return (
    <StyledHome>
        {movies 
        ? movies.map(movie => <img src={movie.posterURL} />)
        : 'carregando'
        }
    </StyledHome>
  )
}

const StyledHome = styled.main`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

    img{
        max-width: 150px;
        margin: 10px;
        border: 15px solid white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`

export default Home