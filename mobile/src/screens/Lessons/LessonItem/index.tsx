import React, {useCallback} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {LessonsProps} from '..';

import {
  Container,
  TitleLesson,
  InfoLesson,
  GeralInfo,
  NumberOfLessonText,
  TimeLeassonView,
  TimeIcon,
  TimeText,
  LessonCompleted,
  LessonCompletedText,
  ContainerVideoIcon,
} from './styles';
import {useLessons} from '../../../hooks/LessonsManager';

const DEFAULT_CARD_HEIGHT = 112;
export const MARGIN = 6;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 3;
const {height: wHeight} = Dimensions.get('window');
const height = wHeight - 64;
const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
  },
});

interface LeassonItemProps {
  y: Animated.Value;
  index: number;
  lesson: LessonsProps;
}

const LessonItem = ({y, index, lesson}: LeassonItemProps) => {
  const navigation = useNavigation();
  const {course} = useLessons();

  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  const handleNavigateToLeasson = useCallback(
    (lesson: LessonsProps) => {
      navigation.navigate('Lesson', {lesson, course});
    },
    [navigation, course],
  );

  return (
    <Animated.View
      key={index}
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}>
      <Container onPress={() => handleNavigateToLeasson(lesson)}>
        <TitleLesson>{lesson.name}</TitleLesson>

        <InfoLesson>
          <GeralInfo>
            <NumberOfLessonText>
              Aula {lesson.leasson_number}
            </NumberOfLessonText>
            <TimeLeassonView>
              <TimeIcon>
                <Icon name="clock" size={12} color="#C4C4D1" />
              </TimeIcon>
              <TimeText>{lesson.minutes} min</TimeText>
            </TimeLeassonView>
          </GeralInfo>

          <LessonCompleted>
            <LessonCompletedText>Completo!</LessonCompletedText>
          </LessonCompleted>
        </InfoLesson>

        <ContainerVideoIcon>
          <Icon name="play-circle" size={42} color="#fff" />
        </ContainerVideoIcon>
      </Container>
    </Animated.View>
  );
};

export default LessonItem;
