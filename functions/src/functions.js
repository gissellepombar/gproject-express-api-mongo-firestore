import {dbConnect} from "./dbConnect.js";
import { mongoCredentials } from "../secrets.js";

const collectionName = mongoCredentials.COLLECTION;

/* Object
*********************************** */

// const contact1 = {
//     name: 'Mark Walb',
//     email: 'mark.w@gmail.com',
//     number: '9879879876',
//     company: 'Google',
//     meeting: 'Tee-Off TechHub'
// }


//Get: Get All
export async function getAllDoc(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName).find({}).limit(10).toArray();
    
    console.table(collection);
    res.send(collection);
}

//Post: Doc
export async function postDoc(req, res) {
    const newDoc = req.body
    // { "id": 1002, "first_name": "nugget", "last_name": "mojo", "email": "hoho@email.com", "ip_address":"yourmom"}
    // { "contact_id":1, "first_name": "Mark", "last_name": "Walb", "email":"mark.walb@gmail.com", "number": "9879879876", "company": "Google", "meeting":"Tee-Off TechHub"}


    const db = dbConnect();
    await db.collection(collectionName).insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send( {message: 'New Doc Inserted'});
}
