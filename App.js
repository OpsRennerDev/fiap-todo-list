import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import Details from './screen/Details';
import Tasks from './screen/Tasks'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks" >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Tasks' component={Tasks} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
