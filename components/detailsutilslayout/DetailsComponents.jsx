import {
  Text,
  Box,
  Heading,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function DetailsComponents({ dataofutils }) {
  return (
    <Box mt={[20, 40]} mb={[20, 40]} id="premier-titre">
      <Heading as="h2" size="2xl" textAlign="center" mb={8} color={"#fd0000"}>
        DESCRIPTION
      </Heading>
      <Box mb={[20, 40]} p={10}>
        <Text color={"#fd0000"} mb={10} fontSize={"xl"} textAlign={"center"}>
          {dataofutils?.description.toUpperCase()}
        </Text>
        <Divider orientation="horizontal" />
      </Box>
      <Heading as="h2" size="2xl" textAlign="center" mb={8} color={"#fd0000"}>
        TABLEAU INFORMATIONS
      </Heading>
      <Box mb={[20, 20]} p={10}>
        <TableContainer color={"#fd0000"}>
          <Table variant="simple">
            <Thead color={"#fd0000"} textAlign={"center"}>
              <Tr>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"right"}>
                  LIEN DOC PARAMETRES
                </Th>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"center"}>
                  <NextLink href={dataofutils?.parametreslink ? dataofutils.parametreslink : ""}>
                    {dataofutils?.parametreslink.toUpperCase()}
                  </NextLink>
                </Th>
              </Tr>

              <Tr>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"right"}>
                  LIEN SITE
                </Th>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"center"}>
                  <NextLink href={dataofutils?.linkdl ? dataofutils.linkdl : ""}>
                    {dataofutils?.linkdl.toUpperCase()}
                  </NextLink>
                </Th>
              </Tr>
              <Tr>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"right"}>
                  VIDEO EXEMPLE
                </Th>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"center"}>
                  <NextLink href={dataofutils?.video ? dataofutils.video : ""}>
                    WATCH
                  </NextLink>
                </Th>
              </Tr>
              <Tr>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"right"}>
                  EXEMPLE
                </Th>
                <Th color={"#fd0000"} fontSize={"xl"} textAlign={"center"}>
                  
                    {dataofutils?.exemple.toUpperCase()}
                  
                </Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
