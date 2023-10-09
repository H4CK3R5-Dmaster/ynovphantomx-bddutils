import { Box, Grid, Image, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import NextLink from 'next/link'

const CardInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/getcat")
      .then((response) => setData(response.data.categories))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Chargement...</div>;
  }

  return (
    <Box mt={[20, 40]} mb={[20, 40]} id="premier-titre">
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#fd0000"}>
        CATEGORIES
      </Heading>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        mx={[10, 20]}
      >
        {data.map((item, index) => (
          <NextLink href={`/categorie/${item.name}`} key={index}>
            <Box
              key={index}
              bg="#fd0000"
              p={8}
              borderRadius="md"
              boxShadow="md"
              color={"white"}
              height={"xl"}
              _hover={{bg: "blue.800"}}
            >
              <Image src={item.image} alt="Image" height={60} width={"2xl"} />
              <Heading as="h1" size="md" mt={8} fontSize={24}>
                {item.name.toUpperCase()} (ETAPE PENTEST : {item.step})
              </Heading>
              <Text mt={2}>{item.description.toUpperCase()}</Text>
            </Box>
          </NextLink>
        ))}
      </Grid>
    </Box>
  );
};

export default CardInfo;
