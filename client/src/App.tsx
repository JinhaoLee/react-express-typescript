import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './Pages'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/error/400" />} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
