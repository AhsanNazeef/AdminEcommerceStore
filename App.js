import * as React from "react";
import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Alert,
	StatusBar,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppButton = (props) => {
	const disable = props.disabled || false;
	const onPress = props.onPress || function () {};
	const title = props.title || "Button";
	const style = props.style || { width: "100%" };
	const txt_style = props.txt_style || { fontSize: 32 };

	return (
		<TouchableOpacity onPress={onPress} style={style} disabled={disable}>
			<Text style={txt_style}>{title}</Text>
		</TouchableOpacity>
	);
};

const DetailScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Detail Screen</Text>
		</View>
	);
};

const ListScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text>{route.params.listOf} Screen</Text>
		</View>
	);
};

const StartScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<AppButton
				title={"Manage Products"}
				style={styles.btn_start_screen}
				txt_style={styles.btn_start_screen_txt}
				onPress={() => navigation.navigate("Products", { listOf: "Products" })}
			/>
			<View style={styles.padder}></View>
			<AppButton
				title={"Manage Employee"}
				style={styles.btn_start_screen}
				txt_style={styles.btn_start_screen_txt}
				onPress={() => navigation.navigate("Employee", { listOf: "Employee" })}
			/>
			<View style={styles.padder}></View>
			<AppButton
				title={"Manage Order"}
				style={styles.btn_start_screen}
				txt_style={styles.btn_start_screen_txt}
				onPress={() => navigation.navigate("Order", { listOf: "Order" })}
			/>
		</View>
	);
};

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Start"
				screenOptions={{
					headerTintColor: "white",
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "black",
					},
				}}
			>
				<Stack.Screen
					name="Start"
					component={StartScreen}
					options={{ title: "Admin View" }}
				/>
				<Stack.Screen name="List" component={ListScreen} />
				<Stack.Screen name="Detail" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
const styles = StyleSheet.create({
	btn_start_screen_txt: {
		color: "white",
		fontSize: 20,
	},
	btn_start_screen: {
		backgroundColor: "crimson",
		padding: 10,
		borderRadius: 5,
	},
	padder: {
		paddingTop: 5,
	},

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
