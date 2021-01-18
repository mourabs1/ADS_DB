const CepSchema = { 
	name: 'CepDb',
	primaryKey: 'id',
	properties: {
		id: 'string',
		logradouro: 'string',
		bairro: 'string',
		cidade: 'string',
		uf: 'string',
	}
}

export default CepSchema