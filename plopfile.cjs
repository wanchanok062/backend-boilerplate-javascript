const delete_domai = require('./function/delete-domain.cjs'); 
const create_domain = require('./function/create-domain.cjs');

module.exports = function (plop) {
  create_domain(plop);
  delete_domai(plop);
};
