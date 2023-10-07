import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PublicLayout from '@/components/layouts/PublicLayout';
import theme from '@/utils/chakra-theme';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulez une durée de chargement (remplacez par votre logique de chargement réelle)
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(fakeLoading);
  }, []);

 

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Loader />
      ) : (
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      )}
    </ChakraProvider>
  );
}
