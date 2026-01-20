import {
  Heading,
  Text,
  Button,
  Checkbox,
  Field,
  GridItem,
  Input,
  NativeSelect,
  SimpleGrid,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const YourDetails = () => {
  return (
    <>
      {" "}
      <VStack w={`full`} h={`full`} p={`10`} spacing={10} align={`flex-start`}>
        <VStack spacing={`1`} align={`flex-start`}>
          <Heading>Your Details</Heading>
          <Text>If you already have an account, click here to login</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={5}>
          <GridItem colSpan={1}>
            <Field.Root variant='filled'>
              <Field.Label>First Name</Field.Label>
              <Input variant={`outline`} placeholder='Enter First Name' />
            </Field.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Field.Root variant='filled'>
              <Field.Label>Last Name</Field.Label>
              <Input variant={`outline`} placeholder='Enter Last Name' />
            </Field.Root>
          </GridItem>
          <GridItem colSpan={2}>
            <Field.Root variant='filled'>
              <Field.Label>Address</Field.Label>
              <Textarea variant={`outline`} placeholder='Enter your address' rows={`4`} />
            </Field.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Field.Root variant='filled'>
              <Field.Label>City</Field.Label>
              <Input variant={`outline`} placeholder='Enter City' />
            </Field.Root>
          </GridItem>
          <GridItem colSpan={1}>
            <Field.Root variant='filled'>
              <Field.Label>Country</Field.Label>
              <NativeSelect.Root invalid width='240px'>
                <NativeSelect.Field placeholder='Select Country'>
                  <option value={`india`}>India</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox.Root colorPalette={``}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Ship to the billing address</Checkbox.Label>
            </Checkbox.Root>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size='lg' w={`full`}>
              Place Item
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default YourDetails;
