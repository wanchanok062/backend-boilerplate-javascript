const dotenv = require('dotenv');
dotenv.config();

module.exports = function (plop) {
  plop.setHelper('capitalize', (text) => {
    return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  });
  plop.setHelper('camelCase', (text) => {
    return text.split('-').map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  });
  plop.setGenerator("create-domain", {
    description:
      "Start Domain Consisting of routs, controller, service, repository, schemas",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is name of domain?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/api/routes/{{camelCase name}}Routers.mjs",
        templateFile: "templates/route.hbs",
      },
      {
        type: "modify",
        path: "src/api/routes/index.mjs",
        pattern: /(\/\* PLOP_INJECT_IMPORT_ROUTES \*\/)/g,
        template: "import {{camelCase name}}Routers from './{{camelCase name}}Routers.mjs';\n$1",
      },
      {
        type: "modify",
        path: "src/api/routes/index.mjs",
        pattern: /(\/\* PLOP_INJECT_ROUTES \*\/)/g,
        template: "router.use('/{{camelCase name}}', {{camelCase name}}Routers);\n$1",
      },
      {
        type: "modify",
        path: "src/api/routers.markdown",
        pattern: /(\/\* ROUTES \*\/)/g,
        template: `api/${process.env.API_VERSION}/{{camelCase name}}\n$1`,
      },
      {
        type: "add",
        path: "src/api/controllers/{{camelCase name}}Controller.mjs",
        templateFile: "templates/controller.hbs",
      },
      {
        type: "add",
        path: "src/api/schemas/{{camelCase name}}Schema.mjs",
        templateFile: "templates/schema.hbs",
      },
      {
        type: "add",
        path: "src/api/models/{{camelCase name}}Model.mjs",
        templateFile: "templates/models.hbs",
      },
      {
        type: "add",
        path: "src/api/services/{{camelCase name}}Service.mjs",
        templateFile: "templates/services.hbs",
      },
    ],
  });
};
