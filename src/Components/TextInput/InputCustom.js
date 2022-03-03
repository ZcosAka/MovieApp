import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputCustom = ({
  placeholder,
  styleInput,
  value,
  onChangeText,
  placeholderTextColor,
  secureTextEntry,
  onBlur,
  onSubmitEditing,
  returnKeyLabel,
  returnKeyType,
  ref,
  onFocus,
  blurOnSubmit,
  autoFocus,
}) => {
  return (
    <TextInput
      autoFocus={autoFocus}
      blurOnSubmit={blurOnSubmit}
      onFocus={onFocus}
      ref={ref}
      returnKeyType={returnKeyType}
      returnKeyLabel={returnKeyLabel}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      placeholder={placeholder}
      style={styleInput}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputCustom;
