"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 3000;

_app2.default.listen(port, () => {
  console.log();
  console.log(`App is running in port ${port}`);
  console.log(`Access in CTRL + click in http://localhost:${port}`);
});
