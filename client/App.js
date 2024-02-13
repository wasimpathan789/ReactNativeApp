import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// pages
import Intro from "./screens/Home";
import Login from "./Features/Auth/componenets/Login";
import Register from "./Features/Auth/componenets/Register";
import ResetPassword from "./Features/Auth/componenets/ResetPassword";
import Home from "./screens/Home";
import Account from "./screens/Account";
import Notification from "./screens/Notification";
import Cart from "./screens/CartPage";
import Address from "./Features/Account/Address";
import Language from "./Features/Account/Language";
import AddNewAddress from "./Features/Account/AddNewAddress";
import Product from "./screens/Product";
import ProductInfo from "./Features/product/components/ProductInfo";

// mongodb://localhost:27017
// colors
export const Color = {
  primary: "red",
  secondary: "blue",
  darkLight: "#9CA3AF",
  red: "red",
};
const { primary, secondary, darkLight, red } = Color;

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand-VariableFont_wght.ttf"),
    Raleway: require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
    PoppinsR: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="intro"
        >
          <Stack.Screen
            options={{ headerShown: "flase" }}
            name="intro"
            component={Intro}
          />
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="home"
            component={Home}
          />
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="product"
            component={Product}
          />
          <Stack.Screen
            screenOptions={{
              headerShown: false,
            }}
            name="productDescription"
            component={ProductInfo}
          />

          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen
            options={{ headerShown: "flase" }}
            name="reset"
            component={ResetPassword}
          />
          <Stack.Screen
            options={{ headerShown: "flase" }}
            name="account"
            component={Account}
          ></Stack.Screen>
          <Stack.Screen name="address" component={Address} />
          <Stack.Screen
            // options={{ headerShown: "false" }}
            name="newAddress"
            component={AddNewAddress}
          />
          <Stack.Screen name="language" component={Language} />

          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen
            options={{ headerShown: "flase" }}
            name="Cart"
            component={Cart}
          />

          {/* <Stack.Screen name="intro" component={Intro} /> */}
        </Stack.Navigator>
        {/* <View style={styles.container}>
       
        <Login />
    
      </View> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#92D533",
    // backgroundColor: "#4DBA79",
    alignItems: "center",
    justifyContent: "center",
  },
});
