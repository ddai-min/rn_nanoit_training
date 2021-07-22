import React, { useReducer } from 'react';
import LogInIndex from './src/LogIn/LogInIndex';
import FriendIndex from './src/FriendIndex';

import { SocketTest } from './ws';
import { StoreProvider } from './context/storeContext';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const WebsocketContext = React.createContext({
    handleWebsocketClose: () => { }
})

export default function _App() {
    const { handleWebsocketClose } = SocketTest()
    const value = React.useMemo(() => ({ handleWebsocketClose }), [handleWebsocketClose])


    return (
        <WebsocketContext.Provider value={value}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LogInIndex"
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="LogInIndex" component={LogInIndex}></Stack.Screen>
                    <Stack.Screen name="FriendIndex" component={FriendIndex}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </WebsocketContext.Provider>
    );
}

