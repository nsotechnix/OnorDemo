import { HStack, VStack, Stack, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoSettingsSharp, IoGlobeSharp, IoClipboard } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";
import ConsImg from "../images/choose_onor.png";
import "./Cons.css";

function Cons() {
  return (
    <HStack
      w="100vw"
      p="70"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <VStack alignItems="flex-start" mb="50">
        <Box as="h1" color="#e3e3e" fontSize="38">
          Why you should choose onorworld
        </Box>
        <Stack
          fontSize="22"
          textAlign="start"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <HStack>
            <RiTimerFill /> <Text>Instant makeup</Text>
          </HStack>

          <HStack>
            <HiLightBulb /> <Text>Instant beauty tips</Text>
          </HStack>

          <HStack>
            <IoClipboard />{" "}
            <Text>Reviews and Recommendations for products</Text>
          </HStack>

          <HStack>
            <IoSettingsSharp />{" "}
            <Text>Expert and AI based suggestions for your skin color </Text>
          </HStack>

          <HStack>
            <IoGlobeSharp /> <Text>Do it from anywhere</Text>
          </HStack>

          <HStack>
            <AiFillDollarCircle />{" "}
            <Text>
              Very nominal or lower cost - less than{" "}
              <span color="orange">50-60%</span> from regular saloon
            </Text>
          </HStack>
        </Stack>
      </VStack>
      <Image w="500px" src={ConsImg} alt="demo" mt="50" />
    </HStack>
  );
}

export default Cons;
