import App from './app';
import GetController from './gets/gets.controller';

const app = new App(
  [
  new GetController(),
  ]
, 5000);

app.listen(); 