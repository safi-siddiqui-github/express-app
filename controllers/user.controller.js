import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "User registered",
  });
});

// app.get("/", async (req, res) => {
//   // await user.deleteMany()

//   res.send("<h1>Hello World! Nodemon</h1> <p>" + JSON.stringify(b) + "</p>");
// });

// app.get("/todo", async (req, res) => {
//   // todo.create({name: 'Work Two'})
//   // const a = await todo.find()

//   res.json({ data: [] });
// });

// app.post("/todo", async (req, res) => {
//   // console.log(req.body.todo);
//   // await todo.create({name: req.body.todo})
//   res.json({ msg: "Todo Added" });
// });

// app.delete("/todo", async (req, res) => {
//   console.log(req.body.todo);
//   res.json({ msg: "Todo Deleted" });
// });