
module.exports = function({db, proto}) {
  let interface = {
    collection: db.collection('posts'),

    pick_fields: function pick_fields({body, title, owner_id, comments_id}) {
      let clear = {body, title, owner_id, comments_id};
      for ([key, value] of Object.entries(clear))
        if (value === undefined)
          delete clear[key];
      return clear;
    },
  };
  interface.__proto__ = proto;

  return interface;
};
