const mongoose = require(`mongoose`);
const schema = mongoose.Schema()

const imgSchema = new schema({
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