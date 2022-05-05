import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Box, Button, Text } from "@chakra-ui/react";
import { useThemedColor } from "@dub-stack/chakra-radix-colors";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (props: { params: any }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === props.params.slug
  );
  return {
    props: {
      post,
    },
  };
};

const PostLayout = (props: { post: Post }) => {
  const c = useThemedColor();
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <Box as="article" mx="auto" maxW="2xl" py={16}>
        <Box mb={6} textAlign="center">
          <Link href="/" passHref>
            <Button
              as="a"
              variant="link"
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
              color={c("blue.11")}
            >
              Home
            </Button>
          </Link>
        </Box>
        <Box mb={6} textAlign="center">
          <Text as="h1" mb={1} fontSize="3xl" fontWeight="bold">
            {props.post.title}
          </Text>
          <Text
            as="time"
            dateTime={props.post.date}
            fontSize="sm"
            color={c("blue.11")}
          >
            {format(parseISO(props.post.date), "LLLL d, yyyy")}
          </Text>
        </Box>
        <Text
          as="p"
          dangerouslySetInnerHTML={{ __html: props.post.body.html }}
        />
      </Box>
    </>
  );
};

export default PostLayout;
