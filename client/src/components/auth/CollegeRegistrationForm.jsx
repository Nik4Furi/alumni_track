'use client'

import { useState } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Stack,
    HStack,
    Text,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Form1 = () => {

    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Basic Detail
            </Heading>
            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="name" fontWeight={'normal'}>
                    College Name
                </FormLabel>
                <Input id="name" type="text" />
            </FormControl>

            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="institite" fontWeight={'normal'}>
                    Institute Type
                </FormLabel>
                <Select
                    id="institite"
                    name="institite"
                    autoComplete="institite"
                    placeholder="Select type"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option>University</option>
                    <option>College</option>
                </Select>
            </FormControl >

            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="logo" fontWeight={'normal'}>
                    College logo
                </FormLabel>
                <Input id="logo" type="file" />
            </FormControl>

            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="inst_code" fontWeight={'normal'}>
                    Institute Code
                </FormLabel>
                <Input id="inst_code" type="text" />
            </FormControl>

        </>
    )
}

const Form2 = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Contact Detail
            </Heading>

            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email
                </FormLabel>
                <Input id="email" type="email" />
            </FormControl >

            <FormControl mt="2%" isRequired>
                <FormLabel htmlFor="number" fontWeight={'normal'}>
                    Phone
                </FormLabel>
                <Input id="number" type="number" minLength={10} maxLength={10} />
            </FormControl>

            <FormControl mt={'2%'} colSpan={6} isRequired>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Address
                </FormLabel>
                <Input id="street_address" type="text" />
            </FormControl>

            <FormControl colSpan={6} mt={'2%'}>
                <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Website
                </FormLabel>
                <InputGroup size="sm">
                    <InputLeftAddon
                        bg="gray.50"
                        _dark={{
                            bg: 'gray.800',
                        }}
                        color="gray.500"
                        rounded="md">
                        http://
                    </InputLeftAddon>
                    <Input
                        type="tel"
                        placeholder="www.example.com"
                        focusBorderColor="brand.400"
                        rounded="md"
                    />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        id='password'
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    )
}

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Course Details
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl id="about" mt={1} isRequired>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Courses
                    </FormLabel>
                    <Textarea
                        placeholder="BTech, BCA, MCA,...."
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                    />
                    <FormHelperText>
                        Seprate courses with , coma.
                    </FormHelperText>
                </FormControl>

            </SimpleGrid>
        </>
    )
}

export default function CollegeRegistrationForm() {
    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)

    const handleRegistration = () => {
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            position: 'top',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                w={['300px', '400px', '600px', '700px']}
                p={6}
                m="10px auto"
                as="form">
                <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated colorScheme='pink'></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1)
                                    setProgress(progress - 33.33)
                                }}
                                isDisabled={step === 1}
                                colorScheme="pink"
                                variant="solid"
                                w="7rem"
                                mr="5%">
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                onClick={() => {
                                    if (step !== 3) {
                                        setStep(step + 1)
                                        if (step === 3) {
                                            setProgress(100)
                                        } else {
                                            setProgress(progress + 33.33)
                                        }
                                    }
                                    else {
                                        handleRegistration()
                                    }
                                }}
                                colorScheme="pink"
                                variant="outline">
                                {step === 3 ? "Submit" : "Next"}
                            </Button>
                        </Flex>
                    </Flex>
                </ButtonGroup>
                <Stack spacing={10} mt={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Link to={'/college-login'}>
                            <HStack>
                                <Text fontSize={'md'} color={'gray.600'}>
                                    Already a member?
                                </Text>
                                <Text fontSize={'md'} color={'pink.400'}>Login</Text>
                            </HStack>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}