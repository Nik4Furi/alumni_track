import React from 'react'
import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import StudentList from '../../components/college/StudentList'
import AlumniList from '../../components/college/AlumniList'
import JobList from '../../components/college/JobList'
import UnverifiedUserList from '../../components/dasboard/UnverifiedUserList'

// Data
import verifiedStudentList from '../../data/verifiedStudentList'
import verifiedAlumniList from '../../data/verifiedAlumniList';

const DashboardLayout = () => {

    return (
        <>
            <Flex flexDirection='column' >
                <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing='24px'>
                    <StudentList verifiedStudentList={verifiedStudentList} />
                    <AlumniList verifiedAlumniList={verifiedAlumniList} />
                    <JobList />
                </SimpleGrid>
                <Flex direction='column'>
                    <Box >
                        <Grid templateColumns={{ sm: "1fr", lg: "1.4fr 1.4fr" }} p={2} >
                            <UnverifiedUserList title={"Unverified User"} data={verifiedStudentList} />
                            <UnverifiedUserList title={"Unverified Alumni"} data={verifiedAlumniList} />
                        </Grid>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default DashboardLayout