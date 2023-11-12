const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sua API',
      version: '1.0.0',
      description: 'Documentação da sua API',
    },
  },
  apis: ['../backend/server_ex.js', '../backend/authMiddleware.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;