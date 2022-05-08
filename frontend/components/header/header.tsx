import {
  Box,
  BoxProps,
  Container,
  HStack,
  Button,
  ButtonProps,
  IconButton,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { RiAncientGateFill, RiSunFill } from "react-icons/ri";
import Link from "next/link";
import { useThemedColor } from "@dub-stack/chakra-radix-colors";

const LogoLink = (props: ButtonProps) => {
  const c = useThemedColor();
  return (
    <Link href="/" passHref>
      <Button
        as="a"
        variant="link"
        color={c("_gray.12")}
        _active={{ color: c("_gray.12") }}
        _hover={{ textDecoration: "none" }}
        {...props}
      >
        <HStack>
          <Icon as={RiAncientGateFill} h={9} w={9} color={c("tomato.9")} />
          <Text as="p" fontWeight="bold">
            My App
          </Text>
        </HStack>
      </Button>
    </Link>
  );
};

export const Header = (props: BoxProps) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
      <Container
        maxW="container.xl"
        position="relative"
        h={14}
        display="grid"
        alignItems="center"
      >
        {/* Left-Aligned Content */}
        <HStack position="absolute" left={0}>
          <LogoLink />
        </HStack>
        {/* Centered Content */}
        <HStack></HStack>
        {/* Right-Aligned Content */}
        <HStack position="absolute" right={0}>
          <IconButton
            aria-label="Toggle theme"
            variant="ghost"
            icon={<Icon as={RiSunFill} />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Container>
    </Box>
  );
};
