import {
  Box,
  Input,
  VStack,
  Image,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, SetIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
  };
  return (
    <>
      <Box
        border={"1px solid grey"}
        borderRadius={4}
        justifyContent={"center"}
        p={6}
      >
        <VStack spacing={4}>
          <Image h={24} src="/logo.png" cursor={"pointer"} alt="instagram" />
          <Input
            type="email"
            fontSize={14}
            placeholder="enter email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            type="password"
            fontSize={14}
            placeholder="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin ? (
            <Input
              type="password"
              placeholder="confirm password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={() => handleAuth()}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>
          <Flex
            gap={2}
            width={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box h={"1px"} bg={"grey"} flex={2} />
            <Text justifyContent={"center"} alignItems={"center"}>
              OR
            </Text>
            <Box h={"1px"} bg={"grey"} flex={2} />
          </Flex>
          <Flex
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image h={5} src="/google.png" alt="google logo" />
            <Text color={"blue.400"}>Login with Google</Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid grey"} borderRadius={4} p={5} my={2}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>
            {!isLogin ? "Already have an account? " : "Don't have an account?"}
          </Box>
          <Box
            onClick={() => SetIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
