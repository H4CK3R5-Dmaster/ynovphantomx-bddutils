import { Box, Grid, Image, Heading, Text, Button, Center } from "@chakra-ui/react";

const GridCard = () => {
  const data = [
    {
      imageSrc: "/logo.png",
      title: "UTILISATION GLOBALE",
      description: "DECOUVREZ UNE LARGE SELECTION DES OUTILS DU PENTEST ET DE DOCUMENTATION SUR LEURS UTILISATION !",
    },
    {
      imageSrc: "/logo.png",
      title: "A DES FINS EDUCATIVES",
      description: "CETTE BASE DE DONNEES EST A UTILISER A DES FINS EDUCATIVES. NOUS NE SOMMES PAS RESPONSABLE EN CAS DE PROBLEMES.",
    },
    {
      imageSrc: "/logo.png",
      title: "SAVOIR ET PENTEST",
      description: "PRENEZ DU FUN A CHERCHER VOS OUTILS ET UTILISEZ CE SAVOIR POUR VOS FUTURS PENTEST !",
    },
    
  ];

  return (
    <Box mt={"40"} mb={40}>
      <Heading as="h2" size="2xl" textAlign="center" mb={20} color={"#fd0000"}>
        PRINCIPES DE LA BASE DE DONNEES UTILS
      </Heading>

      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} gap={6} mx={20}>
        {data.map((item, index) => (
          <Box key={index} bg="#fd0000" p={8} borderRadius="md" boxShadow="md" color={"white"}>
            <Image src={item.imageSrc} alt="Image" height={60} width={"2xl"}/>
            <Heading as="h3" size="md" mt={8} >
              {item.title}
            </Heading>
            <Text mt={2}>{item.description}</Text>
          </Box>
        ))}
      </Grid>
      <Center alignContent={"center"} marginTop={10}>
        <Button alignItems={"center"} bg={"#fd0000"} color={"white"} _hover={{bg: "black"}}>VOIR LES OUTILS</Button>
      </Center>
    </Box>
  );
};

export default GridCard;
