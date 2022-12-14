import { useState } from 'react';
import { Heading, VStack, useToast } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Header } from "../components/Header";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { api } from '../services/api'

export function Find() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPoll() {
    if (!code.trim()) {
      return toast.show({
        title: 'Informe o código para buscar o bolão!',
        placement: 'top',
        bgColor: 'red.500'
      })
    }

    setIsLoading(true)

    try {
      await api.post('/polls/join', { code })

      toast.show({
        title: 'Você entrou no bolão com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      })

      navigate('polls')

    } catch (error) {
      console.log(error)
      setCode('')
      setIsLoading(false)

      if (error.response?.data?.message === 'Poll not found.') {
        return toast.show({
          title: 'Não foi possivel encontrar o bolão!',
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      if (error.response?.data?.message === 'You already joined this poll.') {
        return toast.show({
          title: 'Você já faz parte desse bolão!',
          placement: 'top',
          bgColor: 'red.500'
        })
      }
    }
  }


  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton={true} />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontre um bolão através de {'\n'} seu código único!
        </Heading>

        <Input
          mb={2}
          placeholder="Qual o código do bolão?"
          autoCapitalize='characters'
          value={code}
          onChangeText={setCode}
        />

        <Button
          title="Buscar Bolão"
          isLoading={isLoading}
          onPress={handleJoinPoll}
        />

      </VStack>

    </VStack>
  );
}