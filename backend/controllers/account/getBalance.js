const { Account } = require("../../schemas/accountSchema");

const getBalance = async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
};

module.exports = { getBalance };
