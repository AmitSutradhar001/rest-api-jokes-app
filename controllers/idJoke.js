import { Joke } from "../data/mongodb.js";
const singleJokeWithId = async (req, res) => {
  try {
    const id = req.query.id;
    if (id > 50) {
      return res.status(404).json({
        message: "ID shouldn't be more then 50 !",
      });
    }
    const joke = await Joke.findOne({ id }).select("-_id");
    return res.status(200).json(joke);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

export default singleJokeWithId;
