const express = require('express');
const router = express.Router();

const {
    getAllTodo,
    deleteTodo,
    putUpdateTodo,
    postNewTodo,
} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */

router.get('/', getAllTodo);

/**
 * @router POST api/todo
 * @description add a new todo
 * @access public
 */
router.post('/' , postNewTodo);

/**
 * @router PUT api/todo/:id
 * @description update todo list
 * @access public 
 */
router.put('/:id' , putUpdateTodo);

/**
 * @router DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete('/:id' , deleteTodo);

module.exports = router;
