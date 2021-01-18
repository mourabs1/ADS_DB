import React from 'react';
import { Header, Button, Text } from 'react-native-elements'
import { View, StyleSheet } from 'react-native';

const Cep = ({ navigation, route }) => {
	return(
		<>
			<Header 
				centerComponent={{ text: 'CEP', style: { color: '#FFF' }}} />
			<View style={styles.container}>
				<Text h4>Lograd.: {route.params.logradouro}</Text>
				<Text h4>Bairro: {route.params.bairro}</Text>
				<Text h4>Cidade: {route.params.cidade}</Text>
				<Text h4>UF: {route.params.uf}</Text>
				<Button 
					title='VOLTAR' 
					onPress={() => navigation.goBack()}/>
			</View>
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
		fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
	}
})

export default Cep

/*export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cep: ''
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.name}>Busque seu CEP</Text>
        <Input 
          placeholder="Digite aqui..."
          onChangeText={cep => this.setState({cep})} />
        <Button 
          title='Confirmar'
          onPress={() => this.searchCep() } />
        <Text></Text>
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
  name: {
    fontSize: 20
  },
})*/
