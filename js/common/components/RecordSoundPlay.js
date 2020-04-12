import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BEGIN_WAVE = 'BEGIN_WAVE'
const STOP_WAVE = 'STOP_WAVE'
const HORIZONTAL = 'HORIZONTAL'

export default class RecordSoundPlay extends Component {

    state = {
        isPlay: false
    }

    render() {
        const { deleteRcord, navigation } = this.props
        const { isPlay } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>新音频</Text>
                </View>

                <View style={styles.processContainer}>
                    <View style={styles.processOut}>
                        <View style={styles.processInner}></View>
                        <View style={styles.processDot}></View>
                    </View>
                    <View style={styles.timeTextContainer}>
                        <View style={styles.time}>
                            <Text style={styles.timeText}>00</Text>
                            <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                            <Text style={styles.timeText}>00</Text>
                            <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                            <Text style={styles.timeText}>00</Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.timeText}>00</Text>
                            <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                            <Text style={styles.timeText}>00</Text>
                            <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                            <Text style={styles.timeText}>15</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.controlContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity
                            onPress={() => {
                                DeviceEventEmitter.emit(STOP_WAVE, 'STOP_WAVE')
                                deleteRcord()
                                navigation.goBack()
                            }}
                        >
                            <MaterialCommunityIcons
                                name='trash-can-outline'
                                size={26}
                                color='grey'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.icon}>
                        <TouchableOpacity
                            onPress={() => {
                                if (isPlay) {
                                    DeviceEventEmitter.emit(STOP_WAVE, 'STOP_WAVE')
                                } else {
                                    DeviceEventEmitter.emit(BEGIN_WAVE, 'BEGIN_WAVE')
                                }
                                this.setState({
                                    isPlay: !isPlay
                                })
                            }}>
                            <MaterialCommunityIcons
                                name={isPlay ? 'pause' : 'play'}
                                size={26}
                                color='grey'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.icon}>
                        <TouchableOpacity
                            onPress={() => {
                                deleteRcord()
                               
                            }}
                        >
                            <MaterialCommunityIcons
                                name='loop'
                                size={26}
                                color='grey'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgb(241,241,241)',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5, //android 设置阴影
    },
    titleContainer: {
        height: '20%',
        // paddingLeft: 27,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: 'grey'
    },
    processContainer: {
        height: '40%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    processOut: {
        width: '85%',
        height: 4,
        borderRadius: 2,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    processInner: {
        width: "50%",
        height: 4,
        borderRadius: 2,
        backgroundColor: '#1E90FF'
    },
    processDot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#1E90FF',
        marginLeft: -7.5
    },
    timeTextContainer: {
        width: '85%',
        paddingVertical: 15,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time: {
        flexDirection: 'row',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeText: {
        flex: 4,
        textAlign: 'center',
        // borderWidth: 1
        color: '#696969'
    },

    controlContainer: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(241,241,241)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5 //android 设置阴影
    }
})