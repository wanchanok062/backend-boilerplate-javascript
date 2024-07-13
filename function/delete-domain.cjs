const fs = require("fs");

module.exports = function (plop) {
  plop.setActionType("deleteMultiple", function (answers, config, plop) {
    const files = config.files.map((file) => plop.renderString(file, answers));

    files.forEach((filePath) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`${filePath} has been deleted`);
      } else {
        console.log(`${filePath} does not exist`);
      }
    });

    return `${files.length} files have been processed for deletion`;
  });

  plop.setGenerator("delete-Domain", {
    description: "Delete Domain",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Input the name of domain you want to delete : ",
      },
    ],
    actions(data) {
      const moduleName = data.moduleName;

      return [
        {
          type: "deleteMultiple",
          files: [
            `src/api/controllers/${moduleName}controller.mjs`,
            `src/api/routes/${moduleName}Routers.mjs`,
            `src/api/schemas/${moduleName}Schema.mjs`,
          ],
        },
        {
          type: "modify",
          path: "src/api/routes/index.mjs",
          pattern: new RegExp(
            `import ${moduleName}Routers from '\\./${moduleName}Routers\\.mjs';\\n`,
            "g"
          ),
          template: "",
        },
        {
          type: "modify",
          path: "src/api/routes/index.mjs",
          pattern: new RegExp(
            `router\\.use\\('/${moduleName}', ${moduleName}Routers\\);\\n`,
            "g"
          ),
          template: "",
        },
        {
          type: "modify",
          path: "src/api/routers.markdown",
          pattern: new RegExp(`api/${moduleName}\\n`, "g"),
          template: "",
        },
      ];
    },
  });
};
