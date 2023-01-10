import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './routes/AllRoutes'
import { useDispatch } from 'react-redux'
import { fetchAllQues } from './Actions and Reducers/Actions/quesAction'
import { fetchAllUsers } from './Actions and Reducers/Actions/usersAction'
import { fetchAllFbUsers } from './Actions and Reducers/Actions/facebookAction'
import { fetchFbPosts } from './Actions and Reducers/Actions/fbpostsAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQues())
    dispatch(fetchAllUsers())
    dispatch(fetchAllFbUsers())
    dispatch(fetchFbPosts())
  }, [dispatch])

  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  )
}

export default App