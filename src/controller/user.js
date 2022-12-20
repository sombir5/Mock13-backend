const User = require("../modal/user.modal");

const addPlayer = async (req, res) => {
  try {
    let player = await User.create(req.body);
    player.save();
    res.send({ player, message: "player Added" });
  } catch (error) {
    console.log(error.message);
  }
};
const addScore = async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    try {
      const score1 = await User.updateOne(
        { _id: id },
        { $set: { score } }
      );
      res.send({ msg: "Your new score", score1});
    } catch (err) {
      res.send(err);
    }
};


module.exports = { addPlayer,addScore};
