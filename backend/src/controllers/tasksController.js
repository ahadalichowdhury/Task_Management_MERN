const taskModel = require("../model/taskModel");

exports.createTask = (req, res) => {
  let reqBody=req.body
  reqBody.email=req.headers['email'];
  taskModel.create(reqBody,(err,data)=>{
    if(err){
      res.status(200).json({status:"fail",data:err})
    }
    else{
      res.status(200).json({status:"success",data:data})
    }
  })
};

//delete task
exports.deleteTask = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  taskModel.remove(Query, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the task",
      });
    } else {
      res.status(200).send({
        status: "success",
        message: data,
      });
    }
  });
};

//update task
exports.updateTask = (req, res) => {
  let id = req.params.id;
  let status = req.params.status;
  let reqBody = { status: status };
  let Query = { _id: id };
  taskModel.update(Query, reqBody, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the task",
      });
    } else {
      res.status(200).send({
        status: "success",
        message: data,
      });
    }
  });
};

// task select by status
exports.taskSelectByStatus = (req, res) => {
  let status = req.params.status;
  let email = req.headers["email"];
  taskModel.aggregate(
    [
      { $match: { status: status, email: email } },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          status: 1,
          createdDate: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdDate" },
          },
        },
      },
    ],
    (err, data) => {
      if (err) {
        res.status(400).json({
          status: "fail",
          data: err
        });
      } else {
        res.status(200).json({
          status: "success",
          data: data,
        });
      }
    }
  );
};
//task status count
exports.taskStatusCount = (req, res) => {
  let email = req.headers["email"];
  taskModel.aggregate(
    [
      { $match: { email: email } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ],
    (err, data) => {
      if (err) {
        res.status(500).json({
          status: "fail",
          data: err
        });
      } else {
        res.status(200).json({
          status: "success",
          data: data,
        });
      }
    }
  );
};
