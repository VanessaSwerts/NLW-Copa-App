import { useCallback, useState } from 'react'
import { VStack, Icon, useToast, FlatList } from 'native-base';
import { Octicons } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading'
import { PollCard, PollCardsPros } from '../components/PollCard'
import { EmptyPollList } from '../components/EmptyPollList'

import { api } from '../services/api'

export function Polls() {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [polls, setPolls] = useState<PollCardsPros[]>([]);
  const toast = useToast();

  async function getPolls() {
    try {
      setIsLoading(true)
      const response = await api.get('/polls')
      setPolls(response.data.polls)
    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possivel carregar os bolões!',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    getPolls()
  }, []))

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />

      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
        <Button
          title="Buscar Bolão por código"
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          onPress={() => navigate('find')}
        />
      </VStack>

      {
        isLoading
          ? <Loading />
          : <FlatList
            data={polls}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PollCard data={item} />}
            ListEmptyComponent={() => <EmptyPollList />}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb: 10 }}
            px={5}
          />
      }

    </VStack>
  );
}