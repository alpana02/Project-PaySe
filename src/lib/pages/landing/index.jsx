import React from "react";
import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { FaAddressCard, FaBacon } from "react-icons/fa";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NextLink from "next/link";

const landingPage = () => {
  return (
    <div className="container">
      <Stack spacing={10}>
        <Heading as="h2" size="xl" isTruncated>
          Choose the Bank to apply loan
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <NextLink href='/loanapply' passHref>
            <Link>
              <GridItem w="100%">
                <Button colorScheme="purple" leftIcon={<FaAddressCard />}>
                  MeraBankFiu
                </Button>
              </GridItem>
            </Link>
          </NextLink>

          <GridItem w="100%">
            <Button colorScheme="cyan" leftIcon={<FaBacon />}>
              SBI
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="blue" leftIcon={<FaBacon />}>
              Axis Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="pink" leftIcon={<FaAddressCard />}>
              HDFC Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="teal" leftIcon={<FaBacon />}>
              Canara Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="purple" leftIcon={<FaAddressCard />}>
              Bank of Baroda
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="blue" leftIcon={<FaBacon />}>
              Apna Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="pink" leftIcon={<FaBacon />}>
              Setu Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="facebook" leftIcon={<FaAddressCard />}>
              Maharashtra Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="pink" leftIcon={<FaBacon />}>
              JanMan Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="cyan" leftIcon={<FaAddressCard />}>
              Random Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="blue" leftIcon={<FaBacon />}>
              SBI
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="teal" leftIcon={<FaBacon />}>
              HDFC
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="purple" leftIcon={<FaAddressCard />}>
              Canara Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="cyan" leftIcon={<FaBacon />}>
              XYZ Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="facebook" leftIcon={<FaBacon />}>
              Axis Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="blue" leftIcon={<FaAddressCard />}>
              ABCD Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="pink" leftIcon={<FaBacon />}>
              XYZ Bank
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="cyan" leftIcon={<FaBacon />}>
              MeraBankFiu
            </Button>
          </GridItem>
          <GridItem w="100%">
            <Button colorScheme="purple" leftIcon={<FaBacon />}>
              Here Bank
            </Button>
          </GridItem>
        </Grid>
      </Stack>
    </div>
  );
};
export default landingPage;
