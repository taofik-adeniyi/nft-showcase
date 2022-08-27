import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from 'expo-font';
import Home from './screens/Home'
import Details from './screens/Details'
import Auth from './screens/Auth'
import { useEffect, useState } from "react";

const Stack = createStackNavigator()
// NavigationContainer
// DefaultTheme

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}

const customFonts = {
  InterBold: require('./assets/fonts/Inter-Bold.ttf'),
  InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
  InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
  InterLight: require('./assets/fonts/Inter-Light.ttf'),
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

   const _loadFontsAsync = async () => {
     try {
       await Font.loadAsync(customFonts);
    } catch (error) {
      console.log('err catching custom fonts', error);
    }
  }
  useEffect(()=>{
     _loadFontsAsync()
    setFontsLoaded(true)
  }, [])

  if(!fontsLoaded) return null
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
