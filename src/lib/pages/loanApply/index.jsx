import React from "react";
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
  useColorMode
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function loanApply() {
  const {colorMode}= useColorMode()
  return (
    <div>
      <Heading as="h2" size="xl"  isTruncated>
        Loan Application form
      </Heading>
      <form>
        <Accordion allowToggle mt={10}>
          <AccordionItem py={5} bgColor={colorMode==="dark"?"#2d1a60":"#2C7A7B"} >
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
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
                  <Input name="name" type="text" placeholder="Name of Applicant" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Input
                    name="number"
                    type="number"
                    placeholder="bank attached number"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                  <Input name="dob" type="date" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="pan">PAN</FormLabel>
                  <Input name="pan" type="number" placeholder="PAN Card number" />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem py={5}>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
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
                  <Input name="amount" type="number" placeholder="Loan Amount in INR" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tenure">Tenure</FormLabel>
                  <Input name="tenure" type="number" placeholder="in Months" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="emi">EMI</FormLabel>
                  <Input name="emi" type="number" placeholder="in INR" />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={5} bgColor={colorMode==="dark"?"#2d1a60":"#2C7A7B"}>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading as="h5" size="md" isTruncated>
                    Consent Details
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack mt={4}>
                <Text fontSize="md">
                  Frequency Information for periodic information access
                </Text>
                <HStack mt={3}>
                  <FormControl>
                    <FormLabel htmlFor="from">From</FormLabel>
                    <Input name="from" type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="funit">Unit</FormLabel>
                    <Select name="funit" placeholder="Select option">
                      <option value="HOURLY">HOURLY</option>
                      <option value="DAILY">DAILY</option>
                      <option value="MONTHLY">MONTHLY</option>
                      <option value="YEARLY">YEARLY</option>
                    </Select>
                  </FormControl>
                </HStack>
              </Stack>
              <Stack mt={8}>
                <Text fontSize="md">
                  FI Data Range: Type & date-time range for querying financial
                  information
                </Text>
                <HStack mt={3}>
                  <FormControl>
                    <FormLabel htmlFor="fifrom">From</FormLabel>
                    <Input name="fifrom" type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="fito">To</FormLabel>
                    <Input name="fito" type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="fiType">FI Type</FormLabel>
                    <Select name="fiType" placeholder="Select mode">
                      <option value="DEPOSIT">DEPOSIT</option>
                      <option value="MUTUAL_FUNDS">MUTUAL_FUNDS</option>
                      <option value="INSURANCE_POLICIES">INSURANCE_POLICIES</option>
                      <option value="EQUITIES">EQUITIES</option>
                    </Select>
                  </FormControl>
                </HStack>
              </Stack>
              <Stack mt={8}>
                <Text fontSize="md">
                  Consent: Mode & Time period for consent validity for data fetching
                </Text>
                <HStack mt={3}>
                  <FormControl>
                    <FormLabel htmlFor="cstart">Consent Start</FormLabel>
                    <Input name="cstart" type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="cend">Consent Expiry</FormLabel>
                    <Input name="cend" type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="cmode">Consent Mode</FormLabel>
                    <Select name="cmode" placeholder="Select mode">
                      <option value="VIEW">VIEW</option>
                      <option value="STORE">STORE</option>
                      <option value="QUERY">QUERY</option>
                      <option value="STREAM">STREAM</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="cmode">Consent Type</FormLabel>
                    <Select name="cmode" placeholder="Select type">
                      <option value="PROFILE">PROFILE</option>
                      <option value="SUMMARY">SUMMARY</option>
                      <option value="TRANSACTIONS">TRANSACTIONS</option>
                    </Select>
                  </FormControl>
                </HStack>
              </Stack>
              <Stack mt={8}>
                <Text fontSize="md">Account Data: Type, Purpose and time period</Text>
                <HStack mt={3}>
                  <FormControl>
                    <FormLabel htmlFor="fetchtype">Data Fetch Type</FormLabel>
                    <Select name="fetchtype" placeholder="Select Fetch Type">
                      <option value="ONETIME">ONETIME</option>
                      <option value="PERIODIC">PERIODIC</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="purpose">Purpose of data request</FormLabel>
                    <Select name="purpose" placeholder="Select purpose">
                      <option value="101">Wealth management service</option>
                      <option value="102">Budget</option>
                      <option value="103">Aggregated statement</option>
                      <option value="104">
                        Explicit consent to monitor the accounts
                      </option>
                      <option value="105">
                        Explicit one-time consent for accessing data from the accounts
                      </option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="datalife">
                      Time period to store data
                    </FormLabel>
                    <Input name="datalife" type="number" placeholder="Store data for" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="datalifeunit">Time period Unit</FormLabel>
                    <Select name="datalifeunit" placeholder="Select Data Life">
                      <option value="MONTH">MONTH</option>
                      <option value="PERIODIC">YEAR</option>
                      <option value="DAY">DAY</option>
                      <option value="INF">INF</option>
                    </Select>
                  </FormControl>
                </HStack>
              </Stack>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Stack direction='row' spacing={4} align='center'>
          <Button
            colorScheme="cyan"
            variant="solid"
            type="submit"
            mt={4}
            mx='auto'
          >
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
