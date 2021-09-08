import './index.scss'
import ReactDOM from 'react-dom'
import App from './component/App'

// Inputs stop floating wherever the hell you are...
import 'bootstrap/dist/css/bootstrap.css'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

//Redux
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
)
