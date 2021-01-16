import { useAvailableShareOptions } from '../share';
import { SmsIcon } from '../../res/svg';
import { ShareByAppOption } from '../../types';

export const useContactArtist = (): {
  message: string;
  icon: JSX.Element;
  onPress: () => void;
}[] => {
  // const { availableList } = useAvailableShareOptions();

  const availableList: ShareByAppOption[] = ['whatsapp', 'instagram'];

  const onSms = () => {};

  const contactList: {
    message: string;
    icon: JSX.Element;
    onPress: () => void;
  }[] = [{ message: 'Send SMS', icon: <SmsIcon />, onPress: onSms }];

  // availableList.forEach((availableApp) => {
  //   switch (availableApp) {
  //     case 'whatsapp':
  //     contactList.push({message: 'Send via Whatsapp', icon: })
  //   }
  // })

  return contactList;
};
