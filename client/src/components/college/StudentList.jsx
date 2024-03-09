import React from 'react'
import MiniStatistics from '../statistics/MiniStatistics'
import { FaUser } from 'react-icons/fa';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import StudentTable from '../tables/StudentTable'


const StudentList = ({ verifiedStudentList }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box onClick={onOpen} cursor={'pointer'}>
                <MiniStatistics
                    title={"Total Students"}
                    amount={"53,000"}
                    icon={<FaUser h={"24px"} w={"24px"} color={'white'} />}
                />
            </Box>
            <Modal size={'5xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)' />
                <ModalContent>
                    <ModalHeader>Student List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody overflowX={'auto'} >
                        <StudentTable
                            title={'All Verified Students'}
                            captions={['User', 'College_Id', 'Batch', 'Course', 'Phone']}
                            data={verifiedStudentList} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default StudentList