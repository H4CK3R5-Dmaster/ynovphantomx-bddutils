import { Box, ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
// import { ReactNode } from "react";
import Navbar from "../NavBar";
import theme from "../../utils/chakra-theme";


export default function PublicLayout({ children }) {
  return (
    <Box minH={"100vh"} bg={"#2A2B2E"}>
      <Head>
        <title>Echoes</title>
        <meta name="description" content="Echoes { FR RP }, French rôle play !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar/>
        <main>{children}</main>
      </ChakraProvider>
    </Box>
  );
}
