//
const router = require('express').Router()
const places = require('../models/places.js')


//GET /places
router.get('/', (req,res) => {

    res.render('places/index', { places })
})

router.get('/new', (req,res)=> {
    res.render('./new')
})
router.post('/',(req,res)=> {
  if(!req.body.pic){
    //default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    req.body.city = 'anytown'
  }
  if(!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router