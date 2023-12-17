import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  паспорт: DS.attr('string'),
  тип: DS.attr('i-i-s-quality-control-тип-устройства')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-quality-control-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  паспорт: {
    descriptionKey: 'models.i-i-s-quality-control-оборудование.validations.паспорт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-quality-control-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-quality-control-оборудование', {
    название: attr('Название', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    паспорт: attr('Паспорт', { index: 2 })
  });

  modelClass.defineProjection('ОборудованиеL', 'i-i-s-quality-control-оборудование', {
    название: attr('Название', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    паспорт: attr('Паспорт', { index: 2 })
  });
};
