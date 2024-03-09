import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";


function UnverifiedCollege(props) {
    const bgColor = useColorModeValue("#F8F9FA", "gray.800");
    const nameColor = useColorModeValue("gray.500", "white");
    const { collegeId, name, institute_no, type, website, address, email, phone } = props;

    // Denied Verification
    const handleNotVerified = (collegeId) => { alert('Verification denied for collegeId: ' + collegeId) }

    // Verification True
    const handleVerified = (collegeId) => { alert('Verification done for collegeId: ' + collegeId) }

    return (
        <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
            <Flex justify="space-between" w="100%">
                <Flex direction="column" maxWidth="100%">
                    <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
                        {name}
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Institute No.:{" "}
                        <Text as="span" color="gray.500">
                            {institute_no}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Type:{" "}
                        <Text as="span" color="gray.500">
                            {type}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Email Address:{" "}
                        <Text as="span" color="gray.500">
                            {email}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Phone Number:{" "}
                        <Text as="span" color="gray.500">
                            {phone}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Website:{" "}
                        <Text as="span" color="gray.500">
                            {website}
                        </Text>
                    </Text>
                    <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                        Address:{" "}
                        <Text as="span" color="gray.500">
                            {address}
                        </Text>
                    </Text>
                </Flex>
                <Flex
                    direction={{ base: "column", sm: "row", md: "row" }}
                    align="flex-start"
                // p={{ md: "24px" }}
                >
                    <Button p="0px" bg="red.400" mr={'10px'} mb={'10px'} onClick={() => { handleNotVerified(collegeId) }}>
                        <RxCross1 />
                    </Button>
                    <Button p="0px" bg="green.400" onClick={() => { handleVerified(collegeId) }}>
                        <TiTick />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default UnverifiedCollege;