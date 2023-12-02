'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Overviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            area: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            target: {
                type: Sequelize.STRING
            },
            bonus: {
                type: Sequelize.STRING
            },
            created: {
                type: 'TIMESTAMP'
            },
            expire: {
                type: 'TIMESTAMP'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Overviews');
    }
};