import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, DeviceEventEmitter } from 'react-native'
import NavigationTopBar from '../components/NavigationTopBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import WaveAnimation from '../components/WaveAnimation'
import TimeCounter from '../components/TimeCounter'
import RecordSoundPlay from '../components/RecordSoundPlay'
import TransSoundToText from '../components/TransSoundToText'

const BEGIN_WAVE = 'BEGIN_WAVE'
const STOP_WAVE = 'STOP_WAVE'
const HORIZONTAL = 'HORIZONTAL'

const BEGIN_TIME_COUNT = 'BEGIN_TIME_COUNT'
const STOP_TIME_COUNT = 'STOP_TIME_COUNT'
const INIT_TIME_COUNT = 'INIT_TIME_COUNT'


export default class SoundRecordingPage extends Component {

    constructor(props) {
        super(props)
        this.time = [0, 0, 0]
        this.state = {
            isBegin: false, //录音是否开始
            isPause: false, //录音是否暂停
            isSubmit: false, //是否提交录音
            time: ['00', '00', '00'], //录音显示的时间
        }
    }

    /*********************** 以下是所用组件 *****************************/

    /**
     * 顶部按钮组件
     */
    _getTopBarLeftBtn = () => {
        let { navigation } = this.props
        return (
            <TouchableOpacity
                onPress={() => {
                    DeviceEventEmitter.emit(INIT_TIME_COUNT, 'INIT_TIME_COUNT')
                    navigation.goBack()
                }}
            >
                <MaterialCommunityIcons
                    name={Platform.OS === 'ios' ? 'chevron-left' : 'chevron-down'}
                    size={26}
                    style={{ marginLeft: 20 }}
                />
            </TouchableOpacity>
        )
    }


    /**
     * 返回录音使时间组件
     */
    _getTopContent = () => {
        const { isSubmit } = this.state
        return (
            <>{!isSubmit ? <TimeCounter /> : <RecordSoundPlay {...this.props} deleteRcord={this.deleteWhileRcording} />}</>
        )
    }

    /**
     * 返回声音波动组件
     */
    _getSoundWave = () => {
        const { isSubmit } = this.state
        return (
            // <>{isSubmit ? <WaveAnimation /> : < WaveAnimation />}</>
            <WaveAnimation />
        )
    }

