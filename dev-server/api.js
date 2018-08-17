
module.exports = (app) => {
  app.post('/api/v1/physicians/sign_in', (req, res) => res.send({
    resource: require('./responses/physician-user.json'),
  }));

  app.get('/api/v1/physician/patients', (req, res) => res.send({
    resources: require('./responses/physician-patients.json'),
    meta: {
      pagination: {
        current: 1,
        previous: null,
        next: 2,
        per_page: 10,
        total: 2,
      },
    },
  }));

  app.get('/api/v1/physician/patients', (req, res) => res.send({
    resource: require('./responses/physician-patients.json')
      .find(item => item.id === req.params.id),
  }));

  return app;
};
