import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home.js'
import Report from '../pages/Report.js'
import TodoList from '../components/TodoList'

const ReportWithParam = ({ match }) => (
    <div>
      <Report id= {match.params.id} />
    </div>
  )


function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/todolist" exact component={TodoList} />
            <Route path='/report/:id' component={ReportWithParam} />
        </Router>
    )

}

export default AppRouter