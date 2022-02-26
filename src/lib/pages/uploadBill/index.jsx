import { useState } from "react";
import Router from "next/router";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  HStack,
  Stack,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

function UploadBillForm() {
  const { colorMode } = useColorMode();
  const [data, setData] = useState({
    name: "",
    loanamount: "30000",
    number: "7978060742",
    age: 0,
    mstatus: 0,
    deps: 0,
    wexp: 0,
    wstats: 0,
    eduqual: 0,
    aos: 0,
    ainc: 0,
    targ: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const docRef = await addDoc(collection(db, "unbankedLoan"), data);
    console.log("Document written with ID: ", docRef.id);
    Router.push("/dashboard");
  };
  return (
    <Box>
      <Heading mb={10}>Enter your bill details below:</Heading>
      <Box margin="0 auto">
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
                      onChange={(e) => {
                        setData({ ...data, number: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="number">Number</FormLabel>
                    <Input
                      name="number"
                      type="number"
                      placeholder="bank attached number"
                      onChange={(e) => {
                        setData({ ...data, number: e.target.value });
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
                        setData({
                          ...data,
                          loanamount: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="tenure">Tenure</FormLabel>
                    <Input
                      name="tenure"
                      type="number"
                      placeholder="in Months"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="emi">EMI</FormLabel>
                    <Input name="emi" type="number" placeholder="in INR" />
                  </FormControl>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              py={5}
              bgColor={colorMode === "dark" ? "#2d1a60" : "#2C7A7B"}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h5" size="md" isTruncated>
                      Upload Bills
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={5} mb={7}>
                  <div>
                    <FormLabel htmlFor="age">Your Age</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, age: parseInt(e.target.value, 10) })
                      }
                      id="age"
                      type="number"
                    />
                    <FormHelperText>Enter your age</FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="marital_status">
                      Marital Status
                    </FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({
                          ...data,
                          mstatus: parseInt(e.target.value, 10),
                        })
                      }
                      id="marital_status"
                      type="number"
                    />
                    <FormHelperText>Enter response in 0 or 1</FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="dependents">Dependents</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, deps: parseInt(e.target.value, 10) })
                      }
                      id="dependents"
                      type="number"
                    />
                    <FormHelperText>
                      Enter the number of dependents
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="work_exp">Work Experience</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, wexp: parseInt(e.target.value, 10) })
                      }
                      id="work_exp"
                      type="number"
                    />
                    <FormHelperText>Enter your work experience</FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="work_status">Work Status</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({
                          ...data,
                          wstats: parseInt(e.target.value, 10),
                        })
                      }
                      id="work_status"
                      type="number"
                    />
                    <FormHelperText>Enter your work status</FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="education_quali">
                      Education Qualification
                    </FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({
                          ...data,
                          eduqual: parseInt(e.target.value, 10),
                        })
                      }
                      id="education_quali"
                      type="number"
                    />
                    <FormHelperText>
                      Enter your education qualification
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="area_study">Area of Study</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, aos: parseInt(e.target.value, 10) })
                      }
                      id="area_study"
                      type="number"
                    />
                    <FormHelperText>Enter your area of study</FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="annual_income">Annual Income</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, ainc: parseInt(e.target.value, 10) })
                      }
                      id="annual_income"
                      type="number"
                    />
                    <FormHelperText>
                      Enter your income in thousands
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="target">Target</FormLabel>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, targ: parseInt(e.target.value, 10) })
                      }
                      id="target"
                      type="number"
                    />
                    <FormHelperText>Enter your target</FormHelperText>
                  </div>
                </SimpleGrid>
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
        {/* <FormControl>
          <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={5} mb={7}>
            <div>
              <FormLabel htmlFor="age">Your Age</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, age: parseInt(e.target.value, 10) })
                }
                id="age"
                type="number"
              />
              <FormHelperText>Enter your age</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="marital_status">Marital Status</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, mstatus: parseInt(e.target.value, 10) })
                }
                id="marital_status"
                type="number"
              />
              <FormHelperText>Enter response in 0 or 1</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="dependents">Dependents</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, deps: parseInt(e.target.value, 10) })
                }
                id="dependents"
                type="number"
              />
              <FormHelperText>Enter the number of dependents</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="work_exp">Work Experience</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, wexp: parseInt(e.target.value, 10) })
                }
                id="work_exp"
                type="number"
              />
              <FormHelperText>Enter your work experience</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="work_status">Work Status</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, wstats: parseInt(e.target.value, 10) })
                }
                id="work_status"
                type="number"
              />
              <FormHelperText>Enter your work status</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="education_quali">
                Education Qualification
              </FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, eduqual: parseInt(e.target.value, 10) })
                }
                id="education_quali"
                type="number"
              />
              <FormHelperText>
                Enter your education qualification
              </FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="area_study">Area of Study</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, aos: parseInt(e.target.value, 10) })
                }
                id="area_study"
                type="number"
              />
              <FormHelperText>Enter your area of study</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="annual_income">Annual Income</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, ainc: parseInt(e.target.value, 10) })
                }
                id="annual_income"
                type="number"
              />
              <FormHelperText>Enter your income in thousands</FormHelperText>
            </div>
            <div>
              <FormLabel htmlFor="target">Target</FormLabel>
              <Input
                onChange={(e) =>
                  setData({ ...data, targ: parseInt(e.target.value, 10) })
                }
                id="target"
                type="number"
              />
              <FormHelperText>Enter your target</FormHelperText>
            </div>
          </SimpleGrid>
          <Button onClick={handleSubmit} mt={7} type="submit">
            Upload Bill
          </Button>
        </FormControl> */}
      </Box>
    </Box>
  );
}

export default UploadBillForm;
