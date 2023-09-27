import { Request, Response, Router } from "express";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const config = require('config')
const db = require("../utils/db");
const router = Router();

router.post("/registration", async (_req: Request, _res: Response) => {
  try {
    const { nickname, password } = _req.body;

    if (nickname.length === 0 || (password.length < 6 || password.length > 18)) {
        return _res.status(400).json({message: "Incorrent request"})
    }

    const candidate = await db.findOne(nickname);

    if (candidate !== undefined) {
      return _res
        .status(400)
        .json({ message: `User with nickname ${nickname} is already exist` });
    }

    const hash_password = await bcrypt.hash(password, 7);

    const avatar_bgcolor = "#333333";
    const avatar_letter = nickname[0];
    await db.createUser(nickname, hash_password, avatar_bgcolor, avatar_letter);

    return _res.json({ message: "User was created successfully!" });
  } catch (e) {
    console.log("auth.routes: /registration:", e);
    _res.send({ message: "server error" });
  }
});

router.post("/login", async (_req: Request, _res: Response) => {
  try {
    const {nickname, password} = _req.body
    const user = await db.findOne(nickname)
    console.log(user)

    if (user === undefined) {
      return _res
        .status(404)
        .json({ message: `User not found` });
    }

    const isPassValid = bcrypt.compareSync(password, user.hash_password)
    if (!isPassValid) {
      return _res
        .status(400)
        .json({ message: `Invalid nickname or password` });
    }

    const token = jwt.sign({id: user.uid}, config.get('secretKey'), {expiresIn: '1h'})
    return _res.json({
      token,
      user: {
        uid: user.uid,
        nickname: user.nickname,
        avatar_bgcolor: user.avatar_bgcolor,
        avatar_letter: user.avatar_letter
      }
    })

  } catch (e) {
    console.log("auth.routes: /registration:", e);
    _res.send({ message: "server error" });
  }
});

module.exports = router;
