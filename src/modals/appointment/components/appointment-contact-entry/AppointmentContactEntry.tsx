import React from 'react';
import { View, Text, Linking } from 'react-native';
import TextEntry from '../../../../components/entry/text-entry/TextEntry';
import { InstagramIcon, WhatsappIcon, SmsIcon } from '../../../../res/svg';
import { styles } from './styles';

interface Props {
  contact: { instagram?: string; phone?: string };
}

const AppointmentContactEntry: React.FC<Props> = ({ contact }) => {
  const { instagram, phone } = contact;

  const onSms = () => {
    Linking.openURL(`tel:${phone}`).catch((err) => {
      console.error('open tel', err);
    });
  };

  const onWhatsapp = () => {
    Linking.openURL(`whatsapp://send?text=hello&phone=${phone}`).catch(
      (err) => {
        console.error('open whatsapp', err);
      },
    );
  };

  // const onInstagram = () => {
  //   if (!instagram) {
  //     return;
  //   }
  //   Linking.openURL(`instagram://user?username=${instagram}`).catch((err) => {
  //     console.error('open insta', err);
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Contact Artist</Text>
      {phone !== undefined && (
        <TextEntry title={'Call'} leftIcon={<SmsIcon />} onPress={onSms} />
      )}

      {phone !== undefined && (
        <TextEntry
          title={'Contact via Whatsapp'}
          leftIcon={<WhatsappIcon />}
          onPress={onWhatsapp}
        />
      )}
      {/* {instagram !== undefined && (
        <TextEntry
          title={'Instagram'}
          leftIcon={<InstagramIcon />}
          onPress={onInstagram}
        />
      )} */}
    </View>
  );
};

export default AppointmentContactEntry;
