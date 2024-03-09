import React from 'react'
import MiniStatistics from '../statistics/MiniStatistics'
import { PiStudentFill } from "react-icons/pi";
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import StudentTable from '../tables/StudentTable';


const AlumniList = ({ verifiedAlumniList }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box onClick={onOpen} cursor={'pointer'}>
                <MiniStatistics
                    title={"Total Alumni"}
                    amount={"53,000"}
                    icon={<PiStudentFill h={"24px"} w={"24px"} color={'white'} />}
                />
            </Box>

            <Modal size={'5xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Alumni List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody overflowX={'auto'} >
                        <StudentTable
                            title={'All Verified Students'}
                            captions={['User', 'College_Id', 'Batch', 'Course', 'Phone']}
                            data={verifiedAlumniList} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AlumniList