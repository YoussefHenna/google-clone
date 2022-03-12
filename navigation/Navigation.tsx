import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Location } from "../model/Location";
import MapPage from "../pages/map/MapPage";
import SearchPage from "../pages/search/SearchPage";

export type RootStackParamList = {
  Search: undefined;
  Map: { location: Location };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Search">
        <RootStack.Screen
          name="Search"
          component={SearchPage}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Map" component={MapPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
