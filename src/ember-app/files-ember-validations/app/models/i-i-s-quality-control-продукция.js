import {
  defineNamespace,
  defineProjections,
  Model as ПродукцияMixin
} from '../mixins/regenerated/models/i-i-s-quality-control-продукция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПродукцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
