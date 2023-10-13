import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import PublicLayout from '@/components/layouts/PublicLayout';
import theme from '@/utils/chakra-theme';
import '@/styles/scrollbar.css'
import NextProgress from 'next-progress'

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>

      <PublicLayout>
        <NextProgress
          color="#000"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </PublicLayout>

    </ChakraProvider>
  );
}