    /**
     * 返回操作组件
     */
    _getControlBar = () => {
        const { navigation } = this.props
        const { isBegin, isPause, isSubmit } = this.state
        // const backgroundColor = !isBegin ? '#1E90FF' : isPause ? '#FA8072' : '#3CB371'
        const backgroundColor = !isBegin ? 'rgb(241,241,241)' : isPause ? 'rgb(241,241,241)' : 'rgb(241,241,241)'
        return (
            <>
                {!isSubmit ? (
                    <>
                        {isBegin ? (<View style={styles.deleteBtnContainer}>
                            <TouchableOpacity
                                style={styles.miniBtn}
                                onPress={() => {
                                    this.deleteWhileRcording()
                                }}
                            >
                                <MaterialCommunityIcons
                                    name='loop'
                                    size={30}
                                    color='grey'
                                    style={{ ...Platform.select({ ios: { marginLeft: 1, marginTop: 1.5 } }) }}
                                />
                            </TouchableOpacity>
                        </View>) : null}


                        <View style={styles.recordBtnContainer}>
                            <TouchableOpacity
                                style={[styles.recordBtn, { backgroundColor }]}
                                onPress={() => {
                                    this.recordingControl()
                                }}
                            >
                                <MaterialCommunityIcons
                                    name={!isBegin ? 'microphone' : isPause ? 'play' : 'pause'}
                                    size={50}
                                    color='grey'
                                />
                            </TouchableOpacity>
                        </View>

                        {isBegin ? (<View style={styles.saveBtnContainer}>
                            <TouchableOpacity
                                style={styles.miniBtn}
                                onPress={() => {
                                    this.recordingOver()
                                }}
                            >
                                <MaterialCommunityIcons
                                    name='check'
                                    size={30}
                                    color='grey'
                                    style={{ ...Platform.select({ ios: { marginLeft: 1, marginTop: 1.5 } }) }}
                                />
                            </TouchableOpacity>
                        </View>) : null}
                    </>
                ) : (
                        <>
                            <View style={styles.controlBtnContainer}>
                                <View style={styles.controlBtn}>
                                    <TouchableOpacity
                                        style={styles.Btn}
                                        onPress={() => {
                                            navigation.navigate('TransPage')
                                        }}
                                    >
                                        <Text style={styles.btnText}>语音转文字</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.controlBtn, { backgroundColor: '#FA8072' }]}>
                                    <TouchableOpacity
                                        style={styles.Btn}
                                        onPress={() => {
                                            navigation.navigate('HomePage')
                                        }}
                                    >
                                        <Text style={styles.btnText}>保存语音</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    )
                }
            </>

        )
    }

    /**
     * 返回头部导航栏组件
     */
    _getTopBar = () => {
        const statusBar = {
            barStyle: 'dark-content',
            hidden: false,
            backgroundColor: 'rgba(241,241,241,1)'
        }
        const TopBar = (
            <NavigationTopBar
                title='语音文件录制'
                style={styles.topBar}
                statusBar={statusBar}
                leftButton={this._getTopBarLeftBtn()}
            />
        )
        return TopBar
    }



    /*********************** 以下是功能方法 *****************************/


    /**
     * 录音时删除录音
     */
    deleteWhileRcording = () => {
        clearInterval(this.timer)
        this.setState({
            isBegin: false,
            isPause: false,
            isSubmit: false,
        })
        DeviceEventEmitter.emit(STOP_WAVE, 'STOP_WAVE')
        DeviceEventEmitter.emit(INIT_TIME_COUNT, 'INIT_TIME_COUNT')
    }


    /**
     * 录音控制
     */
    recordingControl = () => {
        const { isBegin } = this.state
        if (!isBegin) { //如果录音没开始
            // this._getTime()
            DeviceEventEmitter.emit(BEGIN_TIME_COUNT, 'BEGIN_TIME_COUNT')
            this.setState({
                isBegin: !this.state.isBegin,
            })
            DeviceEventEmitter.emit(BEGIN_WAVE, 'BEGIN_WAVE')
        } else { //录音开始
            if (this.state.isPause) { //录音是否暂停
                DeviceEventEmitter.emit(BEGIN_WAVE, 'BEGIN_WAVE')
                DeviceEventEmitter.emit(BEGIN_TIME_COUNT, 'BEGIN_TIME_COUNT')
            } else {
                clearInterval(this.timer)
                DeviceEventEmitter.emit(STOP_WAVE, 'STOP_WAVE')
                DeviceEventEmitter.emit(STOP_TIME_COUNT, 'STOP_TIME_COUNT')
            }
            this.setState({
                isPause: !this.state.isPause,
            })
        }
    }

    /**
     * 录音完毕
     */
    recordingOver = () => {
        this.setState({
            isSubmit: !this.state.isSubmit,
        })
        DeviceEventEmitter.emit(HORIZONTAL, 'HORIZONTAL')
        DeviceEventEmitter.emit(INIT_TIME_COUNT, 'INIT_TIME_COUNT')
    }

    render() {
        return (
            <View style={styles.container}>
                {this._getTopBar()}
                <View style={styles.topContentContainer}>
                    {this._getTopContent()}
                </View>

                <View style={styles.middleContentContainer}>
                    {this._getSoundWave()}
                </View>

                <View style={styles.controlContainer}>
                    {this._getControlBar()}
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey'
    },
    topBar: {
        width: '100%',
        backgroundColor: 'rgba(241,241,241,1)',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2 //android 设置阴影
    },
    controlContainer: {
        width: '100%',
        ...Platform.select({
            ios: { height: '20%', },
            android: { height: '25%', }
        }),
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    recordBtnContainer: {
        width: 80,
        alignItems: 'center'
    },
    recordBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#1E90FF',
        borderRadius: 40,
        borderColor: '#dcdcdc',
        borderWidth: 2,
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5 //android 设置阴影
    },
    deleteBtnContainer: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveBtnContainer: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniBtn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: 'rgb(241,241,241)',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5 //android 设置阴影
    },
    topContentContainer: {
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: "center"
    },
    timeTextContainer: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContentContainer: {
        width: '100%',
        height: '35%',
        borderBottomWidth: 0.3,
        borderTopWidth: 0.3,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    controlBtnContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    controlBtn: {
        width: '50%',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        // backgroundColor: '#1E90FF',
        backgroundColor: 'orange',
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5 //android 设置阴影
    },
    Btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    }
})