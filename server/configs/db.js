import mongoose from "mongoose";    
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("local Database connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "quickshow",
//     });

//     console.log("Local MongoDB connected");
//   } catch (error) {
//     console.log("DB Error:", error.message);
//   }
// };

// export default connectDB;




