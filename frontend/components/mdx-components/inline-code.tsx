import { chakra, HTMLChakraProps, useDimensions } from "@chakra-ui/react";
import React, { useRef } from "react";

export const InlineCode = (props: HTMLChakraProps<"code">) => {
  const codeRef = useRef(null);
  const dimensions = useDimensions(codeRef);

  /**
   * Value (in pixels) comes from the minimum width of
   * the `li` parent element in the changelog page
   * before the layout shifts to mobile.
   */
  const MIN_CONTENT_WIDTH = 363;
  let shouldWrap = false;
  if (dimensions) shouldWrap = dimensions.borderBox.width > MIN_CONTENT_WIDTH;

  return (
    <chakra.code
      rounded="sm"
      px={1}
      fontSize="sm"
      py="2px"
      lineHeight="normal"
      color="purple.9"
      _dark={{
        color: "purpleDark.9",
      }}
      ref={codeRef}
      whiteSpace={shouldWrap ? undefined : "nowrap"}
      {...props}
    />
  );
};
