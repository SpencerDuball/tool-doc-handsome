import {
  Box,
  VStack,
  Button,
  ButtonProps,
  HStack,
  Icon,
  Text,
  StackProps,
  forwardRef,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionButtonProps,
  BoxProps,
} from "@chakra-ui/react";
import { useThemedColor } from "@dub-stack/chakra-radix-colors";
import { Scrollbox, ScrollboxProps } from "components/scrollbox/scrollbox";
import { ComponentType } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  RiSeedlingFill,
  RiToolsFill,
  RiGuideFill,
  RiBookOpenFill,
} from "react-icons/ri";
import { allDocuments } from "contentlayer/generated";
import {
  getFolderStructure,
  IStructureElement,
  isDocumentTypes,
} from "util/nav-scripts";

// PageLink
const PageLink = forwardRef(
  (
    props: ButtonProps & {
      href?: string;
      isActive?: boolean;
      isHeading?: boolean;
    },
    ref
  ) => {
    const c = useThemedColor();
    const { children, isActive, isHeading, href, ...rest } = props;
    return (
      <Button
        as="a"
        ref={ref}
        cursor="pointer"
        position="relative"
        w="full"
        variant="ghost"
        fontWeight={isHeading ? "semibold" : "normal"}
        colorScheme={isActive ? "violet" : "gray"}
        bg={isActive ? c("violet.4") : undefined}
        size="sm"
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

// FolderLabel
const FolderLabel = (props: BoxProps) => {
  const c = useThemedColor();
  const { children, ...rest } = props;
  return (
    <Box
      h={8}
      px={3}
      display="grid"
      position="relative"
      alignItems="center"
      sx={{
        "& > p": {
          w: "full",
          fontSize: "sm",
          color: c("_gray.11"),
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

const NavAccordionButton = (props: AccordionButtonProps) => (
  <AccordionButton
    position="absolute"
    top={0}
    right={0}
    w="min-content"
    h="full"
    px={2}
    borderRadius="lg"
    onClick={(e) => e.stopPropagation()}
    sx={{
      ":focus:not(:focus-visible)": {
        shadow: "none",
      },
    }}
    {...props}
  />
);

const PanelVStack = (props: StackProps) => {
  const c = useThemedColor();
  return (
    <VStack borderLeft="1px solid" borderColor={c("_gray.6")} {...props} />
  );
};

const renderFolder = (activeHref: string) => (pages: IStructureElement[]) => {
  const JsxElements = pages.map(({ title, page, children, rank }) => {
    if (children.length === 0 && isDocumentTypes(page))
      return (
        <Link href={page.href} passHref>
          <PageLink key={page._id} isActive={page.href === activeHref}>
            <Text as="p" w="full" fontWeight={rank === 1 ? "bold" : "normal"}>
              {title}
            </Text>
          </PageLink>
        </Link>
      );
    else
      return (
        <Accordion
          key={page._id}
          w="full"
          allowToggle
          defaultIndex={rank === 1 ? [0] : undefined}
        >
          <AccordionItem display="grid" position="relative" border="none">
            {isDocumentTypes(page) ? (
              <Link href={page.href} passHref>
                <PageLink isActive={page.href === activeHref}>
                  <Text
                    as="p"
                    w="full"
                    fontWeight={rank === 1 ? "bold" : "normal"}
                  >
                    {title}
                  </Text>
                  <NavAccordionButton>
                    <AccordionIcon />
                  </NavAccordionButton>
                </PageLink>
              </Link>
            ) : (
              <FolderLabel>
                <Text fontWeight={rank === 1 ? "bold" : "normal"}>{title}</Text>
                <NavAccordionButton>
                  <AccordionIcon />
                </NavAccordionButton>
              </FolderLabel>
            )}
            <AccordionPanel pr={0}>
              <PanelVStack pl={1}>
                {renderFolder(activeHref)(children)}
              </PanelVStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      );
  });
  return JsxElements;
};

const folderStructure = getFolderStructure(allDocuments, 0);

const PartitionLink = (
  props: ButtonProps & {
    icon: ComponentType<any>;
    isActive?: boolean;
    href: string;
  }
) => {
  const { children, icon, ...rest } = props;
  const c = useThemedColor();
  return (
    <Link href={props.href} passHref>
      <Button
        as="a"
        w="full"
        variant="link"
        py={1}
        _hover={{ textDecoration: "none" }}
        sx={{
          "&:hover p": { color: c("_gray.12") },
        }}
        className="component-sidenav__sidenavlink"
        {...rest}
      >
        <HStack w="full" gap={1}>
          <Box
            h={6}
            w={6}
            bg={c("violet.9")}
            borderRadius="md"
            display="grid"
            placeItems="center"
          >
            <Icon as={icon} color={"_gray.1"} h="75%" w="75%" />
          </Box>
          <Text
            as="p"
            color={props.isActive ? c("_gray.12") : c("_gray.11")}
            fontSize="sm"
          >
            {children}
          </Text>
        </HStack>
      </Button>
    </Link>
  );
};

export const SideNav = (props: ScrollboxProps) => {
  const { route } = useRouter();

  let folderToRender = folderStructure.find((folder) => {
    if (isDocumentTypes(folder.page)) return route.startsWith(folder.page.href);
    else return undefined;
  });

  return (
    <Scrollbox
      className="component-sidenav"
      height="calc(100vh - 96px)"
      width="2xs"
      {...props}
    >
      {/* Section Links */}
      <VStack p={1}>
        <PartitionLink
          href="/overviews"
          icon={RiSeedlingFill}
          isActive={route.startsWith("/overview")}
        >
          Overview
        </PartitionLink>
        <PartitionLink
          href="/guides"
          icon={RiGuideFill}
          isActive={route.startsWith("/guides")}
        >
          Guides
        </PartitionLink>
        <PartitionLink
          href="/docs"
          icon={RiBookOpenFill}
          isActive={route.startsWith("/docs")}
        >
          Docs
        </PartitionLink>
        <PartitionLink
          href="/tools"
          icon={RiToolsFill}
          isActive={route.startsWith("/tools")}
        >
          Tools
        </PartitionLink>
      </VStack>
      {/* Page Links */}
      <VStack p={1} mt={10}>
        {renderFolder(route)(folderToRender ? folderToRender.children : [])}
      </VStack>
    </Scrollbox>
  );
};
