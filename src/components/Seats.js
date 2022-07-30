import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import api from '../services/axios'
import Form from './Form'
import Footer from './Footer'
import Loader from './Loader'


const Seats = () => {
    const [movieData, setMovieData] = useState({})
    const [formData, setFormData] = useState({})
    const [seats, setSeats] = useState([])
    const { idSessao } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        api.get(`/showtimes/${idSessao}/seats`)
            .then(({ data }) => setMovieData(data))
            .catch(err => console.log(err))
    }, [idSessao])


    const handleSelection = (e) => {
        if (e.target.classList.contains('unavailable')){
            alert("Esse assento não está disponível")
            return  
        }

        const seatID = e.target.id
        const isSelected = seats.indexOf(seatID) >= 0

        if (isSelected){
            setSeats(arr => [...arr].filter(seat => seat.id !== seatID))
        
        } else {
            setSeats(arr => [...arr, {number: e.target.innerText, id: seatID}])
        }

        e.target.classList.toggle('selected')
    }


    const handleFormSubmit = async (e) => {
        try {
            e.preventDefault()

            if (seats.length <= 0) {
                alert('Escolha pelo menos um assento.')
                return
            }

            await api.post(`/seats/book-many`, {
                ids: seats.map(seat => seat.id), 
                name: formData.name, 
                cpf: formData.cpf
            })

            navigate('/success', {state: { movieData, formData, seats }})
        
        } catch (err){
            console.log(err)
        }
    }


  return (
    <StyledSeats>
        <h1>Selecione os assentos</h1>
        {movieData.seats 
            ? (<>
                <ol>
                    {movieData['seats'].map(seat => (
                        <li key={seat.id}>
                            <button id={seat.id}
                                onClick={handleSelection} 
                                className={seat.isAvailable ? '' : 'unavailable'}>
                                    {seat.name >= 10 ? seat.name : `0${seat.name}`}
                            </button>    
                        </li>
                    ))}
                    <li className="symbols">
                        <div>
                            <button className='selected'></button>
                            <p>Selecionado</p>
                        </div>
                        <div>
                            <button></button>
                            <p>Disponível</p>
                        </div>
                        <div>
                            <button className='unavailable'></button>
                            <p>Indisponível</p>
                        </div>
                    </li>
                </ol>
                <Form 
                    formData={formData} 
                    setFormData={setFormData} 
                    handleFormSubmit={handleFormSubmit} />
                <Footer>
                    <img src={movieData.movie.posterURL} alt={movieData.movie.title} />
                    <div>
                        <p>{movieData.movie.title}</p>
                        <p>{movieData.day.weekday} - {movieData.day.date}</p>
                    </div>
                </Footer>
            </>)
            : <Loader />
        }
    </StyledSeats>
  )
}


const StyledSeats = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    h1{
        font-size: 24px;
        margin: 36px auto;
        letter-spacing: 0.04em;
    }

    ol, form{
        padding: 0 16px;
    }

    ol{
        --grid-size: 10;

        display: grid;
        grid-template-columns: repeat(var(--grid-size), 1fr);
        gap: 1em .5em;
        margin-bottom: 36px;

        li.symbols{
            display: flex;
            justify-content: center;
            grid-column: span var(--grid-size);
            margin: 8px 0;

            div{
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 0 1em;

                button{
                    padding: 1em;
                    margin-bottom: .5em;
                }

                p{
                    font-size: 12px;
                    color: #4E5A65;
                }
            }
        }

        button{
            font-size: 12px;
            padding: .5em;
            border: 1px #808F9D solid;
            background-color: #C3CFD9;
            cursor: pointer;
        }

        button.selected{
            border: 1px #45BDB0 solid;
            background-color: #8DD7CF;
        }

        button.unavailable{
            border: 1px #F7C52B solid;
            background-color: #FBE192;
        }

        li, button{
            border-radius: 50%;
        }
    }
`

export default Seats