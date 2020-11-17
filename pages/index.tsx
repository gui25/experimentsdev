import { useState, FormEvent } from 'react';
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';
import ReactDOM from 'react-dom'

export default function Home() {
  const [email, setEmail] = useState('');
  let flag = 1;
  let emailcheck = '';
  let result = "";
  




  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
     
      if(email == '' || email == null || email == undefined){

        alert('Escreva um email válido.');
        
      } else {

        if(emailcheck == email && flag == 2){

          alert('Não faça spam.');

        } else {

          alert("O e-mail:" +  email  + " foi cadastrado com sucesso.");

          result = "O e-mail foi cadastrado com sucesso.";
          
       

          axios.post('/api/subscribe', { email });
          emailcheck = email;
          flag = 2;
          
        }
        
      }
    

    
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

        <Text textAlign="center" fontSize={37} color="#4d4dff" marginBottom={2}>
          Guilherme Cursos 

        </Text>

        <Text textAlign="center" fontSize={22} color="#6666FF" marginBottom={2}>
          Desenvolvimento Smart 🚀


        </Text>

        <Text textAlign="center" fontSize="md" color="#a6bcff" marginBottom={2}>
          Envie seu e-mail e receba os melhores cursos de programação!
        </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="#4d4dff"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#4d4dff' }}
        >
          INSCREVER
        </Button>

        <div id="root"></div>

        
      </Flex>
    </Flex>
  )
}
