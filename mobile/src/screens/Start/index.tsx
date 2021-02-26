import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
        <ButtonGoStudy
          onPress={() =>
            // @ts-ignore
            navigation.navigate('Home')
          }>
          <ButtonGoStudyText>Começar os estudos</ButtonGoStudyText>
        </ButtonGoStudy>
      </Content>
    </Container>
  );
};

export default Start;
