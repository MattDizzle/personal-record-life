import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
export const Spinner = ({size}) => (
    <View style={styles.spinnerStyle}>
       
        <ActivityIndicator size={size || 'small'} color="#00ff10" />
    </View>
)


const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:50,
        height:20
    }
})

export default Spinner