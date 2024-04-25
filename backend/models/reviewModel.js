const { Schema, model, Types } = require("../connections");

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    review: String,
    rating: Number,
    template : { type: Types.ObjectId, ref: 'template' },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('review', mySchema);
