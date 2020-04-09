import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity, TouchableHighlight } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const TIMES = 200

export default class FunctionPage extends Component {


    render() {
        let { fncConStyle, onClose } = this.props

        return (
            <View style={[styles.container, { ...fncConStyle }]}>
                <View style={styles.topContainer}>
                    <Image
                        source={require('../common/images/moji.png')}
                        style={styles.logoImage}
                    />
                    <Text style={{ color: '#8c8c8c', fontSize: 10 }}>— 📝记录，成为更好的自己 —</Text>
                </View>
                <View style={{ width: '100%', ...Platform.select({ ios: { marginTop: 350 }, android: { marginTop: 200 } }) }}>
                    <View style={styles.iconContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={styles.iconborder}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='format-float-left' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>新建笔记</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#3CB371' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='cube-scan' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>文档扫描</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#FA8072' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='microphone' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>语音速记</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#1E90FF' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='alpha-m-box' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>Markdown</Text>
                        </View>

                    </View>
                    <View style={[styles.iconContainer, { marginTop: 30 }]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#DA70D6' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='file-upload-outline' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>上传文件</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#3CB371' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='wallpaper' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>上传图片</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: '#1E90FF' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='lead-pencil' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>手写笔记</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight
                                style={[styles.iconborder, { backgroundColor: 'orange' }]}
                                onPress={() => {
                                    console.log('TouchableHighlight');
                                }}
                            >
                                <MaterialCommunityIcons name='all-inclusive' color='white' size={36} />
                            </TouchableHighlight>
                            <Text style={styles.fucText}>链接收藏</Text>
                        </View>

                    </View>
                    <View style={{ width: "100%", alignItems: 'center', marginTop: 50 }}>
                        <TouchableOpacity
                            onPress={() => {
                                onClose()
                            }}>
                            <MaterialCommunityIcons name='close-circle-outline' color='orange' size={36} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 50
    },
    topContainer: {
        width: "100%",
        alignItems: 'center'
    },
    iconContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconborder: {
        backgroundColor: 'orange',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    fucText: {
        fontSize: 10,
        color: '#8c8c8c'
    },
    logoImage: {
        width: 150,
        height: 100
    },
})