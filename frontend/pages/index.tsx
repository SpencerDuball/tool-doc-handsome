import type { NextPage } from "next";
import Head from "next/head";
import { Container, Text, Button, Box } from "@chakra-ui/react";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useThemedColor } from "@dub-stack/chakra-radix-colors";
import NextLink from "next/link";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  const c = useThemedColor();

  return (
    <Box mb={6}>
      <Text as="time" fontSize="sm" color={c("_gray.9")}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </Text>
      <Box as="h2" fontSize="lg">
        <NextLink href={post.url} passHref>
          <Button as="a" variant="link">
            {post.title}
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" maxW="container.xl" bg="red.4">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </Container>
    </>
  );
};

export default Home;
