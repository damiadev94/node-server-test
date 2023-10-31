const listModel = require("../../models/list.models")
const dotenv = require("dotenv")
dotenv.config()

async function listServices(db){
    const readAll = async () => {
        const data = db.collection.find()
        return data
    }

    const read = async (id) => {

    }

    const create = async (data) => {

    }

    const update = async (id) => {

    }

    const remove = async (id) => {

    }
}
//listServices(db).read()

//*GET
async function readAll() {
    const data = connection.db.collection("list");
}

//*GET
async function read(id) {
    return `read id ${id}`
}

//*POST
function create(data) {
    /**
     * const data = extract(postData)
     * const location = new locationModel({})
     * msg.save()
     * .then(res => {return res})
     * .catch(err => {return err})
     */
}

//*PUT
function update(id, data) {

}

//*DELETE
//deletes a registry from db
function remove(id) {}

const listServices = {
    readAll,
    read,
    create,
    update,
    remove
};

module.exports = listServices
