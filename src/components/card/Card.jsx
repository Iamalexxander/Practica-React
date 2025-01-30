import { Box, HStack, Avatar, VStack, Text } from "native-base";

export const Card = (props) => {
  return (
    <Box pl="4" pr="5" py="2">
      <HStack alignItems="center" space={3}>
        <Avatar size="70px" source={{ uri: props.url }}></Avatar>
        <VStack>
          <Text color="blue.400"> {props.nombre} </Text>
          <Text color="amber.400"> {props.especie} </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
