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
  Heading,
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
import { db } from "../../../config/firebase";
import { doc, getDocs, collection, updateDoc } from "firebase/firestore";

const bankdashboard = () => {
  const [loanDoc, setloanDoc] = useState([]);
  const [status, setstatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const btnRef = React.useRef();

//handlefistatus button
const handleFIStatus = async (item) => {
    
    console.log(JSON.stringify(item));
    try {
      const response = await fetch(
        `http://localhost:5000/consent/createdatasession`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      const json = await response.json();
    //   if ("errorCode" in json) {
    //     console.log(json);
    //     return;
    //   } else {
    //     const docRef = await addDoc(collection(db, "userLoanData"), json);
    //     console.log("Document written with ID: ", docRef.id);
    //     Router.push("/dashboard");
    //   }
    } catch (error) {
      console.log("error occured in submitting" + error);
    }
  };

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
        const frankDocRef = doc(db, "userLoanData", document.id);
        // To update age and favorite color:
        await updateDoc(frankDocRef, {
          status: json.status,
        });
        setstatus(json.status);
      }
    });
    setloanDoc(querySnapshot.docs);
  };
  useEffect(() => {
    fetchLoan();
  }, [status]);

  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        gap={8}
        mb={10}
        w="full"
      >
        <Heading as="h3" size="lg" mb={5} mt={20}>
          Banked user requests
        </Heading>
        <Table variant="striped" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>Customer Id</Th>
              <Th>Amount</Th>
              <Th>Consent status</Th>
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
                      <Td>{item.data().Detail.Customer.id.substring(0, 10)}</Td>
                      <Td>{item.data().Detail.DataFilter[0].value} INR</Td>
                      <Td>{item.data().status}</Td>
                      <Td>
                        <Button
                          size="sm"
                          colorScheme="red"
                          isDisabled={
                            item.data().status === "PENDING" ? false : true
                          }
                          onClick={() => {
                            alert("consent request sent succesfully");
                          }}
                        >
                          Get Consent
                        </Button>
                      </Td>
                      <Td>
                        <Link href={item.data().url} isExternal>
                          <Button
                            size="sm"
                            colorScheme="red"
                            isDisabled={
                              item.data().status === "ACTIVE" ? false : true
                            }
                            onClick={()=>{handleFIStatus(item.data())}}
                          >
                            Get Details
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
        <Heading as="h3" size="lg" mt={20} mb={5}>
          Unbanked user requests
        </Heading>
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

export default bankdashboard;
