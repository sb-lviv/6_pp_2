
module.exports = function({db}) {
  let storage = [];
  let auto_increment = 0;

  async function insert(o) {
    storage.push({...o, id: auto_increment++});
  }

  async function remove({id}) {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id == id) {
        storage.splice(i);
        return true;
      }
    }
    false;
  }

  async function get() {
    return [...storage];
  }

  return {
    insert,
    remove,
    get,
  };
};
