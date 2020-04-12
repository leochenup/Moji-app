import React, { Component } from 'react'
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native'

const BEGIN_WAVE = 'BEGIN_WAVE'
const STOP_WAVE = 'STOP_WAVE'
const HORIZONTAL = 'HORIZONTAL'
let COLORS = ['#3CB371', '#1E90FF', '#DA70D6', '#FA8072', '#3CB371', '#1E90FF', 'orange']

export default class WaveAnimation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            array: this.getArry(false),
            isFirst: true
        }
    }

    componentDidMount() {
        this.Listener1 = DeviceEventEmitter.addListener(BEGIN_WAVE, () => {
            this.move()
        })
        this.Listener2 = DeviceEventEmitter.addListener(STOP_WAVE, () => {
            clearInterval(this.timer)
        })
        this.Listener3 = DeviceEventEmitter.addListener(HORIZONTAL, () => {
            clearInterval(this.timer)
            this.setState({
                array: this.getArry(true),
                isFirst: true
            })
        })
    }



    getArry = (isFirst) => {
        let array = []
        let number
        let index
        for (let i = 0; i < 30; i++) {
            number = Math.random()
            index = Math.floor(number * 6)
            array.push({
                height: number * 150,
                backgroundColor: COLORS[index]
                // backgroundColor: 'grey'
            })
        }
        return array
    }

    move = () => {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.setState({
                array: this.getArry()
            })
        }, 200)
    }

    render() {
        let { array } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    {array.map(({ height, backgroundColor }, index) => {
                        return <View ref={'item' + index} key={height + 'item' + index} style={[styles.item, { height, backgroundColor }]}></View>
                    })}
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
    content: {
        width: '96%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgb(241,241,241)',
        // shadowColor: 'gray',//iOS 设置阴影
        // shadowOffset: { width: 0.5, height: 0.5 },
        // shadowOpacity: 0.4,
        // shadowRadius: 5,
        // elevation: 5, //android 设置阴影
        paddingHorizontal: 10
    },
    item: {
        width: 6,
        backgroundColor: 'grey',
        borderRadius: 20
    }
})