import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log();
  console.log(`App is running in port ${port}`);
  console.log(`Access in CTRL + click in http://localhost:${port}`);
});
