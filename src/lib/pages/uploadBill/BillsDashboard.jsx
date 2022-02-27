import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Heading,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { AuthContext } from "../../auth/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Lorem,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import ThemeToggle from "../../components/layout/ThemeToggle";

const StyledBox = styled(Box)`
  width: 80%;
  margin: 5% auto;
  border-radius: 8px;
`;

const BillDetails = ({
  age,
  mstatus,
  deps,
  wexp,
  wstats,
  eduqual,
  aos,
  ainc,
  targ,
}) => {
  const { colorMode } = useColorMode();
  return (
    <StyledBox>
      <Heading>Bill</Heading>
      <Text>{`Age: ${age}`}</Text>
      <Text>{`Marital Status: ${mstatus}`}</Text>
      <Text>{`Dependents: ${deps}`}</Text>
      <Text>{`Work Experience: ${wexp}`}</Text>
      <Text>{`Work Status: ${wstats}`}</Text>
      <Text>{`Education Qualification: ${eduqual}`}</Text>
      <Text>{`Area of Study: ${aos}`}</Text>
      <Text>{`Annual Income: ${ainc}`}</Text>
      <Text>{`Target: ${targ}`}</Text>
    </StyledBox>
  );
};

function BillsDashboard() {
  const value = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [details, setDetails] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "unbankedLoan"));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => data.push(doc.data()));
      console.log(data);
      setDetails((current) => [...current, ...data]);
      return;
    };

    setUserId(value.userid);
    fetchData();
  }, []);

  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="md">
          <Link href="/">PaySe</Link>
        </Heading>
        <p>
          <Link href="/dashboard">&nbsp; &nbsp; &nbsp; Dashboard</Link>
        </p>
        <div>
          <Link href="/listofbank">&nbsp; &nbsp; &nbsp; List of Bank</Link>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div>
          <Link href="/bills"> Bills</Link>
        </div>
        <Box marginLeft="auto">
          <Button>Logout</Button>&nbsp; &nbsp;
          <ThemeToggle />
        </Box>
      </Flex>
      <br />
      <Box>
        <Heading mb={7}>Your Bills</Heading>
        <Accordion allowToggle>
          <AccordionItem py={3} bgColor={"#2d1a60"}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Bank Name:</b>&nbsp; Mera Bank
                </Box>
                <Button onClick={onOpen}>Credit Score</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalBody mt={9}>Your credit score is 1</ModalBody>
                    <ModalBody>
                      🎉 Congratulations!! you are eligible to apply for loan
                    </ModalBody>
                    <ModalCloseButton />
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {details.map(
                (item, idx) =>
                  item.uid === userId && (
                    <BillDetails
                      key={idx}
                      age={item.age}
                      ainc={item.ainc}
                      aos={item.aos}
                      deps={item.deps}
                      eduqual={item.eduqual}
                      mstatus={item.mstatus}
                      targ={item.targ}
                      wexp={item.wexp}
                      wstats={item.wstats}
                    />
                  )
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={3} bgColor={"#2d1a60"}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>Bank Name:</b>&nbsp; SBI Bank
                </Box>
                <Button onClick={onOpen}>Credit Score</Button>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {details.map(
                (item, idx) =>
                  item.uid === userId && (
                    <BillDetails
                      key={idx}
                      age={item.age}
                      ainc={item.ainc}
                      aos={item.aos}
                      deps={item.deps}
                      eduqual={item.eduqual}
                      mstatus={item.mstatus}
                      targ={item.targ}
                      wexp={item.wexp}
                      wstats={item.wstats}
                    />
                  )
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default BillsDashboard;
