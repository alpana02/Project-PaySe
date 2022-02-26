import React, { useState } from "react";
import Router from "next/router";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  HStack,
  Select,
  VStack,
  Stack,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export default function loanApply() {
  const { colorMode } = useColorMode();
  const [consentObj, setconsent] = useState({
    loanamount: "30000",
    number: "7978060742",
    consentMode: "STORE",
    consentTypes: "TRANSACTIONS",
    FIDataRangefrom: "2021-01-24T00:00:00.000Z",
    FIDataRangeto: "2021-11-24T00:00:00.000Z",
    Frequencyvalue: 30,
    Frequencyunit: "MONTH",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Loan applied succesfully, bank will send a consent request to you soon. Keep an eye on your dashboard")
    console.log(JSON.stringify(consentObj));
    try {
      const response = await fetch(
        `http://localhost:5000/consent/createconsent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(consentObj),
        }
      );
      const json = await response.json();
      if ("errorCode" in json) {
        console.log(json);
        return;
      } else {
        const docRef = await addDoc(collection(db, "userLoanData"), json);
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (error) {
      console.log("error occured in submitting" + error);
    }
  };

  return (
    <div>
      <Heading as="h2" size="xl" isTruncated>
        Loan Application form
      </Heading>
      <form onSubmit={handleSubmit}>
        <Accordion allowToggle mt={10}>
          <AccordionItem
            py={5}
            bgColor={colorMode === "dark" ? "#2d1a60" : "#2C7A7B"}
          >
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h5" size="md">
                    Personal Details
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack mt={4}>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name of Applicant"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Input
                    name="number"
                    type="number"
                    placeholder="bank attached number"
                    onChange={(e) => {
                      setconsent({ ...consentObj, number: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                  <Input name="dob" type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="pan">PAN</FormLabel>
                  <Input
                    name="pan"
                    type="number"
                    placeholder="PAN Card number"
                  />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem py={5}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading as="h4" size="md" isTruncated>
                    Loan Details
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <HStack mt={4}>
                <FormControl>
                  <FormLabel htmlFor="amount">Amount</FormLabel>
                  <Input
                    name="amount"
                    type="number"
                    placeholder="Loan Amount in INR"
                    onChange={(e) => {
                      setconsent({ ...consentObj, loanamount: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tenure">Tenure</FormLabel>
                  <Input name="tenure" type="number" placeholder="in Months" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="emi">EMI</FormLabel>
                  <Input name="emi" type="number" placeholder="in INR" />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          
        </Accordion>
        <Stack direction="row" spacing={4} align="center">
          <Button
            colorScheme="cyan"
            variant="solid"
            type="submit"
            mt={4}
            mx="auto"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
