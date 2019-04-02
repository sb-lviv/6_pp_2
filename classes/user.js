
module.exports = function({db, proto}) {
  let interface = {
    collection: db.collection('users'),

    pick_fields: function pick_fields({username, password}) {
      let clear = {username, password};
      for ([key, value] of Object.entries(clear))
        if (value === undefined)
          delete clear[key];
      return clear;
    },
  };
  interface.__proto__ = proto;

  return interface;
};
