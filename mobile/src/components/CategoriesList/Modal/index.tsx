import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {CoursesProps, useCourses} from '../../../hooks/CoursesManager';
import {ModalVisibleProps} from '../../../hooks/CoursesManager';

import {
  Container,
  Modal,
  Dialog,
  TextInfo,
  ActionsButtons,
  ButtonClose,
  ButtonRemove,
  ButtonCloseText,
  ButtonRemoveText,
} from './styles';

interface modalVisibleProps {
  modalVisible: ModalVisibleProps;
}

const ModalRemoveOfFavourite = ({modalVisible}: modalVisibleProps) => {
  const {toggleModal, removeFavorite} = useCourses();

  const handleRemoveFavorite = useCallback(
    (discipline?: CoursesProps) => {
      if (discipline) {
        removeFavorite(discipline);
        toggleModal();
      }
    },
    [removeFavorite, toggleModal],
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible.toggle}>
      <Container>
        <Dialog
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Icon name="trash" size={48} color="#FF6680" />

          <TextInfo>
            Quer excluir suas aulas de {modalVisible.discipline?.name}?
          </TextInfo>

          <ActionsButtons>
            <ButtonClose>
              <ButtonCloseText onPress={toggleModal}>Não</ButtonCloseText>
            </ButtonClose>
            <ButtonRemove>
              <ButtonRemoveText
                onPress={() => handleRemoveFavorite(modalVisible.discipline)}>
                Com certeza
              </ButtonRemoveText>
            </ButtonRemove>
          </ActionsButtons>
        </Dialog>
      </Container>
    </Modal>
  );
};

export default ModalRemoveOfFavourite;
