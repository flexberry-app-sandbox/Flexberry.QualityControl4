import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-quality-control-продукция', 'Unit | Serializer | i-i-s-quality-control-продукция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-quality-control-продукция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-quality-control-t-качество',
    'transform:i-i-s-quality-control-качество',
    'transform:i-i-s-quality-control-тип-устройства',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
