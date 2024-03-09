// Chakra imports
import { Flex, Text, useColorModeValue, Card, CardBody, CardHeader, Box } from "@chakra-ui/react";
// Custom components
import ListRow from "./ListRow";
import React from "react";

const UnverifiedUserList = ({ title, data }) => {

    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box mt={'50px'} w={['94vw', 'full']} p={2}>
            <Text color={textColor} fontSize='lg' fontWeight='bold' textAlign={'center'} mb={'10px'}>
                {title}
            </Text>
            <Card my={{ lg: "24px" }} me={{ lg: "24px" }} h={'500px'} overflowY={'auto'} >
                <Flex direction='column'>
                    <CardBody>
                        <Flex direction='column' >
                            {data.map((row) => {
                                return (
                                    <ListRow
                                        userId={row.userId}
                                        name={row.name}
                                        collegeId={row.collegeId}
                                        email={row.email}
                                        phone={row.phone}
                                        batch={row.batch}
                                        stream={row.course}
                                    />
                                );
                            })}
                        </Flex>
                    </CardBody>
                </Flex>
            </Card>
        </Box>
    );
};

export default UnverifiedUserList;