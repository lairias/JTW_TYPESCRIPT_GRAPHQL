import express from "express";
import db from "../../models";
// import people from "../../models/People/people";
// import Usuario from "../../models/People/users";
const router = express.Router();
router.get("/",async (_req, res) => {
//  const user = 
  await db.pe_users.create({ 
    email:'username',
    email_recovery:'username',
    userName:'username',
    password:'username',
  });
  const users = await db.pe_users.findAll();
  res.json(users);
});
export default router;