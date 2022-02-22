import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#E6FFFA", "#220D3F")(props),
        lineHeight: "base",
      },
    }),
  },
  fonts,
  colors,
  components: {
    Button,
  },
});

export default customTheme;
