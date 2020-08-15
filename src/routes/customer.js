const router = require ('express').Router();


const customerController = require('../controllers/customerController');
const controller = require('../controllers/customerController');


router.get('/', customerController.list);

router.post('/add', controller.save)

router.get('/delete/:id', controller.delete)


module.exports = router;