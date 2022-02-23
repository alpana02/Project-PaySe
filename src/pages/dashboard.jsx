import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
} from '@chakra-ui/react'

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Button ref={btnRef} colorScheme='cyan' size='sm' paddingLeft='25px' paddingRight='25px' onClick={onDrawerOpen}>
                What is consent Sensetivity and alert
            </Button>
            <Drawer
                isOpen={isDrawerOpen}
                placement='right'
                onClose={onDrawerClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onDrawerClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Box
                display={{ md: "flex" }}
                alignItems="center"
                justifyContent="center"
                minHeight="60vh"
                gap={8}
                mb={10}
                w="full"
            >
                <Table variant='striped' colorScheme='purple'>
                    <Thead>
                        <Tr>
                            <Th>Purpose</Th>
                            <Th>FIU</Th>
                            <Th>Date</Th>
                            <Th>Sensetivity</Th>
                            <Th>Consent</Th>
                            <Th>FI Stutus</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Apna Bank</Td>
                            <Td>SAP</Td>
                            <Td>02/02/2022</Td>
                            <Td>🟡Medium</Td>
                            <Td>Pending</Td>
                            <Td><Button size='sm' colorScheme='red'>Pending</Button></Td>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />

                            </Modal>
                        </Tr>
                        <Tr>
                            <Td>Apna Bank</Td>
                            <Td>SAP</Td>
                            <Td>02/02/2022</Td>
                            <Td>🔴High</Td>
                            <Td>Pending</Td>
                            <Td><Button size='sm' colorScheme='green' onClick={onOpen}>Completed</Button></Td>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />

                            </Modal>
                        </Tr>
                        <Tr>
                            <Td>Apna Bank</Td>
                            <Td>SAP</Td>
                            <Td>02/02/2022</Td>
                            <Td>🟢Low</Td>
                            <Td>Pending</Td>
                            <Td><Button size='sm' colorScheme='green' onClick={onOpen}>Completed</Button></Td>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Loan Details</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Grid

                                            templateRows='repeat(2, 1fr)'
                                            templateColumns='repeat(5, 1fr)'
                                            gap={4}
                                        >
                                            <GridItem colSpan={2}>Transaction Amount</GridItem>
                                            <GridItem colSpan={3}>₹5000</GridItem>
                                            <GridItem colSpan={2}>FI Date Range</GridItem>
                                            <GridItem colSpan={3}>From: 20/21/2022 <br /> To: 23/21/2022</GridItem>
                                            <GridItem colSpan={2}>Data Life</GridItem>
                                            <GridItem colSpan={3}>1 Month</GridItem>
                                            <GridItem colSpan={2}>Fetch Type</GridItem>
                                            <GridItem colSpan={3}>Periodic</GridItem>
                                        </Grid>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </>

    );
};

export default Dashboard;
