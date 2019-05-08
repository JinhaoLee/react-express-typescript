import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Pages'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
