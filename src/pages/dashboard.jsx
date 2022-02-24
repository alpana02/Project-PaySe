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
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import { db } from "../config/firebase";
import { doc, getDocs, collection, updateDoc } from "firebase/firestore";

const Dashboard = () => {
  const [loanDoc, setloanDoc] = useState([]);
  const [status, setstatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const btnRef = React.useRef();
  const fetchLoan = async () => {
    const querySnapshot = await getDocs(collection(db, "userLoanData"));
    console.log(querySnapshot.docs);

    querySnapshot.forEach(async (document) => {
      // doc.data() is never undefined for query doc snapshots
      const response = await fetch(
        `http://localhost:5000/consent/getconsent/${document.data().id}`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      if (document.data().status !== json.status) {
        // console.log(document.id);
        setstatus(json.status);
        const frankDocRef = doc(db, "userLoanData", document.id);
        // To update age and favorite color:
        await updateDoc(frankDocRef, {
          status: json.status,
        });
      }
    });
    setloanDoc(querySnapshot.docs);
  };
  useEffect(() => {
    fetchLoan();
  }, [status]);

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="cyan"
        size="sm"
        paddingLeft="25px"
        paddingRight="25px"
        onClick={onDrawerOpen}
      >
        What is consent Sensetivity and alert
      </Button>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onDrawerClose}>
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
        <Table variant="striped" colorScheme="purple">
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
          {loanDoc &&
            loanDoc.map((item) => {
              return (
                <>
                  <Tbody>
                    <Tr>
                      <Td>Apna Bank</Td>
                      <Td>SAP</Td>
                      <Td>02/02/2022</Td>
                      <Td>🟡Medium</Td>
                      <Td>{item.data().status}</Td>
                      <Td>
                        <Link href={item.data().url} isExternal>
                          <Button size="sm" colorScheme="red">
                            {item.data().status}
                          </Button>
                        </Link>
                      </Td>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                      </Modal>
                    </Tr>
                  </Tbody>
                </>
              );
            })}
        </Table>
      </Box>
    </>
  );
};

export default Dashboard;
