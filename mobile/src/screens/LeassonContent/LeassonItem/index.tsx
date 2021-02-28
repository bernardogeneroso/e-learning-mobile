import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {LeassonsProps} from '..';

import {
  Container,
  TitleLeasson,
  InfoLeasson,
  GeralInfo,
  NumberOfLeassonText,
  TimeLeassonView,
  TimeIcon,
  TimeText,
  LeassonCompleted,
  LeassonCompletedText,
  ContainerVideoIcon,
} from './styles';

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
  leasson: LeassonsProps;
}

const LeassonItem = ({y, index, leasson}: LeassonItemProps) => {
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

  return (
    <Animated.View
      key={index}
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}>
      <Container>
        <TitleLeasson>{leasson.name}</TitleLeasson>

        <InfoLeasson>
          <GeralInfo>
            <NumberOfLeassonText>Aula</NumberOfLeassonText>
            <TimeLeassonView>
              <TimeIcon>
                <Icon name="clock" size={12} color="#C4C4D1" />
              </TimeIcon>
              <TimeText>5 min</TimeText>
            </TimeLeassonView>
          </GeralInfo>

          <LeassonCompleted>
            <LeassonCompletedText>Completo!</LeassonCompletedText>
          </LeassonCompleted>
        </InfoLeasson>

        <ContainerVideoIcon>
          <Icon name="play-circle" size={42} color="#fff" />
        </ContainerVideoIcon>
      </Container>
    </Animated.View>
  );
};

export default LeassonItem;
