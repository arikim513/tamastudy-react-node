const express = require('express');
const { signup, signin, users, me } = require('../../controllers/v1/user.controller');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');

const router = express.Router();

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/users').get(getCurrentUserId, users);
router.route('/me').all(getCurrentUserId, me);

module.exports = router;
