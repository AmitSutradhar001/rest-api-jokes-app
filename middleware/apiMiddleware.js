// middleware/apiMiddleware.js
import { User } from "../data/mongodb.js";

const apiMiddleware = async (req, res, next) => {
  const { userKey } = req.params; 

  if (!userKey) {
    return res.status(401).json({ message: "User is unauthorized!" });
  }

  try {
    const user = await User.findOne({ userKey });

    if (user) {
      return next();
    }

    return res.status(404).json({ message: "User key is invalid!" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default apiMiddleware;
