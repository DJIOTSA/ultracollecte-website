import { User } from '@/payload-types';
import { generateRandomCode } from '@/utils/generateRandomCode';
import { CollectionBeforeChangeHook } from 'payload';


export const generateUserCode: CollectionBeforeChangeHook<User> = async ({ req, data, operation }) => {
    if(operation === 'create'){
        const payload = req.payload;
        let code = generateRandomCode('USR', 18);
        let isUniquecode = false;

        // make sure no user have the same code
        async function countUserWithCode(code: string){
            const user = await payload.count({
                collection: 'users',
                where: {
                    code: {
                        equals: code,
                    },
                },
            })
            return user;
        }
        
        while(!isUniquecode){
            const user = await countUserWithCode(code);
            if(user.totalDocs > 0){
                code = generateRandomCode('USR', 18);
            }else{
                isUniquecode = true;
            }
        }

        data.code = code;
    }
    return data;
}