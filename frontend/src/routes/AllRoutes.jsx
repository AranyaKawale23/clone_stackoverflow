import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Login from '../components/pages/Log-Sign/Login'
import SignUp from '../components/pages/Log-Sign/SignUp'
import Tags from '../components/pages/tags/Tag'
import Users from '../components/pages/users/Users'
import UsersProfile from '../components/pages/users/UsersProfile'
import AskQuestion from '../components/pages/questions/AskQuestion'
import DisplayQuestions from '../components/pages/questions/DisplayQuestions'
import Payment from '../components/payment/Payment'
import Media from '../components/media/media/Media'
import Fb from '../components/media/fb feature/Fb'
import FbPostForm from '../components/media/fb feature/fb posts scroller/FbPostForm'
import FbCurrUserPosts from '../components/media/fb feature/fb posts scroller/FbCurrUserPosts'
import ChatRobt from '../components/media/chatbot/ChatRobt'
import PaymentSuccess from "../components/payment/PaymentSuccess";
import Card from '../components/payment/Card'
const AllRoutes = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/askquestion'} element={<AskQuestion />} />
      <Route path={'/questions'} element={<DisplayQuestions />} />
      <Route path={'/question/:id'} element={<DisplayQuestions />} />
      <Route path={'/user/:id'} element={<UsersProfile />} />
      <Route path={'/users'} element={<Users />} />
      <Route path={'/tags'} element={<Tags />} />
      <Route path={'/payment'} element={<Payment />} />
      <Route path={'/media'} element={<Media />} />
      <Route path={'/fb feature'} element={<Fb />} />
      <Route path={'/fbcurruserposts'} element={<FbCurrUserPosts />} />
      <Route path={'/fbpostform'} element={<FbPostForm />} />
      <Route path={'/chatbot'} element={<ChatRobt />} />
      <Route path={'/paymentsuccess/:id'} element={<PaymentSuccess />} />
      <Route path={'/card'} element={<Card />} />
      <Route path={'*'} element={<div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}><h3> The Page You Search Doesn't Exist In Route</h3></div>} />
    </Routes>
  )
}

export default AllRoutes