import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { } from 'react-native-gesture-handler'

export default class TransSoundToText extends Component {

    state = {
        isTrans: false,//是否开始z
    }

    render() {
        const { isTrans } = this.state
        return (
            <View style={styles.container}>
                {!isTrans ? (
                    <View style={styles.content}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={styles.toggleBtn}
                        >
                            <Text style={styles.btnText}>语音转文字</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '50%',
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5, //android 设置阴影
    },
    btnText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    toggleBtn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

})