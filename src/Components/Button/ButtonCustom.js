import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const ButtonCustom = ({
  text,
  onPress,
  styleButon,
  styleTextButton,
  source,
  styleImage,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styleButon}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={source} style={styleImage} />
      <Text style={styleTextButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
