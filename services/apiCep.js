import axios from 'axios'

export const consultAddress = async (cep) => {
	var response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
		
		const ende = {
			logradouro: response.data.logradouro,
			bairro: response.data.bairro,
			cidade: response.data.localidade,
			uf: response.data.uf,
		}
		
		//console.log(ende)
		return ende
}