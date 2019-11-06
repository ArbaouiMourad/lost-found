const express = require("express");
const router = express.Router();
//Info Model
const Info = require("../models/info");

//get
router.get("/", (req, res) => {
  Info.find()
    .then(info => res.json(info))
    .catch(err => res.send("cannot get"));
});

//get one
router.get("/:id", (req, res) => {
  Info.findById()
    .then(info => res.json(info))
    .catch(err => res.send("cannot get"));
});

//post
router.post("/", async (req, res) => {
  try {
    const newInfo = new Info({
      image: req.body.image,
      name: req.body.name,
      objet:req.body.objet,
      phone: req.body.phone,
      subject: req.body.subject,
      email: req.body.email,
      message:req.body.message
    });

    info = await newInfo.save();

    res.json(info);
  } catch (err) {
    res.send("cannot post");
  }
});

// put
router.put("/:id", (req, res) => {
  const modifieinfo = req.body;
  Info.findOneAndUpdate({ _id: req.params.id }, { $set: { ...modifieinfo } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

//delete
router.delete("/:id", async (req, res) => {
  Info.findOneAndDelete({ _id: req.params.id })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;
