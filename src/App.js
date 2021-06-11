import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WebcamPage from './pages/WebcamPage'
import ContinentPage from './pages/ContinentPage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path={'/webcam/:id'}
          render={(props) => <WebcamPage {...props} />}
        />
        <Route path="/" component={HomePage} exact />
        <Route path="/continents" component={ContinentPage} exact />
      </Switch>
    </Router>
  )
}

export default App
