import { View, Text, StyleSheet, Pressable, Image, Dimensions, ScrollView, Linking } from 'react-native'
import React from 'react'
import YogaResultData from './YogaResultData'


const YogaResults = ({ navigation, route }) => {

    const [finalRes, setFinalRes] = React.useState([])
    const problem = route.params.problem

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            YogaResultData.map((data, index) => {
                if (data.tags.includes(problem)) {
                    // res.push(data.name)
                    setFinalRes((prev) => [...prev, data])
                }

            })
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);


    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.mainText}> Yoga can be a great way to boost your {route.params.problem} </Text>
            <Text style={styles.secondText}> some yoga poses that can help:</Text>


            <ScrollView contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
            }}>
                {
                    finalRes.map((data, index) => {
                        return (
                            <Pressable key={index} style={[styles.input, { backgroundColor: '#aaccdd' }]}
                                onPress={() => Linking.openURL(data.link)}>

                                <Image
                                    source={data.image}
                                    style={styles.pressImg}
                                />
                                <Text style={styles.pressText}> {data.name} </Text>
                            </Pressable>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default YogaResults


const styles = StyleSheet.create({
    mainText: {
        marginTop: 10,
        fontSize: 35,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 10,
        padding: 20
    },
    secondText: {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
        padding: 20
    },
    input: {
        width: (Dimensions.get('screen').width - 40) / 2,
        height: (Dimensions.get('screen').width - 40) / 2,
        margin: 10,
        borderRadius: 5,
        fontSize: 15,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'

    },
    pressText: {
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center'
    },
    pressImg: {
        height: 100,
        width: 100,
    },
});
