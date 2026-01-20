import { Heading, Text, AspectRatio, Button, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlha.600");

  return (
    <>
      {" "}
      <VStack bg={`${bgColor}`} w={`full`} h={`full`} p={`10`} spacing={`6`} align={`flex-start`}>
        <VStack align={`flex-start`} spaceY={`3`}>
          <Heading size={`2xl`}>Your Cart</Heading>
          <Text>
            If the price is too hard on your eyes,
            <Button variant={`outline`} colorScheme={`black`} onClick={toggleColorMode}>
              {" "}
              try changing the theme
            </Button>
          </Text>
        </VStack>
        <HStack spaceX={`6`} alignItems={`center`} w={`full`}>
          <AspectRatio ratio={`1`} w={`24`}>
            <Image src='../skateboard.jpeg' alt='aspecratiopic' />
          </AspectRatio>
          <Stack spaceX={``} w={`full`} direction={`row`} justifyContent={`space-between`} alignItems={`center`}>
            <VStack w={`full`} alignItems={`flex-start`}>
              <Heading size={`md`}>Penny Board</Heading>
              <Text color={`${textColor}`}>PNYCOMP27541</Text>
            </VStack>
            <Heading size={`sm`} textAlign={`end`}>
              $119.00
            </Heading>
          </Stack>
        </HStack>
        <VStack alignItems={`stretch`} w={`full`}>
          <HStack mt={`5`} justifyContent={`space-between`}>
            <Text color={`${textColor}`}>Subtotal</Text>
            <Heading size={`sm`}>$119.00</Heading>
          </HStack>
          <HStack justifyContent={`space-between`}>
            <Text color={`${textColor}`}>Shipping</Text>
            <Heading size={`sm`}>$19.99</Heading>
          </HStack>
          <HStack justifyContent={`space-between`}>
            <Text color={`${textColor}`}>Taxes (estimated)</Text>
            <Heading size={`sm`}>$23.80</Heading>
          </HStack>
        </VStack>
        <HStack divideColor={`gray.400`} divideY={`3px`} justifyContent={`space-between`} w={`full`}>
          <Text color={`${textColor}`}>Total</Text>
          <Heading>$162.79</Heading>
        </HStack>
      </VStack>
    </>
  );
};

export default Cart;
