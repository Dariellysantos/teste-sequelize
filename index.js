const { addListener } = require("nodemon");

(async () => {
  const database = require("./db");
  const Task = require("./task");
  const List = require("./list");

  // verificação de modelo no projeto
  await database.sync(); //{ force: true }); // retirar force para n recriar o banco, quando fazer aplicações.

  const novaList = await List.create({
    title: "efeito do teste",
    deletedAt: null,
  });

  const novaTask = await Task.create({
    title: "testando",
    deletedAt: null,
    id_list: novaList.id,
  });

  // // console.log("novoProduto");

  // //const Tasks = await Task.findAll();
  const list = await List.findByPk(1);
  const taskUnica = await taskUnica.getTask();
  console.log(task.title);

  // //   const tasksFiltradas = await Id.findAll({
  // //     where: {
  // //       id: 4,
  // //     },
  // //   });
  // //   console.log(tasksFiltradas);
  // //   console.log(tasks);
  console.log(taskUnica);

  // await teskUnica.destroy;

  //taskUnica.title = "fiz uma alteração";
  //taskUnica.seve();
})();
