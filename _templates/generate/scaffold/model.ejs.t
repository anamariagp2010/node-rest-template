---
to: src/lib/<%= entities %>/<%= entities %>.model.js
---
const { Schema, model } = require('mongoose');

const <%= entities %>Schema = new Schema({});

const <%= Entity %> = model('<%= Entity %>', <%= entities%>Schema);

module.exports = { <%= Entity %> };
