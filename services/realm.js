import Realm from 'realm'
import CepSchema from '../schemas/CepSchema'

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [CepSchema],
        schemaVersion: 1,
    })

    console.log(realm)
    return realm
}