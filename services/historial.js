import { getRealm } from './realm'

export const salveCep = async (cep) => {
    const realm = await getRealm()

    try {
        realm.write(() => {
						realm.create('CepDb', cep, true)
        })
    } catch (error) {
        console.log(error)
    }  
}

export const consultCep = async () => {
	try {
		const realm = await getRealm()
		console.log(realm.objects('CepDb'))
		return realm.objects('CepDb')
	} catch (err) {
		console.log(err)
	}
}