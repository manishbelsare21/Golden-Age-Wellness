import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Greeting from "./Greeting";
import FoodOrYoga from "./FoodOrYoga";
import FoodGroup from "./FoodGroup";
import Results from "./Results";
import { SafeAreaView } from "react-native-safe-area-context";
import YogaResults from "./YogaResults";


const Stack = createNativeStackNavigator();


const Problems = ({ navigation }) => {
  return (
    <SafeAreaView>
    <View>
      <View>
        <Text style={styles.mainText}> -- Choice of betterment --</Text>
        <View >
          <Pressable style={[styles.input, { backgroundColor: "#FDEFB2" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "immunity" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Immunity </Text>
              <Image
                source={require("../images/Immunity.jpg")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.input, { backgroundColor: "#04B8AA" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "physical health" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Physical Health </Text>
              <Image
                source={require("../images/health.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.input, { backgroundColor: "#F5656F" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "mental health" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Mental Health </Text>
              <Image
                source={require("../images/mentalHealth.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.input, { backgroundColor: "#c973de" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "Blood" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Blood  </Text>
              <Image
                source={require("../images/Blood.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.input, { backgroundColor: "#F1CAAB" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "Vision" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Vision  </Text>
              <Image
                source={require("../images/Vision.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>


          <Pressable style={[styles.input, { backgroundColor: "#49C4E5" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "Heart" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Heart </Text>
              <Image
                source={require("../images/heart.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.input, { backgroundColor: "#F3BA26" }]} onPress={() => navigation.navigate('foodoryoga', { problem: "Arthritis" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Arthritis </Text>
              <Image
                source={require("../images/arthritis.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

          
          <Pressable style={[styles.input, { backgroundColor: "#8bf084" }]} onPress={() => navigation.navigate('foodoryoga', { problem:"Diabetes" })}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
              <Text style={styles.pressText}> Diabetes </Text>
              <Image
                source={require("../images/diabetes.png")}
                style={styles.pressImg}
              />
            </View>
          </Pressable>

        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};


const Dashboard = () => {

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="greetings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='greetings' component={Greeting} />
      <Stack.Screen name='problems' component={Problems} />
      <Stack.Screen name="foodoryoga" component={FoodOrYoga} />
      <Stack.Screen name="foodgroups" component={FoodGroup} />
      <Stack.Screen name="results" component={Results} />
      <Stack.Screen name="yogagroups" component={YogaResults} />
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Dashboard;

const styles = StyleSheet.create({
  mainText: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 500,
    textAlign: "center",
  },
  input: {
    height: 70,
    marginTop: 10,
    padding: 10,
    alignSelf: "center",
    width: "95%",
    borderRadius: 5,
    fontSize: 15,
    color: "white",
  },
  pressText: {
    fontSize: 20,
    paddingTop: 10,
  },
  pressImg: {
    height: 60,
    width: 60,
  },
});
