import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EquipoScreen from '../screens/EquipoScreen';
import RegistroScreen from '../screens/RegistroScreen';
import EditarScreen from '../screens/EditarScreen';
import ApiScreen from '../screens/ApiScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

// BOTTOM TAB
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Welcome' >
        <Tab.Screen name='Screen1' component={EquipoScreen}/> 
        <Tab.Screen name="Top" component={RegistroScreen} /> 
        <Tab.Screen name="Personajes" component={EditarScreen}/>
        <Tab.Screen name="Welcome" component={ApiScreen} />
      </Tab.Navigator>
    );
}

// STACK
const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={WelcomeScreen}/>  
            <Stack.Screen name="BottomTab" component={MyTabs}/>                      
        </Stack.Navigator>
    );
}

export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}

