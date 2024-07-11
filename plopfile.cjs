module.exports = function (plop) {
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
        path: "src/api/routes/{{name}}Routers.mjs",
        templateFile: "templates/route.hbs",
      },
      {
        type: "modify",
        path: "src/api/routes/index.mjs",
        pattern: /(\/\* PLOP_INJECT_IMPORT_ROUTES \*\/)/g,
        template: "import {{name}}Routers from './{{name}}Routers.mjs';\n$1",
      },
      {
        type: "modify",
        path: "src/api/routes/index.mjs",
        pattern: /(\/\* PLOP_INJECT_ROUTES \*\/)/g,
        template: "router.use('/{{name}}', {{name}}Routers);\n$1",
      },
      {
        type: "modify",
        path: "src/api/routers.markdown",
        pattern: /(\/\* ROUTES \*\/)/g,
        template: "api/{{name}}\n$1",
      },
      {
        type: "add",
        path: "src/api/controllers/{{name}}Controller.mjs",
        templateFile: "templates/controller.hbs",
      },
      {
        type: "add",
        path: "src/api/schemas/{{name}}Schema.mjs",
        templateFile: "templates/schema.hbs",
      },

    ],
  });

};
