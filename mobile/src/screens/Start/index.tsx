import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ProfileScreenNavigationProp} from '../../routes/app.routes';

import {
  Container,
  ContentImage,
  ImageLearning,
  ImagePhone,
  Content,
  Title,
  Description,
  ButtonGoStudy,
  ButtonGoStudyText,
} from './styles';

import eLearning from '../../../assets/start-page/e.learning.png';
import ePhone from '../../../assets/start-page/phone.png';

const Start = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [firstTime, setFirstTime] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('e-learning:first-time').then((result) => {
      if (result) {
        setFirstTime(true);
      }
    });
  }, []);

  const handleNavigateToHome = useCallback(async () => {
    await AsyncStorage.setItem('e-learning:first-time', JSON.stringify(true));

    // @ts-ignore
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container>
      <ContentImage>
        <ImageLearning source={eLearning} />
        <ImagePhone source={ePhone} />
      </ContentImage>

      <Content>
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Description>
        <ButtonGoStudy onPress={handleNavigateToHome}>
          <ButtonGoStudyText>
            {firstTime ? 'Continuar os estudos' : 'Começar os estudos'}
          </ButtonGoStudyText>
        </ButtonGoStudy>
      </Content>
    </Container>
  );
};

export default Start;
