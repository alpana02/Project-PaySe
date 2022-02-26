import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { AuthContext } from "../../auth/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

const StyledBox = styled(Box)`
  width: 80%;
  margin: 5% auto;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const BillDetails = ({
  index,
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
    <StyledBox bgColor={colorMode === "dark" ? "#553c9a" : "#D6BCFA"}>
      <Heading>{`Bill ${index + 1}`}</Heading>
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
    <Box>
      <Heading>Your Bills</Heading>
      {details.map((item, idx) => (
        <BillDetails
          key={idx}
          index={idx}
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
      ))}
    </Box>
  );
}

export default BillsDashboard;
