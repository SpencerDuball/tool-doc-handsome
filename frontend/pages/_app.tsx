import type { AppProps } from "next/app";
import { ChakraProvider, Grid, Container, Box } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { components } from "../components/mdx-components/mdx-components";
import { theme } from "@dub-stack/chakra-radix-colors";
import { Header } from "components/header/header";
import { SideNav } from "components/side-nav/side-nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components as any}>
        <Grid position="relative">
          <Header position="fixed" w="full" top={0} />
          <Container maxW="8xl">
            <Grid mt={16} py={4} gridTemplateColumns="auto 1fr auto" gap={4}>
              <SideNav />
              <Box>
                <Component {...pageProps} />
              </Box>
              <Box w="2xs" />
            </Grid>
          </Container>
        </Grid>
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
