console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken-promisified');
const RouterUtil = require('../../utils/RouterUtil');
const BcryptLogic = require('../../logics/BcryptLogic');
const wrapTryCatch = RouterUtil.wrapTryCatch;
const { expirationPeriodInSec } = require('../../logics/JwtLogic');

const db = require('../../database/models');

const rowUserToCookieObject = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
});

const userToAccessTokenPayload = (user) => ({
  seq: user.seq,
  id: user.id,
  name: user.name,
  email: user.email,
});

router.get(
  '/',
  wrapTryCatch(async (req, res) => {
    const user = req.getUser();
    if (!user) {
      return res.renderJson();
    }

    const usersDb = db.users;
    const row = await usersDb.findOne({
      where: {
        id: user.id,
      },
    });

    if (!row) {
      res.signedCookieUserRemove();
      return res.renderJson();
    }

    delete row.password;

    res.renderJson({
      user: row,
    });
  })
);

router.post(
  '/login',
  wrapTryCatch(async (req, res) => {
    const { id, password } = req.getObjectRequired('id', 'password');

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

    const accessToken = await jwt.signAsync(
      userToAccessTokenPayload(row),
      process.env.JWT_SECRET,
      {
        expiresIn: expirationPeriodInSec.accessToken,
        issuer: 'upbittrading',
        subject: 'AccessToken',
      }
    );

    const refreshToken = await jwt.signAsync(
      userToAccessTokenPayload(row),
      process.env.JWT_SECRET,
      {
        expiresIn: expirationPeriodInSec.refreshToken,
        issuer: 'upbittrading',
        subject: 'RefreshToken',
      }
    );

    const user = rowUserToCookieObject(row);

    res.signedCookieUserSet(user);
    res.renderJson({
      accessToken,
      refreshToken,
    });
  })
);

router.get(
  '/getUser',
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
      user: 'asdf',
    });
  })
);

router.post(
  '/join',
  wrapTryCatch(async (req, res) => {
    const { id, password, name, email } = req.getObjectRequired(
      'id',
      'password',
      'name',
      'email'
    );

    const usersDb = db.users;

    const row = await usersDb.create({
      id,
      password,
      name,
      email,
    });

    res.renderJson({
      row,
    });
  })
);

module.exports = router;
