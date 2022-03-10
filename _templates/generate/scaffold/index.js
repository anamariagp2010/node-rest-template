const inflection = require('inflection');

module.exports = {
  prompt: async ({ prompter }) => {
    let { entityName } = await prompter.prompt({
      type: 'input',
      name: 'entityName',
      message: "What's your entity name?",
    });

    entityName = entityName.replace(/ /g, '_').replace(/[^\w]/g, '');

    const Entity = inflection.transform(entityName, ['singularize', 'capitalize', 'camelize']);
    const entities = inflection.camelize(inflection.pluralize(entityName), true);

    return {
      entityName,
      Entity,
      entities,
    };
  },
};
