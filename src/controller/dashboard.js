const User = require("../modal/user.modal");

const allPlayer = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  try {
    let players = await User.find({})
    
    return res.send({ data: players });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { allPlayer };
