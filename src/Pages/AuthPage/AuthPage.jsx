import { Container, Flex, Box, Image, VStack, Text } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"container.md"}>
          <Flex gap={10} justifyContent={"center"} alignItems={"center"}>
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/auth.png" height={650} />
            </Box>
            <VStack>
              <AuthForm />
              <VStack
                gap={5}
                justifyContent={"center"}
                alignItems={"center"}
                my={2}
              >
                <Text fontSize={20}>Get the app</Text>
                <Flex
                  spacing={5}
                  gap={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image h={"45px"} src="playstore.png" />
                  <Image h={"45px"} src="microsoft.png" />
                </Flex>
              </VStack>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AuthPage;
