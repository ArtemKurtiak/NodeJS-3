const router = require('express').Router();

router.get('/:errorText/:linkUrl/:linkTitle', (req, res) => res.render('error', { ...req.params }));

module.exports = router;
