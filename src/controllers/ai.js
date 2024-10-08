

import { run } from "../../geminiFlash.js";

export const askGemini = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.sendStatus(401);

    const result = await run(image);
    return res.status(200).json(result).end();
    
    // return res;
    // .then((user) => {
    //   getAuth().setCustomUserClaims(user.uid, { isAdmin: isAdmin });
    //   return res.status(200).json(user).end();
    // })
    // .catch((error) => {
    //   console.log("Error creating new user:", error);
    // });

    // return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
