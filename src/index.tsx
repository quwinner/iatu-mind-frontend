import './index.scss'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'

// Inputs stop floating wherever the hell you are...
import 'bootstrap/dist/css/bootstrap.css'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,

  document.getElementById('root')
)
