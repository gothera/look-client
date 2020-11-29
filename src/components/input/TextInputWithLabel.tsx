import React, { createRef, useEffect } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color, spacing, typography } from '../../theme';
import LineDivider from '../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  shouldAutofocus?: boolean;
  placeholder: string;
  maxLengthUndefined?: boolean;
  multiline?: boolean;
  numOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  setText: (_: string) => void;
  text: string;
  dividerStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
  description?: string;
  disabled?: boolean;
  password?: boolean;
}

const TextInputWithLabel: React.FC<OwnProps> = ({
  containerStyle,
  label,
  shouldAutofocus,
  placeholder,
  maxLengthUndefined,
  multiline,
  numOfLines,
  keyboardType,
  setText,
  labelStyle,
  text,
  dividerStyle,
  description,
  disabled,
  password,
}) => {
  const textInputRef = createRef<TextInput>();

  useEffect(() => {
    if (textInputRef && textInputRef.current && shouldAutofocus) {
      setTimeout(() => {
        if (textInputRef && textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 500);
    }
  }, [shouldAutofocus]);

  const _onChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[disabled ? styles.disabledText : styles.input, labelStyle]}>
        {label}
      </Text>
      {description && <Text style={styles.description}>{description}</Text>}
      <TextInput
        secureTextEntry={password}
        ref={textInputRef}
        style={disabled ? styles.disabledText : styles.input}
        keyboardType={keyboardType || 'default'}
        maxLength={maxLengthUndefined ? undefined : 80}
        value={text}
        onChangeText={_onChangeText}
        returnKeyType="next"
        autoCapitalize="none"
        placeholder={placeholder}
        numberOfLines={numOfLines}
        multiline={multiline}
        placeholderTextColor={color.muted}
        editable={!disabled}
      />
      <LineDivider style={dividerStyle} />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  description: TextStyle;
  disabledText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
  },
  label: {
    ...typography.subheadline,
    color: color.textPrimary,
  },
  input: {
    ...typography.body,
    color: color.textPrimary,
    marginBottom: 8,
    marginTop: 10,
  },
  description: {
    ...typography.caption2Regular,
    marginTop: spacing.smallest,
    color: color.muted,
  },
  disabledText: {
    ...typography.body,
    color: color.muted,
    marginBottom: 8,
    marginTop: 10,
  },
});

export default TextInputWithLabel;
