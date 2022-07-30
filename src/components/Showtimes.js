import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import api from '../services/axios'
import Footer from "./Footer"
import Loader from "./Loader"

const Showtimes = () => {
    const { idFilme } = useParams()
    const [sessionData, setSessionData] = useState({})

    useEffect(() => {
        api.get(`/movies/${idFilme}/showtimes`)
            .then(({ data }) => setSessionData(data))
            .catch(err => console.log(err))
    }, [idFilme])
    

  return (
    <StyledSession>
        {sessionData.days 
            ? (
                <>
                    <h1>Selecione o horário</h1>
                    {sessionData.days.map((value, id) => (
                    <section key={id}>
                        <h2>{value.weekday} - {value.date}</h2>
                        <ul>
                            {value.showtimes.map(({ name, id }) => (
                                <li>
                                    <Link to={`/assentos/${id}`} key={id}>
                                        <button key={id}>{name}</button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>))}
                    <Footer>
                        <img src={sessionData.posterURL} alt={sessionData.title} />
                        <div>
                            <p>{sessionData.title}</p>
                        </div>
                    </Footer>
                </>
            )
            : <Loader />
        }
    </StyledSession>
  )
}

const StyledSession = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    h1{
        font-size: 24px;
        margin: 36px auto;
        letter-spacing: 0.04em;
    }

    section{
        display: flex;
        align-items: center;
        flex-direction: column;

        h2, ul{
            font-size: 20px;
            margin-bottom: 1em;
        }

        ul{
            display: flex;

            li{
                margin: 0 .25em;
            }

            button{
                border: transparent;
                padding: .5em 1em;
                font-size: 18px;
                background-color: #E8833A;
                color: white;
                cursor: pointer;
            }
        }
    }

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        bottom: 0;
        width: 100%;
        padding: 16px;
        color: #293845;
        background-color: #9EADBA;

        img{
            max-width: 65px;
            border: 5px solid white;
            border-radius: 5px;
            margin-right: 16px;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        }

        p{
            font-size: 26px;
        }
    }
`

export default Showtimes