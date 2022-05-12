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
import { RiAncientGateFill, RiSunFill, RiMoonFill } from "react-icons/ri";
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
        className="component-header"
        {...props}
      >
        <HStack>
          <Icon as={RiAncientGateFill} h={9} w={9} color={c("violet.9")} />
          <Text as="p" fontWeight="bold">
            My App
          </Text>
        </HStack>
      </Button>
    </Link>
  );
};

export const Header = (props: BoxProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const c = useThemedColor();
  return (
    <Box
      bg={c("_gray.1")}
      zIndex="banner"
      borderBottom="1px solid"
      borderColor={c("_gray.3")}
      {...props}
    >
      <Container
        maxW="8xl"
        position="relative"
        h={16}
        display="grid"
        gridAutoFlow="column"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left-Aligned Content */}
        <HStack>
          <LogoLink />
        </HStack>
        {/* Centered Content */}
        <HStack
          position="absolute"
          left="50%"
          transform={"translateX(-50%)"}
        ></HStack>
        {/* Right-Aligned Content */}
        <HStack>
          <IconButton
            aria-label="Toggle theme"
            variant="ghost"
            icon={<Icon as={colorMode === "light" ? RiMoonFill : RiSunFill} />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Container>
    </Box>
  );
};
