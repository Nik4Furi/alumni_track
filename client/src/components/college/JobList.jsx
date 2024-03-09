import React from 'react'
import MiniStatistics from '../statistics/MiniStatistics'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { MdWork } from 'react-icons/md';

const JobList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box onClick={onOpen} cursor={'pointer'}>
                <MiniStatistics
                    title={"Total Jobs"}
                    amount={"3,000"}
                    icon={<MdWork h={"24px"} w={"24px"} color={'white'} />}
                />
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Job List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        hello
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default JobList