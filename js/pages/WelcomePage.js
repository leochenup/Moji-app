import React, { Component } from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    LayoutAnimation,
    NativeModules,
    Platform
} from 'react-native'
import Swiper from 'react-native-swiper';

//android 使用 LayoutAnimation 的动画设置
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class WelcomePage extends Component {

    state = {
        top: 0
    }

    _onGetStart = () => {
        LayoutAnimation.easeInEaseOut()
        this.setState({
            top: `${this.state.top + 100}%`
        })
    }

    render() {
        return (
            <View style={[styles.container, { top: this.state.top }]}>
                <Swiper
                    showsButtons={true} //是否显示切页按钮
                    paginationStyle={{ //设置 分页点的样式
                        ...Platform.select({
                            ios: {
                                marginBottom: '25%'
                            },
                            android: {
                                marginBottom: '7%'
                            }
                        })
                    }}
                    loop={false} //是否循环滑动
                >
                    <View style={styles.slide1}>
                        <Image
                            source={require('../common/images/moji.png')}
                            style={styles.logoImage}
                        />
                        <Text style={[styles.text, { color: 'grey' }]}>Easy to record</Text>
                        <Image
                            source={require('../common/images/welcome1.png')}
                            style={{ width: 270, height: 250, marginTop: '20%' }}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={require('../common/images/moji.png')}
                            style={styles.logoImage}
                        />
                        <Text style={[styles.text, { color: 'grey' }]}>Multiple files</Text>
                        <Image
                            source={require('../common/images/welcome2.png')}
                            style={{ width: 260, height: 250, marginTop: '20%' }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={require('../common/images/moji.png')}
                            style={styles.logoImage}
                        />
                        <Text style={[styles.text, { color: 'grey' }]}>Easy to share</Text>
                        <Image
                            source={require('../common/images/welcome3.png')}
                            style={{ width: 270, height: 250, marginTop: '20%' }}
                        />
                        <TouchableOpacity
                            style={styles.getStartButton}
                            onPress={this._onGetStart}
                        >
                            <Text style={styles.buttonText}>Get start</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
                <View style={styles.message}>
                    <Text style={styles.messageText}>© {new Date().getFullYear()} moji app by Leochenup</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
    },
    getStartButton: {
        width: 100,
        height: 40,
        backgroundColor: '#97CAE5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                marginTop: 50,
            },
            android: {
                marginTop: 10
            }
        })
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    slide1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slide3: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    logoImage: {
        width: 150,
        height: 100,
        ...Platform.select({
            ios: {
                marginTop: '30%',
            },
            android: {
                marginTop: '20%',
            }
        })
    },
    message: {
        width: '100%',
        position: 'absolute',
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageText: {
        fontSize: 11,
        color: '#8c8c8c'
    }
});