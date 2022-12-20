const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const words = async (req, res) => {
    
  let word = "";
  for (let i = 0; i < 7; i++) {
    word += char.charAt(Math.floor(Math.random() * 52));
  }
  res.send(word);
};
module.exports = { words };
