let ObjectID = require('mongodb').ObjectID;

module.exports = function({db}) {
  let collection = db.collection('users');

  async function insert({username, password="defpass"}) {
    let response = await collection.insertOne({username, password});
    return {count: response.insertedCount};
  }

  async function remove({_id}) {
    let response = await collection.deleteOne({_id: new ObjectID(_id)});
    return {count: response.result.n};
  }

  async function find({_id, ...other}) {
    let query = {...other};
    if (_id) Object.assign(query, {_id: new ObjectID(_id)});
    return await collection.find(query).toArray();
  }

  return {
    insert,
    remove,
    find,
  };
};
