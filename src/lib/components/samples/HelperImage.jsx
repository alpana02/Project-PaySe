import { Box, Tooltip } from "@chakra-ui/react";
import Image from "next/image";

const HelperImage = ({ label, src }) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Box marginX={2}>
        <Image src={src} alt={label} title={label} height={33} width={33} />
      </Box>
    </Tooltip>
  );
};

HelperImage.defaultProps = {
  label: "",
};

export default HelperImage;
