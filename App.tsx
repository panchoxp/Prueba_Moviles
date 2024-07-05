import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import EquipoScreen from './screens/EquipoScreen';
import RegistroScreen from './screens/RegistroScreen';
import Navegador from './navigators/MainNavigator';
import ApiScreen from './screens/ApiScreen';
import EditarScreen from './screens/EditarScreen';

export default function App() {
  return (
    <MyTabs/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
