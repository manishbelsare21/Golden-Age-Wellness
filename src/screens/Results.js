import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ResultsData from './ResultsData';

const Results = ({ route, navigation }) => {
  const problem = route.params.problem
  const focusOn = route.params.focusOn
  const category = route.params.category

  const [finalRes, setFinalRes] = React.useState([])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      if (category === "Fruits") {
        var fruits = ResultsData.fruits
        var res = []
        fruits.map((data, index) => {
          {
            if (data.tags.includes(problem)) {
              // res.push(data.name)
              setFinalRes((prev) => [...prev, data])
            }
          }
          // setFinalRes(res);
        })
      }
      if (category === "Vegetables") {
        var Vegetables = ResultsData.Vegetables
        var res = []
        Vegetables.map((data, index) => {
          {
            if (data.tags.includes(problem)) {
              // res.push(data.name)
              setFinalRes((prev) => [...prev, data])
            }
          }
          // setFinalRes(res);
        })
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.mainText}> Best {route.params.category} to increase Your {route.params.problem} </Text>
      </View>
      <ScrollView contentContainerStyle={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {
          finalRes.map((data, index) => {
            return (
              <View style={{ margin: 20 }} key={index}>
                <Image
                  source={data.image}
                  style={styles.pressImg}
                />
                <Text style={styles.lable}> {data.name}</Text>
              </View>

            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Results

const styles = StyleSheet.create({
  mainText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 500,
    textAlign: "center",
  },
  lable: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    color: '#85088a',
    fontWeight: 600
  },
  pressImg: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
})