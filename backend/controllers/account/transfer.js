const mongoose = require('mongoose');
const {Account} = require("../../schemas/accountSchema");

const transfer = async(req,res)=>{
    const session = mongoose.startSession();
    (await session).startTransaction();

    const {amount,to} = req.body;

    const account = Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance < amount){
        (await session).abortTransaction();

        return res.status(400).json({
            message:"Invalid account"
        })
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
}

module.exports = {transfer};