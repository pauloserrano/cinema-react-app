import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from '../services/axios'
import Loader from './Loader'

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get('/movies')
            .then(({ data }) => {
            setMovies(data)
            console.log(data)
        })
    }, [])

  return (
    <StyledHome>
        {movies 
            ? (<>
                <h1>Selecione o filme</h1>
                <ul>
                    {movies.map(movie => (
                    <li>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Link>
                    </li>
                    ))}
                </ul>
            </>)
            : <Loader />
        }
    </StyledHome>
  )
}

const StyledHome = styled.main`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;

    h1{
        font-size: 24px;
        margin: 36px auto;
        letter-spacing: 0.04em;
    }

    ul{
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
    }

    img{
        max-width: 150px;
        margin: 10px;
        border: 15px solid white;
        border-radius: 5px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`

export default Home