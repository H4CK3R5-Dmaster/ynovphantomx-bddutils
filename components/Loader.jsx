// components/Loader.js
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Affiche l'image pendant 2 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="black" // Fond noir
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
    >
      {isLoading ? (
        <Box>
          <img
            src="/logo.png" // Remplacez par le chemin vers votre image
            alt="Loading"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <Text textAlign={"center"} fontSize={"4xl"} color={"#fd0000"}>WELCOME TO BDDUTILS</Text>
        </Box>
      ) : null}
    </Box>
  );
};

export default Loader;
