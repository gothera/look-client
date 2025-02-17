import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color, typography } from '../../theme';
import LineDivider from '../ui/LineDivider';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  description?: string;
  setText: (_: string) => void;
  text: string;
}

const PasswordInputWithLabel: React.FC<OwnProps> = ({
  containerStyle,
  placeholder,
  description,
  text,
  setText,
}) => {
  const _onChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>Password</Text>
      {description && (
        <Text style={styles.labelDescription}>{description}</Text>
      )}
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        maxLength={80}
        value={text}
        onChangeText={_onChangeText}
        returnKeyType="done"
        placeholder={placeholder}
      />
      <LineDivider />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  labelDescription: TextStyle;
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
    color: color.textSecondary,
    marginBottom: 8,
    marginTop: 10,
  },
  labelDescription: {
    ...typography.caption2Regular,
    color: color.muted,
    marginTop: 2,
  },
});

export default PasswordInputWithLabel;
