"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const {list, read, update, deletee}=require("../controllers/user")

router.route("/").get(list)

router.route("/:id")
.get(read)
.put(update)
.patch(update)
.delete(deletee)

/* ------------------------------------------------------- */
module.exports = router