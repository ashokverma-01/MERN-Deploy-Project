const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ashokvarma9636:IvPjndYSz5Jhc5zw@media-app.y1vlh.mongodb.net/media-app?retryWrites=true&w=majority&appName=Mern_Deploy"
  )
  .then(() => {
    console.log("MongoDb connection successfully");
  })
  .catch((e) => {
    console.log(e);
  });
