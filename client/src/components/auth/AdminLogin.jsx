'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
    InputGroup,
    InputRightElement,
    useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../main/Footer'

export default function AdminLogin() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }) };

    const toast = useToast();

    const handleAdminLogin = async() => {

        if (!form.email || !form.password) {
            toast({
                title: 'All fields are required.',
                position: 'top',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return;
        }


        console.log(form,process.env.REACT_APP_URL);

        const res = await fetch(`${process.env.REACT_APP_URL}/api/v1/user/login`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(form)
        })

        const data  = await res.json();

        if(data.success == false){
            toast({
                title: `${data.msg}`,
                position: 'top',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            return;
        }

        // console.log(data);

        toast({
            title: `${data.msg}`,
            position: 'top',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        navigate('/dashboard/admin')
    }

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Admin Login</Heading>
                        <HStack>
                            <Text color={'pink.400'}>🤐🤐</Text>
                        </HStack>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name='email' id='email' value={form.email} onChange={handleChange} required />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} name='password' id='password' value={form.password} onChange={handleChange} required />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    bg={'pink.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'pink.500',
                                    }}
                                    type='submit'
                                    onClick={handleAdminLogin}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}