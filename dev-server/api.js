
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

  app.get('/api/v1/physician/patients/:id', (req, res) => res.send({
    resource: require('./responses/physician-patients.json')
      .find(item => item.id === req.params.id),
  }));

  app.get('/api/v1/physician/patients/:id/treatments', (req, res) => res.send({
    resources: require('./responses/physician-treatments.json'),
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

  app.get('/api/v1/physician/patients/:id/treatments/:id', (req, res) => res.send({
    resource: require('./responses/physician-treatments.json')
      .find(item => item.id === req.params.id),
  }));


  app.get('/api/v1/physician/patients/:id/biomarker_results', (req, res) => res.send({
    resources: require('./responses/physician-biomarkers.json'),
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

  return app;
};
