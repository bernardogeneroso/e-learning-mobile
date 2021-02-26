import React, {useState, useCallback} from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  DisciplinesProps,
  useDisciplines,
} from '../../../hooks/DisciplinesManager';

import {
  DisciplinesContent,
  ImageDiscipline,
  TitleDiscipline,
  TextClasses,
  RemoveContent,
} from './styles';

export interface CategorieProps {
  discipline: DisciplinesProps;
  dimensionWindow: number;
  saved?: boolean;
}

const Categorie = ({
  discipline,
  dimensionWindow,
  saved = false,
}: CategorieProps) => {
  const {modalAddDiscipline} = useDisciplines();

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
      <DisciplinesContent
        style={{marginHorizontal: 5}}
        widthWindows={dimensionWindow - 60}
        onPress={() => {
          startScaleAnimation(animationContent, 1.03, 500);
        }}>
        <ImageDiscipline
          source={{uri: discipline.image_url}}
          style={{
            resizeMode: 'contain',
          }}
        />
        <TitleDiscipline>{discipline.name}</TitleDiscipline>
        <TextClasses>{discipline.classes} Aulas</TextClasses>
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
                  modalAddDiscipline(discipline);
                }}
                onLongPress={() => {
                  startScaleAnimation(animationTrash, 1.2, 500);
                  modalAddDiscipline(discipline);
                }}
              />
            </Animated.View>
          </RemoveContent>
        )}
      </DisciplinesContent>
    </Animated.View>
  );
};

export default Categorie;
