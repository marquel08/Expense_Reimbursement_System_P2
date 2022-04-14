const express = require('express')
const { update } = require('../models/ers_reimbursment_typeSchema')
const router = express.Router()
const Er = require('../models/ers_reimbursment_typeSchema')

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
res.send(res.er.reimTypeId),
res.send(res.er.reimType)
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
router.patch('/:id', getEr, async (req, res) => {
    if (req.body.reimTypeId != null) {
        res.er.reimTypeId = req.body.reimTypeId
    }
    if (req.body.reimType != null) {
        res.er.reimType = req.body.reimType
    }
    try {
        const updatedEr = await res.er.save()
        res.json(updatedEr)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
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
        return res.status(404).json({ message: 'Cannot find er' })
    }
 } catch (err) {
    return res.status(500).json({ message: err.message })
 }

 res.er = er
 next()
}

module.exports = router