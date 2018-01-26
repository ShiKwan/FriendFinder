var path = require('path')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/data/home.html'))
  })
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/data/survey.html'))
  })

  app.get('/view', function (req, res) {
    res.sendFile(path.join(__dirname, '../app/data/view.html'))
  })
}
