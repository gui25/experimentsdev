import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core'

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      variant="unstyled"
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="#4d4dff"
      borderRadius="sm"
      {...props}
    />
  )
}

export default Input;
