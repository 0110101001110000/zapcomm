import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          id: 1,
          name: "Em Aberto",
          color: "#D3D3D3",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        },
        {
          id: 2,
          name: "Em Andamento",
          color: "#008000",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        },
        {
          id: 3,
          name: "Finalizado",
          color: "#FF0000",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Tags", {});
  }
};
