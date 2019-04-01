
module.exports = function() {
  let storage = [];
  let auto_increment = 0;

  function insert(o) {
    storage.push({...o, id: auto_increment++});
  }

  function remove({id}) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id == id) {
        storage.splice(i);
        return true;
      }
    }
    false;
  }

  function get() {
    return [...storage];
  }

  return {
    insert,
    remove,
    get,
  };
};
