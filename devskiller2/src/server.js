const express = require(`express`);
const fs = require(`fs`);
const app = express();

function makeServer() {
  let server = app.get(`/`, (req, res) => {
    fs.readFile(`src/testText.txt`, `utf8`, (err, data) => {
      if (err) throw err;
      res.status(200).send(data);
    });
  });
  return server;
}

app.listen(9000, () => {
  console.log(`running on port 9000`);
});

module.exports = {
  makeServer,
};

// Akkharaset Khamson