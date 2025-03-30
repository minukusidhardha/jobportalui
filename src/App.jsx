import { useState } from 'react'
import './App.css'
import Login from './components/login'
import { Route,  Routes } from 'react-router'
import AdminDashboard from './components/admin/admindashboard'
import UserDashboard from './components/user/userdashboard'
import UserList from './components/admin/userlist'
import Assignjob from './components/admin/assingjob'
import UserOnboard from './components/admin/useroboard'
import GetallJobs from './components/admin/getalljobs'
import Addjobs from './components/admin/Addjobs'
import JobAssigned from './components/user/jobassigned'
import Forgotpassword from './components/Forgotpassword'
import { Bounce, ToastContainer } from 'react-toastify'
import Userprofile from './components/user/userprofile'
import FrontPage from './components/frontpage'
function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <Routes>
    <Route path='/' element={<FrontPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      <Route path='/user/dashboard' element={<UserDashboard/>}/>
      <Route path='/admin/User-onboard' element={<UserOnboard/>}/>
      <Route path='/admin/Userlist' element={<UserList/>}/>
      <Route path='/admin/assingjob' element={<Assignjob/>}/>
      <Route path='/admin/addjobs' element={<Addjobs/>}/>
      <Route path='/admin/all-jobs' element={<GetallJobs/>}/>
      <Route path='/user/assigned-job' element={<JobAssigned/>}/>
      <Route path='/forgot' element={<Forgotpassword/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
    </Routes>
    </>
  )
}

export default App
