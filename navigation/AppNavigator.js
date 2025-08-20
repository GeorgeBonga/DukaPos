import React, { useState, useEffect, useContext } from "react";
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  Platform, 
  StatusBar 
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// Screens (ensure these are imported correctly)
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ScanProducts from "../screens/ScanProducts";
import SalesReport from "../screens/SalesReport";
import ExpenseReport from "../screens/ExpenseReport";
import SettingsScreen from "../screens/SettingsScreen";
import Products from "../screens/Products";
import Home from "../screens/Home";
import DashBoardScreen from "../screens/DashBoardScreen";
import Reports from "../screens/Reports";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { ThemeContext } from "../theme/ThemeContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const { width, height } = Dimensions.get("window");


const responsiveSize = (baseSize) => {
  const standardScreenHeight = 812; 
  return baseSize * (height / standardScreenHeight);
};

function MainTabNavigator() {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: theme.colors.secondary,
            // Remove elevation on iOS to match native look
            ...Platform.select({
              android: { elevation: 1 },
              ios: { shadowOpacity: 0.1 }
            })
          },
        ],
        tabBarIcon: ({ focused }) => {
          let iconName;
          const iconColor = focused ? theme.colors.color : theme.colors.color;
          const iconSize = responsiveSize(24); // Consistent icon sizing

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "DashBoardScreen") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "Reports") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "SettingsScreen") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <View style={styles.iconContainer}>
              <Ionicons name={iconName} size={iconSize} color={iconColor} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Tab.Screen
        name="ScanProducts"
        component={ScanProducts}
        options={{
          tabBarIcon: ({ focused }) => {
            const scanIconSize = responsiveSize(30);
            const scanContainerSize = scanIconSize * 1.8;

            return (
              <View
                style={[
                  styles.scanProductsIcon,
                  {
                    backgroundColor: theme.colors.secondary,
                    width: scanContainerSize,
                    height: scanContainerSize,
                    borderRadius: scanContainerSize / 2,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="barcode-scan"
                  size={scanIconSize}
                  color={theme.colors.color}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  const [darkmode, setDarkmode] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const listener = EventRegister.addEventListener("changetheme", (data) => {
      setDarkmode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

  return (
    <ThemeContext.Provider value={darkmode ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoardingScreen"
          screenOptions={{
            headerShown: false,
            // Add safe area handling
            ...Platform.select({
              ios: { 
                headerTopInset: StatusBar.currentHeight || 0 
              }
            })
          }}
        >
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ExpenseReport" component={ExpenseReport} />
          <Stack.Screen name="SalesReport" component={SalesReport} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen 
            name="MainTabNavigator" 
            component={MainTabNavigator} 
            options={{ animation: 'fade' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        height: responsiveSize(60),
        paddingBottom: responsiveSize(10),
        paddingTop: responsiveSize(5),
      },
      android: {
        height: responsiveSize(50),
        paddingBottom: responsiveSize(5),
        paddingTop: responsiveSize(5),
      }
    }),
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveSize(60),
    height: "100%",
  },
  scanProductsIcon: {
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    top: Platform.OS === 'ios' 
      ? -responsiveSize(25) 
      : -responsiveSize(20),
  },
});