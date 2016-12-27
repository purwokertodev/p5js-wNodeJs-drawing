'use strict';

let index = (req, res, next) => {
  res.render('index');
};

module.exports = {
  index: index
};
