const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send("artiles")
})

module.exports = router;