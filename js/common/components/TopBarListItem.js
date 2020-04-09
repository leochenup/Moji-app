import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


/*
list :[
    {
        title: '设置',
        isChecked: false,
        onPress: ()=>{...}
    }
]
*/

export default class TopBarListItem extends Component {

    state = {
        isChecked: this.props.item.isChecked
    }

    render() {
        let { item, length, index } = this.props
        return (
            <>
                <TouchableOpacity style={styles.listItem}
                    onPress={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                        item.onPress()
                    }}
                >
                    <Text>{item.title}</Text>
                    {item.isShowArrow //是否显示勾勾
                        ? <MaterialCommunityIcons name='check' size={26} style={styles.check}
                            color={this.state.isChecked ? 'green' : 'rgb(241,241,241)'}
                        />
                        : null}
                </TouchableOpacity>
                { //分割线
                    length - 1 !== index
                        ? (
                            <View
                                style={{ width: '100%', height: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
                            </View>
                        )
                        : null
                }
            </>
        )
    }
}


{/* <View style={{ width: '100%', height: 0.1, backgroundColor: 'rgba(0,0,0,0.1)' }}></View> */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    },
    listItem: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    check: {
        position: 'absolute',
        right: 20
    }
})