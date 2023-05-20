//
const router = require('express').Router()

//GET /places
router.get('/', (req,res) => {
    let places = [{
        name: 'Sabaidee Thai & Sushi Bar',
        city: 'concord',
        state: 'NC',
        cuisines: 'Thai, Pan-Asian, sushi',
        pic: '/images/thai.jpeg'
      }, {
        name: 'Mac Tabby Cat Cafe',
        city: 'charlotte',
        state: 'NC',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpeg'
      }]
      
    res.render('places/index', { places })
})

router.get('/new', (req,res)=>{
    res.render('places/new')
})

// router.get('/places/:id',(req,res)=>{
//     res.send()
// })

module.exports = router