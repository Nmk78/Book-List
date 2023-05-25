const JWT = require("jsonwebtoken");
const User = require("../Models/user_schema");

const authCheck = async (req, res, next) => {
      const { authorization } = req.headers;

      if (!authorization) {
      return res.status(401).json({
            message: "Authorization token is required",
      });
      }
      const token = authorization.split(" ")[1];

      try {
            const { _id } = JWT.verify(token, process.env.SECRECT)

            req.user = await User.findOne({ _id }).select('_id')
            next()
      } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Request is not authorized" });
      }
};

module.exports = authCheck