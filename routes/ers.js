const express = require('express')
const router = express.Router()
const Er = require('../models/er')

// getting all
router.get('/', async (req, res) => {
    try {
    const ers = await Er.find()
    res.json(ers)
} catch (err) {
    res.status(500).json({ message: err.message })
}
})

//getting one
router.get('/:id', getEr, (req, res) => {
res.send(res.er.reimTypeId)
})

//creating one
router.post('/', async (req, res) => {
  const er = new Er({
    reimTypeId: req.body.reimTypeId,
    reimType: req.body.reimType 
  })
  try {
      const newEr = await er.save()
      res.status(201).json(newEr)   
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
})
//updating one
router.patch('/:id', getEr, (req, res) => {

})
//deleting one
router.delete('/:id', getEr, async (req,res) => {
   try {
    await res.er.remove()
    res.json({ message: 'Deleted Item' })
   } catch (err){
       res.status(500).json({ message: err.message })
   }
})

async function getEr(req, res, next) {
    let er
    try {
    er = await Er.findById(req.params.id)
    if (er == null) {
        return res.status(404).json({ message: 'Cannot find Item' })
    }
 } catch (err) {
    return res.status(500).json({ message: err.message })
 }

 res.er = er
 next()
}

module.exports = router