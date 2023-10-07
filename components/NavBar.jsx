import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Collapse,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrolled = currentScrollY > 50;
    setIsScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg={isScrolled ? "#fd0000" : "transparent"}
      boxShadow={isScrolled ? "md" : "none"}
      py={4}
      px={8}
      position="fixed"
      top={isScrolled ? 0 : 0}
      left={0}
      right={0}
      zIndex={isScrolled ? "sticky" : "initial"}
      transition="top 0.3s ease-in-out"
    >
      <Flex align="center">
        
        <Box fontWeight="bold" fontSize="lg">
          <NextLink href={"/"}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="/logo.png"
              alt="logo"
            />
          </NextLink>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Flex color="white">
            <Box mx={4}>
              <NextLink href={"/"}>Accueil</NextLink>
            </Box>
            <Box mx={4}>
              <Box
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownClose}
                position="relative"
              >
                <NextLink href={"/informations"}>INFORMATIONS</NextLink>
              </Box>
            </Box>
            
          </Flex>
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="#fd0000"
          size="md"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} bg={"#fd0000"}>
          <Flex direction="column" color="white">
            <Box mx={4} my={2}>
              <NextLink href={"/"}>Accueil</NextLink>
            </Box>
            
            <Box mx={4} my={2}>
              <NextLink href={"/"}>INFORMATIONS</NextLink>
            </Box>
           
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
