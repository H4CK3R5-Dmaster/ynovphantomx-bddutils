import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GlitchCanvas from "glitch-canvas";
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

  useEffect(() => {
    if (!isLoading) {
      const progress = document.querySelector(".chakra-progress");

      // Vérifiez si la barre de chargement atteint 90%
      if (progress && progress.value === 90) {
        // Appliquez l'effet de glitch
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src = progress.toDataURL();
        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
          GlitchCanvas(canvas);
          progress.style.backgroundImage = `url(${canvas.toDataURL()})`;
        };
      }
    }
  }, [isLoading]);

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
