import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import NavigationTopBar from '../common/components/NavigationTopBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class PhotoPage extends Component {

    _getTopBarLeftBtn = () => {
        let { navigation } = this.props
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <MaterialCommunityIcons
                    name={Platform.OS === 'ios' ? 'chevron-left': 'chevron-down'}
                    size={26}
                    style={{ marginLeft: 20 }}
                />
            </TouchableOpacity>
        )
    }

    render() {
        const statusBar = {
            barStyle: 'dark-content',
            hidden: false,
            backgroundColor: 'rgba(241,241,241,1)'
        }
        const TopBar = (
            <NavigationTopBar
                title='照相'
                style={styles.topBar}
                statusBar={statusBar}
                leftButton={this._getTopBarLeftBtn()}
            />
        )
        return (
            <View style={styles.container}>
                {TopBar}
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 30
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
})