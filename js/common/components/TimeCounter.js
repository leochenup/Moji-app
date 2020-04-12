import React, { Component } from 'react'
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native'

const BEGIN_TIME_COUNT = 'BEGIN_TIME_COUNT'
const STOP_TIME_COUNT = 'STOP_TIME_COUNT'
const INIT_TIME_COUNT = 'INIT_TIME_COUNT'

export default class TimeCounter extends Component {


    constructor(props) {
        super(props)
        this.time = [0, 0, 0]
        this.state = {
            time: ['00', '00', '00'], //录音显示的时间
        }
    }

    componentDidMount() {
        // this._getTime()
        this.Listener1 = DeviceEventEmitter.addListener(BEGIN_TIME_COUNT, () => {
            this._getTime()
        })
        this.Listener2 = DeviceEventEmitter.addListener(STOP_TIME_COUNT, () => {
            clearInterval(this.timer)
        })
        this.Listener3 = DeviceEventEmitter.addListener(INIT_TIME_COUNT, () => {
            clearInterval(this.timer)
            this.time = [0, 0, 0]
            this.setState({
                time: ['00', '00', '00']
            })
        })
    }

    /**
  * 计时器时间数组获取
  */
    _getTime = () => {
        clearInterval(this.timer)
        let minutes = Number(this.time[0])
        let seconds = Number(this.time[1])
        let miniSeconds = Number(this.time[2])
       
        this.timer = setInterval(() => {
            
            if (miniSeconds % 60 === 0 && miniSeconds !== 0) {
                seconds++
                miniSeconds = 0
            }
            if (seconds % 60 === 0 && seconds !== 0) {
                minutes++
                seconds = 0
            }
            miniSeconds++
            this.time = [
                minutes < 10 ? '0' + minutes : minutes,
                seconds < 10 ? '0' + seconds : seconds,
                miniSeconds < 10 ? '0' + miniSeconds : miniSeconds
            ]
            console.log(this.time)
            this.setState({
                time: this.time
            })
        }, 1);
    }


    render() {
        const { time } = this.state
        return (
            <View style={styles.timeTextContainer}>
                <View style={styles.timeTextContainerinner}>
                    <Text style={styles.timeText}>{time[0]}</Text>
                    <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                    <Text style={styles.timeText}>{time[1]}</Text>
                    <Text style={[styles.timeText, { flex: 1 }]}>:</Text>
                    <Text style={styles.timeText}>{time[2]}</Text>
                </View>
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
    text: {
        fontSize: 30
    },
    timeTextContainer: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeTextContainerinner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
        width: '96%',
        borderWidth: 5,
        borderColor: 'rgb(241,241,241)',
        borderRadius: 25,
        paddingHorizontal: 20,
        backgroundColor: 'rgb(241,241,241)',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5, //android 设置阴影
    },
    timeText: {
        flex: 5,
        textAlign: 'center',
        ...Platform.select({
            ios: { fontSize: 70 },
            android: { fontSize: 60 }
        }),
        color: 'grey',
    },
})