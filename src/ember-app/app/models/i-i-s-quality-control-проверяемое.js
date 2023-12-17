import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ПроверяемоеMixin
} from '../mixins/regenerated/models/i-i-s-quality-control-проверяемое';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПроверяемоеMixin, Validations, {
});

export default Model;
