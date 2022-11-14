
import messaging from '@react-native-firebase/messaging';
import {Alert, Linking} from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
   return await getFCMToken();
  } else {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    Alert.alert(
      'Caregiver Saathi',
      'Turn on Notification Services to allow Caregiver Saathi Services.',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {
          text: "Don't allow Notification",
          onPress: () => {},
        },
      ],
    );
  }
}

async function getFCMToken() {
  try {
    const FCMToken = await messaging().getToken();

    return FCMToken;
  } catch (erro) {
    console.log('FCM Token error', erro?.message);
    return null;
  }
}
