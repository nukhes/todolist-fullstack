const { response } = require("express");

const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  switch (body.title) {
    case undefined:
      return res.status(400).json({ message: 'The field "title" is required' })
    case '':
      return res.status(400).json({ message: '"title" cannot be empty' })
  }

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  switch (body.status) {
    case undefined:
      return res.status(400).json({ message: 'The field "status" is required' })
    case '':
      return res.status(400).json({ message: '"status" cannot be empty' })
  }

  next();
};

module.exports = { 
  validateFieldTitle,
  validateFieldStatus
};