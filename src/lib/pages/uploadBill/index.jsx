import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

function UploadBillForm() {
  const [data, setData] = useState({
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Box>
      <Heading mb={10}>Enter your bill details below:</Heading>
      <Box margin="0 auto">
        <FormControl>
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
        </FormControl>
      </Box>
    </Box>
  );
}

export default UploadBillForm;
