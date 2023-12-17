import {
  defineNamespace,
  defineProjections,
  Model as ОтчетMixin
} from '../mixins/regenerated/models/i-i-s-quality-control-отчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
