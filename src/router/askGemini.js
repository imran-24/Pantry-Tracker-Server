import { askGemini } from "../controllers/ai.js";

// anonymous function
export default (router) => {
  router.post("/ai", askGemini);
};
