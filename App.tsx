import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import dashboard from './screens/Dashboard/dashboard';
import login from './screens/Auth/login';
import signUp from './screens/Auth/signUp';
import OTP_verification from './screens/Auth/OTPVerification';
import Success from './screens/Auth/success';
import developProject from './screens/Projects/developProject';
import marketing from './screens/Projects/marketing';
const Stack=createNativeStackNavigator()
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Dashboard' component={dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={login} options={{headerShown:false}}/>
        <Stack.Screen name='signUp' component={signUp} options={{headerShown:false}}/>
        <Stack.Screen name='verification' component={OTP_verification} options={{headerShown:false}}/>
        <Stack.Screen name='Success' component={Success} options={{headerShown:false}}/>
        <Stack.Screen name='PostProject' component={developProject} options={{headerShown:false}}/>
        <Stack.Screen name='marketing' component={marketing} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
