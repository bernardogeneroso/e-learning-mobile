import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import {CoursesProps} from '../../hooks/CoursesManager';
import {useLessons, LessonsProps} from '../../hooks/LessonsManager';

import {
  Container,
  ContainerLesson,
  Information,
  ContainerVideo,
  TitleLesson,
  ContentLesson,
  InfoLesson,
  NumberOfLessonText,
  TimeLessonView,
  TimeIcon,
  TimeText,
  DescriptionLesson,
  ContainerButtons,
  ButtonLeft,
  ButtonLeftText,
  ButtonRight,
  ButtonRightText,
} from './styles';

interface LessonParams {
  route: {
    params: {
      course: CoursesProps;
      lesson: LessonsProps;
      indexLesson?: LessonsProps;
    };
  };
}

const Lesson = ({
  route: {
    params: {course, lesson},
  },
}: LessonParams) => {
  const navigation = useNavigation();
  const {nextLesson, previouLesson, lessons, actualIndex} = useLessons();

  const handleNavigateNextLesson = useCallback(() => {
    const NextLesson = nextLesson(lesson.id);

    if (!NextLesson) return;

    navigation.navigate('Lesson', {
      course,
      lesson: NextLesson,
    });
  }, [lesson.id, nextLesson, course, navigation]);

  const handleNavigatePreviouLesson = useCallback(() => {
    const PreviouLesson = previouLesson(lesson.id);

    if (!PreviouLesson) return;

    navigation.navigate('Lesson', {
      course,
      lesson: PreviouLesson,
    });
  }, [lesson.id, previouLesson, course, navigation]);

  return (
    <Container>
      <Header courseDashboard course={course} />

      <ContainerLesson>
        <ContainerVideo>
          <Icon name="play-circle" size={54} color="#fff" />
        </ContainerVideo>

        <ContentLesson>
          <Information>
            <TitleLesson>{lesson.name}</TitleLesson>

            <InfoLesson>
              <NumberOfLessonText>
                Aula {lesson.leasson_number}
              </NumberOfLessonText>

              <TimeLessonView>
                <TimeIcon>
                  <Icon name="clock" size={12} color="#C4C4D1" />
                </TimeIcon>
                <TimeText>{lesson.minutes} min</TimeText>
              </TimeLessonView>
            </InfoLesson>

            <DescriptionLesson>{lesson.description}</DescriptionLesson>
          </Information>

          <ContainerButtons>
            {actualIndex(lesson.id) - 1 !== -1 && (
              <ButtonLeft onPress={handleNavigatePreviouLesson}>
                <Icon name="arrow-left" size={20} color="#FF6680" />
                <ButtonLeftText>Aula anterior</ButtonLeftText>
              </ButtonLeft>
            )}

            {actualIndex(lesson.id) + 1 < lessons.length && (
              <ButtonRight onPress={handleNavigateNextLesson}>
                <Icon name="arrow-right" size={20} color="#fff" />
                <ButtonRightText>Próxima aula</ButtonRightText>
              </ButtonRight>
            )}
          </ContainerButtons>
        </ContentLesson>
      </ContainerLesson>
    </Container>
  );
};

export default Lesson;
