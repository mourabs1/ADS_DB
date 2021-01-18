import React from 'react'

import { Button, Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const Historial = ({ navigation, route }) => {
	return(
		<View style={styles.container}>
			<Text>Oi</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
	title: {
		fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
	}
})

export default Historial