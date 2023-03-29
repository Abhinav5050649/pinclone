const mongoose = require(`mongoose`);
const Schema = mongoose.Schema

const imgSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
})

const imgs = mongoose.model(`img`, imgSchema)
module.exports = imgs