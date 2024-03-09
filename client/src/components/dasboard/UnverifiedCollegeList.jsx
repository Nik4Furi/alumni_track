// Chakra imports
import { Flex, Text, useColorModeValue, Card, CardBody, CardHeader, Box } from "@chakra-ui/react";
// Custom components
import UnverifiedCollege from "./UnverifiedCollege";
import React from "react";

const UnverifiedCollegeList = ({ title, data }) => {

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
                                    <UnverifiedCollege
                                        collegeId={row.id}
                                        name={row.name}
                                        type={row.type}
                                        institute_no={row.institute_no}
                                        email={row.email}
                                        phone={row.phone}
                                        website={row.website}
                                        address={row.address}
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

export default UnverifiedCollegeList;