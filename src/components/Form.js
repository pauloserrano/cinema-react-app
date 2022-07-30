import styled from 'styled-components'

const Form = ({ formData, setFormData, handleFormSubmit }) => {
    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nome do comprador:</label>
        <input 
            required
            type="text" 
            name="name" 
            id="name" 
            placeholder="Digite seu nome..."
            value={formData.name} 
            onChange={handleFormChange} />
        <label htmlFor="cpf">CPF do comprador:</label>
        <input 
            required
            type="text" 
            name="cpf" 
            id="cpf" 
            placeholder="Digite seu CPF..."
            value={formData.cpf} 
            onChange={handleFormChange} />

        <button type="submit">Reservar assento(s)</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
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
`

export default Form