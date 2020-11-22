import { useState, FormEvent } from 'react';
import { Flex,  Button, Text } from '@chakra-ui/core'

const axios = require('axios');
 

export default function Home() {


    // Make a request for a user with a given ID
    function list(){
        axios.get('/api/subshow')
        .then(function (response) {
        // handle success
        console.log(response);
        alert(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        alert(error);
        })
        .then(function () {
        // always executed
        });

    }

  
        


    return (
        <main>
            <h1 onClick={() => list()}>Click here!</h1>
            
        </main>
    );
}

