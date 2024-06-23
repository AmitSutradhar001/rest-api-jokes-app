import { Joke } from "../data/mongodb.js";
const randomJoke = async (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const joke = await Joke.findOne({ id: randomNumber }).select("-_id");
    return res.status(200).json(joke);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

export default randomJoke;
