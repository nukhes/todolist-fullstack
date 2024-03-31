const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks'); // pegando apenas a primeira posicao do array sem o buffer inutil
  return tasks;
};

const addTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = `INSERT INTO tasks(title, status, created_at) VALUES ('${title}', 'pendente', '${dateUTC}')`;

  const [createdTask] = await connection.execute(query);
  return { insertId: createdTask.insertId };
};

const removeTask = async (id) => {
  const removedTask = await connection.execute(`DELETE FROM tasks WHERE id = ${id}`);
  return { removedTask };
};

const updateTask = async (id, task) => {

  const { title, status } = task;

  const query = `UPDATE tasks SET title = '${title}', status = '${status}' WHERE id = ${id}`;
  const updatedTask = await connection.execute(query);

  return { updatedTask };
};

module.exports = {
  getAll,
  addTask,
  removeTask,
  updateTask
};