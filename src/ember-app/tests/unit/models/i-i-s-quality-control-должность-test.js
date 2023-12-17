import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-quality-control-должность', 'Unit | Model | i-i-s-quality-control-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-quality-control-должность',
    'model:i-i-s-quality-control-оборудование',
    'model:i-i-s-quality-control-отчет',
    'model:i-i-s-quality-control-проверяемое',
    'model:i-i-s-quality-control-продукция',
    'model:i-i-s-quality-control-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
