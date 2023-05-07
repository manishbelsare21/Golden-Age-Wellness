import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'

const FoodOrYoga = ({ navigation, route }) => {
    return (
        <View>
            <View>
                <Text style={styles.mainText}> What you would like to focus on for your {route.params.problem} </Text>
                <View style={styles.btnContainer} >
                    <Pressable style={[styles.input, { backgroundColor: "#FDEFB2" }]} onPress={() => navigation.navigate('foodgroups', { ...route.params, focusOn: "food" })}>
                        <Text style={styles.pressText}> Food </Text>
                        <Image
                            source={require("../images/food.png")}
                            style={styles.pressImg}
                        />
                    </Pressable>

                    <Pressable style={[styles.input, { backgroundColor: "#CBDFDA" }]} onPress={() => navigation.navigate('yogagroups', { ...route.params, focusOn: "yoga" })}>

                        <Text style={styles.pressText}> Yoga </Text>
                        <Image
                            source={require("../images/yoga.png")}
                            style={styles.pressImg}
                        />
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default FoodOrYoga


const styles = StyleSheet.create({
    mainText: {
        marginTop: 70,
        fontSize: 25,
        fontWeight: 500,
        textAlign: "center",
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',

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
    },
    pressImg: {
        height: 100,
        width: 100,
    },
});
