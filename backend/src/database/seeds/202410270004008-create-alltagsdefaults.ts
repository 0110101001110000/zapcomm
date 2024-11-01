import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        /* {
          id: 1,
          name: "Aguardando",
          color: "#f5b43c99",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        },
        {
          id: 2,
          name: "Em Conversa",
          color: "#190bff99",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        },
        {
          id: 3,
          name: "Finalizados",
          color: "#00b97399",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        } */
        {
          id: 1,
          name: "Em Conversa",
          color: "#190bff99",
          companyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          kanban: 1
        },
        {
          id: 2,
          name: "Finalizados",
          color: "#00b97399",
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
