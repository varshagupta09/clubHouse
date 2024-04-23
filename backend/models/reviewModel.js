const { Schema, model, Types } = require("../connections");

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    text: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('review', mySchema);
