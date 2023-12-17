import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-quality-control-должность-l');
  this.route('i-i-s-quality-control-должность-e',
  { path: 'i-i-s-quality-control-должность-e/:id' });
  this.route('i-i-s-quality-control-должность-e.new',
  { path: 'i-i-s-quality-control-должность-e/new' });
  this.route('i-i-s-quality-control-оборудование-l');
  this.route('i-i-s-quality-control-оборудование-e',
  { path: 'i-i-s-quality-control-оборудование-e/:id' });
  this.route('i-i-s-quality-control-оборудование-e.new',
  { path: 'i-i-s-quality-control-оборудование-e/new' });
  this.route('i-i-s-quality-control-отчет-l');
  this.route('i-i-s-quality-control-отчет-e',
  { path: 'i-i-s-quality-control-отчет-e/:id' });
  this.route('i-i-s-quality-control-отчет-e.new',
  { path: 'i-i-s-quality-control-отчет-e/new' });
  this.route('i-i-s-quality-control-продукция-l');
  this.route('i-i-s-quality-control-продукция-e',
  { path: 'i-i-s-quality-control-продукция-e/:id' });
  this.route('i-i-s-quality-control-продукция-e.new',
  { path: 'i-i-s-quality-control-продукция-e/new' });
  this.route('i-i-s-quality-control-сотрудник-l');
  this.route('i-i-s-quality-control-сотрудник-e',
  { path: 'i-i-s-quality-control-сотрудник-e/:id' });
  this.route('i-i-s-quality-control-сотрудник-e.new',
  { path: 'i-i-s-quality-control-сотрудник-e/new' });
});

export default Router;
