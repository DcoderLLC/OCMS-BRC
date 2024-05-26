import { } from 'react'
import { Box } from '@mui/material';
import HeroComplaint from '../Components/Complaint/HeroComplaint';
import ComplaintForm from '../Components/Complaint/ComplaintForm';

const Complaint = () => {
  return (
    <Box className="bg-[#B2A59B]">
      <HeroComplaint />
      <ComplaintForm />
    </Box>
  )
}

export default Complaint