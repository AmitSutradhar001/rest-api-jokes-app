import singleJokeWithId from "../controllers/idJoke.js";
import randomJoke from "../controllers/randomJoke.js";
import jokeWithLimit from "../controllers/limitJoke.js";

const apiMainController = (req, res) => {
  const limit = req.query.limit;
  const id = req.query.id;

  if (limit) {
    return jokeWithLimit(req, res);
  } else if (id) {
    return singleJokeWithId(req, res);
  } else {
    return randomJoke(req, res);
  }
};

export default apiMainController;
