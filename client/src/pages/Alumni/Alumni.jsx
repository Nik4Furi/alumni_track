import React from 'react'
import ProfileCard from './ProfileCard'
import { SimpleGrid } from '@chakra-ui/react'

const Alumni = () => {

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm:1, md: 2, lg:2, xl:3 }} spacing={{ base: 5, md: 7, lg: 8 }}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </SimpleGrid>
    </>
  )
}

export default Alumni