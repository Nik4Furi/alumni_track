import React from 'react'
import JobCard from './components/JobCard'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

const JobsLayout = ({ jobDetail }) => {

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 7, lg: 8 }}>
        {
          jobDetail?.map((detail, index) => {
            return <GridItem cursor={'pointer'}>
              <JobCard detail={detail} key={index} />
            </GridItem>
          })
        }
      </SimpleGrid>
    </>
  )
}

export default JobsLayout