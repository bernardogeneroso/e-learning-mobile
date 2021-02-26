import React from 'react';
import {ClassesProps} from '..';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  TitleClass,
  InfoClass,
  GeralInfo,
  NumberOfClassText,
  TimeClassText,
  Completedclass,
  CompletedclassText,
} from './styles';

const ClassItem = ({classItem}: {classItem: ClassesProps}) => {
  return (
    <Container>
      <TitleClass>{classItem.name}</TitleClass>

      <InfoClass>
        <GeralInfo>
          <NumberOfClassText>Aula</NumberOfClassText>
          <TimeClassText>
            <Icon
              name="clock"
              size={12}
              color="#C4C4D1"
              style={{
                marginRight: 4,
              }}
            />
            5 min
          </TimeClassText>
        </GeralInfo>

        <Completedclass>
          <CompletedclassText>Completo!</CompletedclassText>
        </Completedclass>
      </InfoClass>
    </Container>
  );
};

export default ClassItem;
