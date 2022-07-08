import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const { name, address, age, isMarried } = req.body;

  const { status, message } = await createUser({
    name,
    address,
    age,
    isMarried,
  });

  if (status === "error") {
    return res.send(message);
  }

  res.send("Signup success");
});

export { authRouter };
