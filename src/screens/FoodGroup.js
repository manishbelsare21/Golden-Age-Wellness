import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'

const foodGroups = [
    {
        "name": "Fruits",
        "bgColor": "#FDEFB2",
        "image": require("../images/fruits.png")
    },
    {
        "name": "Vegetables",
        "bgColor": "#CBDFDA",
        "image": require("../images/vegetables.png")
    },
    
]

const FoodGroup = ({ navigation, route }) => {
    return (
        <View>
            <View>
                <Text style={styles.mainText}> Select your appropriate </Text>
                <View style={styles.btnContainer} >

                    {
                        foodGroups.map((data, index) => {
                            return (
                                <Pressable key={`${data.name}_${index}`} style={[styles.input, { backgroundColor: data.bgColor }]} onPress={() => navigation.navigate('results', { ...route.params, category: data.name })}>

                                    <Text style={styles.pressText}> {data.name} </Text>
                                    <Image
                                        source={data.image}
                                        style={styles.pressImg}
                                    />
                                </Pressable>
                            )
                        })
                    }

                </View>
            </View>
        </View>
    )
}

export default FoodGroup


const styles = StyleSheet.create({
    mainText: {
        marginTop: 70,
        fontSize: 25,
        fontWeight: 500,
        textAlign: "center",
        marginBottom: 30
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
