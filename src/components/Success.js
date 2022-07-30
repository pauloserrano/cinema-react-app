import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Success = () => {
  const { state: { movieData, formData, seats } } = useLocation()
  console.log({movieData, formData, seats})

  return (
    <StyledMain>
        <h1>Pedido feito com sucesso!</h1>
        <div>
          <h2>Filme e sessão</h2>
          <p>{movieData.movie.title}</p>
          <p>{movieData.day.date} {movieData.name}</p>
        </div>
        <div>
          <h2>Ingressos</h2>
          {seats.map(seat => (
            <p key={seat.id}>Assento {seat.number}</p>
          ))}
        </div>
        <div>
          <h2>Comprador</h2>
          <p>Nome: {formData.name}</p>
          <p>CPF: {formData.cpf}</p>
        </div>
        <button>
          <Link to="/ ">Voltar para Home</Link>
        </button>
    </StyledMain>
  )
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: min(80%, 350px);
    margin: 1em auto;

    h1, h2, p{
      letter-spacing: 0.04em;
    }

    h1, h2{
        font-size: 24px;
        font-weight: bold;
    }

    h2, p{
      color: #293845;
    }

    h1{
      max-width: 50%;
      margin: 16px auto 32px;
      text-align: center;
      color: #247A6B;
    }

    div{
      margin: 1em 0 1.5em 0;

      h2{
        line-height: 1.5em;
      }

      p{
        font-size: 22px;
        line-height: 1.25em;
      }
    }

    button{
      width: min(80%, 350px);
      margin: 2.5em auto 8px;
      padding: 1em 1.5em;
      border: none;
      border-radius: 5px;
      background-color: #E8833A;
      cursor: pointer;

      a{
        color: white;
        font-size: 18px;
        text-decoration: none;
      }
    }
`

export default Success