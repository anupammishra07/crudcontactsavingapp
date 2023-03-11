const User = require("../models/userschema");

  exports.create= async(req,res,next)=>{
   
   await User.create(req.body)
    .then((data) => res.json({ message: "user added successfully", data }))
    .catch((err) =>
        res.status(400).json({ message: "Failed to add todo", error: err.message })
    );

  }

  exports.getAllUser = async(req, res) => {
    const pageitem=3;
    const page = parseInt( req.query.page || "0");
    const total= await User.countDocuments({});
    await User.find().limit(pageitem).skip(pageitem * page)
        .then((user) => res.json({user , totalpages: Math.ceil(total/pageitem)}))
        .catch((err) =>
            res.status(404)
                .json({ message: "user not found", error: err.message })
        );
};


exports.getusers = async(req, res) => {
    
   await User.findById({"_id":req.params.id})
        .then((user) => res.json({message: "found user of particular id" , user}))
        .catch((err) =>
            res.status(404)
                .json({ message: "user not found", error: err.message })
        );
};



exports.updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.json({ message: "updated successfully", data }))
      .catch((err) =>
          res.status(400).json({ message: "Failed to update user data", error: err.message })
      );
};


exports.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body)
      .then((data) =>
          res.json({ message: "user  deleted successfully", data })
      )
      .catch((err) =>
          res
              .status(404)
              .json({ message: "user not found", error: err.message })
      );
};