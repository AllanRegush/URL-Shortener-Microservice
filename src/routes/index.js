const express =  require( 'express' );
const router = express.Router();
const urlShortenerController = require( '../controllers/urlShortenerController' );

router.get( '/', urlShortenerController.index );

module.exports = router;