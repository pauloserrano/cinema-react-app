import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import api from '../services/axios'
import Footer from './Footer'

const Seats = () => {
    const { idSessao } = useParams()
    const [seatsData, setSeatsData] = useState({})
    const [formData, setFormData] = useState({name: '', cpf: ''})

    useEffect(() => {
        api.get(`/showtimes/${idSessao}/seats`)
            .then(({ data }) => setSeatsData(data))
            .catch(err => console.log(err))
    }, [idSessao])

    const handleSelection = (e) => {
        if (e.target.classList.contains('unavailable')) return

        e.target.classList.toggle('selected')
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    const handleFormChange = (e, type) => {
        setFormData({...formData, [type]: e.target.value})
    }

  return (
    <StyledSeats>
        <h1>Selecione os assentos</h1>
        { seatsData.seats 
            ? (<>
                <ol>
                    {seatsData['seats'].map(seat => (
                        <li key={seat.id}>
                            <button 
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
                <form onSubmit={handleForm}>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input 
                        required
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Digite seu nome..."
                        value={formData.name} 
                        onChange={(e) => handleFormChange(e, 'name')} />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input 
                        required
                        type="text" 
                        name="cpf" 
                        id="cpf" 
                        placeholder="Digite seu CPF..."
                        value={formData.cpf} 
                        onChange={(e) => handleFormChange(e, 'cpf')} />

                    <button type="submit">Reservar assento(s)</button>
                </form>
                <Footer>
                    <img src={seatsData.movie.posterURL} alt={seatsData.movie.title} />
                    <div>
                        <p>{seatsData.movie.title}</p>
                        <p>{seatsData.day.weekday} - {seatsData.day.date}</p>
                    </div>
                </Footer>
            </>)
            : 'loading'
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

    form{
        display: flex;
        flex-direction: column;
        width: min(100%, 500px);
        margin: 0 auto;

        label{
            color: #293845;
            margin-bottom: .5em;
        }
        
        input{
            border: 1px solid #D4D4D4;
            margin-bottom: 1em;
            padding: 12px;
            width: 100%;
        }

        input::placeholder{
            color: #AFAFAF;
            font-style: italic;
        }

        label, input, input::placeholder, button{
            font-size: 18px;
        }

        button{
            width: min(80%, 350px);
            margin: 1em auto;
            padding: .5em 1em;
            border: none;
            border-radius: 5px;
            color: white;
            background-color: #E8833A;
            cursor: pointer;
        }
    }
`

export default Seats