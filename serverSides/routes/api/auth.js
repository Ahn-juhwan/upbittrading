console.log(`${__filename}:1`);

const express = require("express");
const router = express.Router();

const RouterUtil = require("../../utils/RouterUtil");
const BcryptLogic = require("../../logics/BcryptLogic");
const wrapTryCatch = RouterUtil.wrapTryCatch;

const db = require("../../database/models");

const rowUserToCookieObject = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
});

router.post(
  "/login",
  wrapTryCatch(async (req, res) => {
    const { id, password } = req.getObjectRequired("id", "password");
    // TODO: id, password 입력 안되면 오류남

    // const row = await selectOne(
    //   `SELECT * FROM User WHERE id = ? and password = ?`,
    //   [id, password]
    // );
    const usersDb = db.users;
    const row = await usersDb.findOne({
      where: {
        id: id,
        password: password,
      },
    });
    if (!row) {
      return res.renderJson403();
    }

    // const checkPassword = await BcryptLogic.compare(password, row.pwd);

    // if (!checkPassword) return res.renderJson403();

    const user = rowUserToCookieObject(row);

    res.signedCookieUserSet(user);
    res.renderJson({
      ss: "ss",
    });
  })
);

router.get(
  "/getUser",
  wrapTryCatch(async (req, res) => {
    const user = req.getUser();
    if (!user) {
      return res.renderJson();
    }

    // const row = await selectOne(`SELECT * FROM USER WHERE seq = ?`, user.seq);

    // 접속 가능상태가 아니면 쿠키 삭제
    // if (row.state !== "Access") {
    //   res.signedCookieUserRemove();
    //   return res.renderJson();
    // }
    // if (!row) {
    //   res.signedCookieUserRemove();
    //   return res.renderJson();
    // }

    // delete row.password;

    res.renderJson({
      user: "asdf",
    });
  })
);

router.post(
  "/join",
  wrapTryCatch(async (req, res) => {
    const { id, password, passwordCon, name, email } = req.getObjectRequired(
      "id",
      "password",
      "passwordCon",
      "name",
      "email"
    );

    const hashPassword = await BcryptLogic.hash(password);

    // const row = await selectOne(
    //   `INSERT INTO User(id, pwd, email, name, created_dt) VALUES(?, ?, ?, ?, NOW())`,
    //   [id, hashPassword, email, name]
    // );

    res.renderJson({
      ss: "ss",
    });
  })
);

module.exports = router;
