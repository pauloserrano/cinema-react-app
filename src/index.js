import ReactDOM from 'react-dom'
import App from './components/App'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>, document.querySelector('.root'))