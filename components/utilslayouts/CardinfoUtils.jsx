import {
  Box,
  Grid,
  Image,
  Heading,
  Text,
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import NextLink from "next/link";

const CardInfoUtils = ({ datautils }) => {
  return (
    <Box mt={[20, 40]} mb={[20, 40]} id="premier-titre">
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#fd0000"}>
        OUTILS
      </Heading>

      {datautils ? (
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gap={6}
          mx={[10, 20]}
        >
          {datautils.map((item, index) => (
            <NextLink href={`/utilsdetails/${item.nom}`} key={index}>
              <Box
                
                bg="#fd0000"
                p={8}
                borderRadius="md"
                boxShadow="md"
                color={"white"}
                _hover={{ bg: "blue.800" }}
              >
                <Image src={item.image} alt="Image" height={60} width={"2xl"} />
                <Heading as="h1" size="md" mt={8} fontSize={24}>
                  {item.nom.toUpperCase()}
                </Heading>
                <Text mt={2}>
                  {item.description.toUpperCase().slice(0, 100)} (...)
                </Text>
              </Box>
            </NextLink>
          ))}
        </Grid>
      ) : (
        <Center>
          <Text>Pas d&lsquo;outils</Text>
        </Center>
      )}
    </Box>
  );
};

export default CardInfoUtils;
