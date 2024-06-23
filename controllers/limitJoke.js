import { Joke } from "../data/mongodb.js";
const jokeWithLimit = async (req, res) => {
  try {
    const limit = req.query.limit;
    if (limit > 50)
      return res
        .status(400)
        .json({ message: "Limit shouldn't be more then 50 !" });
    const joke = await Joke.find().limit(limit).select("-_id");
    return res.status(200).json(joke);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

export default jokeWithLimit;
