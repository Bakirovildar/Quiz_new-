import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import QuizList from "./components/quizList/QuizList";
import Settings from "./components/settings/Settings";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <Layout>

        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/quiz-list'} element={<QuizList />} />
          <Route path={'/quiz/:id'} element={<Quiz />} />
          <Route path={'/settings'} element={<Settings />} />
        </Routes>


      </Layout>
    )
  }
}

export default App
