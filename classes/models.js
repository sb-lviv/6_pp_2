let ObjectID = require('mongodb').ObjectID;
let user = require('./user.js');
let post = require('./post.js');

const proto = {
  collection: null,
  pick_fields: null,

  insert: async function insert(object_) {
    let object = this.pick_fields(object_);
    let response = await this.collection.insertOne(object);
    return {ok: response.result.ok};
  },

  remove: async function remove({_id}) {
    let response = await this.collection.deleteOne({_id: new ObjectID(_id)});
    return {ok: response.result.ok};
  },

  find: async function find(info={}) {
    let {_id, ...query} = {...info};
    if (_id) Object.assign(query, {_id: new ObjectID(_id)});
    return await this.collection.find(query).toArray();
  },

  update: async function update(object_) {
    if (!object_._id) return {ok: 0};
    let object = this.pick_fields(object_);
    let response = await this.collection.updateOne({_id: new ObjectID(object_._id)}, {$set: object});
    return {ok: response.result.ok}
  },

};

module.exports = function({db}) {
  return {
    user: user({db, proto}),
    post: post({db, proto}),
  }
};
