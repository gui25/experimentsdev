import { useState, FormEvent } from 'react';
import { Flex,  Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';
import Link from 'next/link'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,

  PopoverBody,

  FormControl,
  FormLabel
  
} from "@chakra-ui/react"



export default function Home() {
  const [email, setEmail] = useState('');
  const [emailcheck, setEmailcheck] = useState('');
  const [count, setCount] = useState(0);
  const [repeat, setRepeat] = useState(0);

  let message = '';
  var numcount = 0;
  
  

  
  const [buttonText, setButtonText] = useState("Next"); 
  
  const changeText = (text) => setButtonText(text);

 


  function handleSignUpToNewsletter(event: FormEvent) {
      event.preventDefault();
      setEmailcheck(email);
      
      
      
     
      if(email == '' || email == null || email == undefined || (email.indexOf(" ") !== -1) == true || email == "@" || repeat > 1){

        if((email.indexOf("@") !== -1) == false){

          var state = 'Escreva um email válido e com @.';
          message = state;
          changeText(message);

        } else {
          var state = 'Escreva um email válido.';
          message = state;
          changeText(message);
        }

        
        
      } else if((email.indexOf("@") !== -1) == false){

        var state = 'Precisa de um @';
          message = state;
          changeText(message);
          setEmailcheck(email);


      } else if(emailcheck == email && count > 1){
        


          var state = 'Não faça spam.';
          message = state;
          changeText(message);
          setEmailcheck(email);

        } else {
          
          setEmailcheck(email);

           var state = 'O e-mail foi cadastrado com sucesso.';
           message = state;
           changeText(message);
           
           
           axios.post('/api/subscribe', { email });
          
        }
        
      
    

    
  }


  function duplicateCount(string) {

    var array = [];
    array = string.split('');
    

    
    for (var i = 0; i < array.length; i++) {
      if (array[i] == "@") {
        numcount = numcount + 1;
        
        
      } else {
        
      }

    }    

    setRepeat(numcount);
    
  
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      id="form"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
        id="content"
      >

        <Text textAlign="center" fontSize={37} color="#677ff7" marginBottom={2}>
          Guilherme Cursos 

        </Text>

        <Text textAlign="center" fontSize={22} color="#99a5ff" marginBottom={2}>
          Desenvolvimento Smart 🚀


        </Text>
       
        <Text textAlign="center" fontSize="md" color="#a6bcff" marginBottom={2}>
          Envie seu e-mail e receba os melhores cursos de programação!
        </Text>
        
        <FormControl id="email">
         <FormLabel> </FormLabel>

        <Input
     
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
      
        />
          <FormLabel> </FormLabel>
          </FormControl>
        
        <Popover isLazy>
          <PopoverTrigger>

        <Button
          type="submit"
          backgroundColor="#4d4dff"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#4d4dff' }}
          onClick={() => {setCount(count + 1) , duplicateCount(email)}}
          
          
          
          
        >
          INSCREVER
        </Button>
        <Link href="/pages/extra/showsubs.tsx">
        <Button

          backgroundColor="#4d4dff"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#4d4dff' }}
          
          
          
          
        >
          INSCREVER
        </Button>
        </Link>

        </PopoverTrigger>
          <PopoverContent backgroundColor="#313135">
            
            <PopoverBody  >
            <Button>{buttonText}</Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        

        
    </Flex>
      

        
     
    </Flex>
  )
}
