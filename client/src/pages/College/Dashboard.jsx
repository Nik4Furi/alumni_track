import React from 'react'
import Navbar2 from '../../components/main/Navbar2'
import Footer from '../../components/main/Footer'
import { Box } from '@chakra-ui/react'
import DashboardLayout from './DashboardLayout'

const Dashboard = () => {
  return (
    <>
      <Navbar2 />
      <Box pt={4} p={2} w={'full'} bg={'gray.100'}>
        <DashboardLayout />
      </Box>
      <Footer />
    </>
  )
}

export default Dashboard