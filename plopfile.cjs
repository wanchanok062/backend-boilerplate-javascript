const delete_domai = require('./src/function/delete-domain.cjs'); 
const create_domain = require('./src/function/create-domain.cjs');

module.exports = function (plop) {
  create_domain(plop);
  delete_domai(plop);
};
