import { View, Text, StyleSheet, ImageBackground, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button, Pressable, Alert } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


import { setUser, removeUser } from '../../redux/reducers/UserAuth';
import { useDispatch } from 'react-redux'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height




const Welcome = ({ navigation }) => {

    const [name, onChangeName] = React.useState('');

    const dispatch = useDispatch()


    return (
        <View style={styles.container} >
            <ImageBackground source={require('../images/Welcome.jpeg')} resizeMode="cover" style={styles.image}>
                <View style={styles.overlay} />
                <View>
                    <Text style={styles.header}>Welcome</Text>
                    <Text style={{ color: 'white', fontSize: 20, textAlign:'center', fontStyle:'italic' }}>
                        Age is no barrier. It's a limitation you put on your mind."
                    </Text>
                    <Text style={{ textAlign: 'right', color: 'white' }}>- Jackie Joyner-Kersee</Text>

                </View>

                <KeyboardAvoidingView
                    behavior={'padding'} style={{ bottom: 20 }}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder='Enter your name'
                            placeholderTextColor={"black"}
                        />
                        <Pressable style={[styles.input, { backgroundColor: '#31ac47', alignItems: 'center' }]} onPress={() => {
                            if (name.length > 1) {
                                dispatch(setUser({ name: name }))
                            }else{
                                Alert.alert('Invalid Name','Please Enter your name')
                            }
                        }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Start your journey</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>

            </ImageBackground>
            <StatusBar style='auto' />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: WIDTH,
        height: HEIGHT,
        top: 0,
        left: 0,
        paddingVertical: 50,
        paddingHorizontal: 10
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        height: HEIGHT,
        width: WIDTH,
        top: 0,
        left: 0,


    },
    header: {
        fontSize: 45,
        color:'white',
        textAlign: 'center',
        fontWeight:'bold',
    },
    input: {
        height: 40,
        margin: 2,
        padding: 10,
        backgroundColor: '#c9cbcd59',
        width: WIDTH - 50,
        borderRadius: 10,
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
});



export default Welcome

