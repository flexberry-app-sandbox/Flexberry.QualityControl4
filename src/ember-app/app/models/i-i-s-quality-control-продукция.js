import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПродукцияMixin
} from '../mixins/regenerated/models/i-i-s-quality-control-продукция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПродукцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
