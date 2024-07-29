const zod = require("zod");
const createTodo = zod.object({
  todo: zod.string(),
  description: zod.string(),
});
const updateTodo = zod.object({
  todo: zod.string(),
});

module.exports = { createTodo, updateTodo };
