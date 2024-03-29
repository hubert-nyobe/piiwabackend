const express = require("express");
const {
  CreateAccount,
  GetAllAccounts,
  UpdateAmountAccount,
  UpdateTypeAccount,
  GetAccountById,
  CreateSpaccount,
} = require("../controller/account");
const router = express.Router();

//create account
router.post("/", CreateAccount);

//get all accounts
router.get("/", GetAllAccounts);

//create sp account
router.post("/servicepoint", CreateSpaccount);

//update amount account
router.put("/amount/:id", UpdateAmountAccount);

//update type account
router.put("/type/:id", UpdateTypeAccount);

//get account by id
router.get("/:id", GetAccountById);


module.exports = router;
