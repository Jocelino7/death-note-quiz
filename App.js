import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./App/component/Home"
import Quiz from "./App/component/Quiz"
import About from "./App/component/About"
import { TouchableHighlight, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen name="Quiz"
          options={{
            headerRight: () => (
              <TouchableHighlight

                style={{
                  backgroundColor: "black",
                  padding: 5,
                  borderRadius: 5
                }}
              >
                <Text style={{ color: "#FFFF" }}>?</Text>
              </TouchableHighlight>
            )
          }}
          component={Quiz} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App