import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faChevronUp,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faChevronUp, faAngleUp);

const ScrollButtonUp = (props) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [componentProps, setComponentProps] = useState({
    targetId: props.targetId,
    behavior: props.behavior,
    buttonBackgroundColor: props.buttonBackgroundColor,
    buttonColor: props.buttonColor,
    iconType: props.iconType,
    scrollSpeed: props.scrollSpeed,
    style: props.style,
  });

  useEffect(() => {
    setComponentProps({
      ...componentProps,
      targetId: props.targetId,
    });
    // eslint-disable-next-line
  }, [props.targetId]);

  // eslint-disable-next-line
  const handleOnScroll = () => {
    setIsButtonVisible(window.scrollY > 90);
  };

  const handleOnPress = () => {
    const { targetId, behavior } = componentProps;
    const targetArea = document.getElementById(`${targetId}`);
    if (targetArea) {
      targetArea.scrollIntoView({ behavior });
    }
  };

  const ScrollButtonWrapper = ({ handleOnPress, config }) => {
    return isButtonVisible ? (
      <ButtonDefaultStyle
        onClick={handleOnPress}
        buttonColor={config.buttonColor}
        buttonBackgroundColor={config.buttonBackgroundColor}
        scrollSpeed={config.scrollSpeed}
        style={config.style}
      >
        <FontAwesomeIcon icon={config.iconType} />
      </ButtonDefaultStyle>
    ) : (
      <></>
    );
  };

  return (
    <ScrollButtonWrapper
      config={componentProps}
      handleOnPress={handleOnPress}
    />
  );
};

const buttonAnimate = keyframes`
    0% {
      right: 0px;
    }
    100% {
      right: 1%;
    }
`;

const ButtonDefaultStyle = styled.button`
  background-color: ${(props) => props.buttonBackgroundColor};
  color: ${(props) => props.buttonColor};
  position: fixed;
  right: 0;
  top: 10px;
  margin-bottom: 2%;
  border: none;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  outline: 0;
  animation: ${buttonAnimate};
  animation-duration: ${(props) => props.scrollSpeed};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  justify-content: center;
`;

ScrollButtonUp.propTypes = {
  targetId: PropTypes.string,
  behavior: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  iconType: PropTypes.string,
  scrollSpeed: PropTypes.string,
  style: PropTypes.object,
};

ScrollButtonUp.defaultProps = {
  behavior: 'smooth',
  buttonBackgroundColor: '#ed1c24',
  buttonColor: '#fff',
  iconType: 'chevron-up',
  targetId: '',
  scrollSpeed: '0.5s',
  style: {},
};

export default ScrollButtonUp;
