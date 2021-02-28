import styled from 'styled-components/native';

interface CoursesContentProps {
  widthWindows: number;
}

export const CoursesContent = styled.TouchableOpacity<CoursesContentProps>`
  padding: 18px 24px 18px 24px;
  background: #fff;
  width: ${(props) => props.widthWindows / 2};
  height: 160px;
  margin-top: 10px;
  justify-content: center;
  border-radius: 20px;
  position: relative;
  z-index: -1;
`;

export const ImageDiscipline = styled.Image`
  width: 64px;
  height: 64px;
`;

export const TitleDiscipline = styled.Text`
  font-family: 'Rubik-Regular';
  color: #6c6c80;
  font-size: 15px;
  margin-top: 16px;
`;

export const TextClasses = styled.Text`
  font-family: 'Rubik-Regular';
  color: #c4c4d1;
  font-size: 10px;
  margin-top: 4px;
`;

export const RemoveContent = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
`;
