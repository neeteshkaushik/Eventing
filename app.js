require("dotenv").config();

const Eventing = require("./Eventing");
const connectDB = require("./db/connect");

const start = async () => {
  //create .env file and include a MONGO_URL variable
  // eg :  MONGO_URL=mongodb+srv://{username}:{password}@cluster0.dommqkr.mongodb.net/{Collection_Name}?retryWrites=true&w=majority
  await connectDB(process.env.MONGO_URL);
  const eventing = new Eventing();

  const cb1 = () => {
    console.log("cb 1");
  };

  const cb2 = () => {
    console.log("cb 2");
  };
  //REGISTER EVENTS
  eventing.on("click", cb1);
  eventing.on("click", cb2);
  eventing.on("click", cb1);
  eventing.on("press", () => {
    console.log("press 1");
  });
  eventing.on("press", () => {
    console.log("press 2");
  });

  //TRIGGER AND REMOVE EVENTS
  eventing.trigger("click");
  eventing.off("click");
  eventing.trigger("press");
  process.exit(0);
};

start();
