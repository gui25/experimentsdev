import { useState, FormEvent } from 'react';
import { Flex,  Button, Text } from '@chakra-ui/core'

import axios from 'axios';

export default function Home() {
    axios.get('/api/showsubscribe');


}