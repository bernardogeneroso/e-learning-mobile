import React, {useState, useCallback} from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {CoursesProps, useCourses} from '../../../hooks/CoursesManager';
import {ProfileScreenNavigationProp} from '../../../routes/app.routes';

import {
  CoursesContent,
  ImageCourse,
  TitleCourse,
  TextClasses,
  RemoveContent,
} from './styles';

export interface CategorieProps {
  course: CoursesProps;
  dimensionWindow: number;
  saved?: boolean;
}

const Categorie = ({
  course,
  dimensionWindow,
  saved = false,
}: CategorieProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const {modalAddCourse} = useCourses();

  const [animationContent] = useState(new Animated.Value(1));
  const [animationTrash] = useState(new Animated.Value(1));

  const startScaleAnimation = useCallback(
    (
      animation: Animated.Value,
      toValueStart: number,
      duration: number = 400,
    ) => {
      const animations = [
        Animated.timing(animation, {
          toValue: toValueStart,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
      ];

      Animated.sequence(animations).start();
    },
    [],
  );

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animationContent,
          },
        ],
      }}>
      <CoursesContent
        style={{marginHorizontal: 5}}
        widthWindows={dimensionWindow - 60}
        onPress={() => {
          startScaleAnimation(animationContent, 1.03, 500);
          navigation.navigate('Lessons', {
            screen: 'Lessons',
            params: {course},
          });
        }}>
        <ImageCourse
          source={{uri: course.image_url}}
          style={{
            resizeMode: 'contain',
          }}
        />
        <TitleCourse>{course.name}</TitleCourse>
        <TextClasses> Aulas</TextClasses>
        {saved && (
          <RemoveContent>
            <Animated.View
              style={{
                transform: [{scale: animationTrash}],
              }}>
              <Icon
                name="trash"
                size={24}
                color="#C4C4D1"
                onPress={() => {
                  startScaleAnimation(animationTrash, 1.2, 500);
                  modalAddCourse(course);
                }}
                onLongPress={() => {
                  startScaleAnimation(animationTrash, 1.2, 500);
                  modalAddCourse(course);
                }}
              />
            </Animated.View>
          </RemoveContent>
        )}
      </CoursesContent>
    </Animated.View>
  );
};

export default Categorie;
