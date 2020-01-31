const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const accounts  = await db("accounts");
        res.json(accounts);
    } catch (err) {
        res.status(500).json({ Message: "Failed to get Accounts"})
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const accounts = await db('accounts').where('id', id);
        res.json(accounts);
    } catch (err){
        res.status(500).json({
            Message: "This id does not exist"
        })
    }
})


module.exports = router;