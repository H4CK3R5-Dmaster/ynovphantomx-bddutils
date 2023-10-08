import { Box, Center, Image, Text } from "@chakra-ui/react";

const ScreenComponent = () => {
  const handleButtonClick = () => {
    const firstTitle = document.querySelector("#premier-titre");
    if (firstTitle) {
      firstTitle.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Box
        minHeight="80vh"
        bg={"#fd0000"}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <Box textAlign="center">
            <Image src="/logokali.png" alt="Logo" boxSize="250px" mx="auto" />
            <Text color="#fff" fontSize={[34, 64]} mt={4}>
              INFORMATIONS
            </Text>
          </Box>
        </Center>
      </Box>
      <Box
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Image
          src="/icons-info/arrow.png"
          alt="Flèche vers le bas"
          boxSize={"60px"}
          cursor="pointer"
          onClick={handleButtonClick}
        />
      </Box>
    </Box>
  );
};

export default ScreenComponent;
