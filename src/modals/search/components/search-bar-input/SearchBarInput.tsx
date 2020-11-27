import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import strings from '../../../../res/strings/strings';
import { CloseIcon, SearchIcon } from '../../../../res/svg';
import { styles } from './styles';

interface OwnProps {
  onCancel: () => void;
  setValue: (_: string) => void;
  value: string;
}

const SearchBarInput: React.FC<OwnProps> = ({ onCancel, setValue, value }) => {
  const onClearText = () => {
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          autoFocus
          value={value}
          onChangeText={setValue}
        />
        {value !== '' && (
          <TouchableOpacity
            hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
            onPress={onClearText}
          >
            <CloseIcon width={12} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.cancelContainer} onPress={onCancel}>
        <Text style={styles.cancelText}>{strings.action.cancel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarInput;
