const User = require("../modal/user.modal");

const allPlayer = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  try {
    let players = await User.find({})
      .skip((page - 1) * limit)
      .limit(limit)
    let nos = await User.find().count();
    console.log(nos);
    return res.send({ data: players, totalPages: Math.ceil(nos / limit) });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { allPlayer };
