const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        detail: {
            type: String,
            required: true,
            maxlength: 2000
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Todo", TodoSchema);