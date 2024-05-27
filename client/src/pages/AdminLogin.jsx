import { } from 'react'
import {Box} from "@mui/material"
import LoginForm from '../Components/AdminLogin/LoginForm'
import LoginHero from '../Components/AdminLogin/LoginHero'

const AdminLogin = () => {
  return (
    <Box className="bg-[#B2A59B]">
      <LoginHero />
      <LoginForm />
    </Box>
  )
}

export default AdminLogin