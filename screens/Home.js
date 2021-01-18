import React from 'react'

import { Button, Header, Input } from 'react-native-elements'
import { View, StyleSheet, Text } from 'react-native'

import { consultCep, salveCep } from '../services/historial'
import { consultAddress } from '../services/apiCep'

const Home = ({ navigation }) => {
	const [cep, setCep] = React.useState('')
	
	const search = async () => {
		const address = await consultAddress(cep)
		const historial = {
			id: address.cep,
			logradouro: address.logradouro,
			bairro: address.bairro,
			cidade: address.cidade,
			uf: address.uf
		}

		await salveCep(historial)

		navigation.navigate('Cep', address)
	}

	const consult = async () => {
		const consultHistorial = await consultCep()
		navigation.navigate('Historial')
		console.log(consultHistorial)
	}

	return(
		<>
			<Header 
				centerComponent={{ text: 'BUSCAR CEP', style: { color: '#FFF' }}}
				rightComponent={{ icon: 'home', color: '#FFF' }} />
			<View style={styles.container}>
				<Text style={styles.title}>Busque o CEP</Text>
				<Input 
					placeholder="Digite aqui..."
					onChangeText={(text) => setCep(text)} />
				<Button 
					title='CONFIRMAR'
					onPress={() => search() } />
			</View>
			<Button 
				title='HISTÓRICO'
				onPress={() => consult() } />
		</>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
	},
});

export default Home