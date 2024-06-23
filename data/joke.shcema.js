import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
    joke: {
        type: String,
        required: true,
      },
});

export default jokeSchema;
