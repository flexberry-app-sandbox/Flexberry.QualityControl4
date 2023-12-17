import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипУстройстваEnum from '../enums/i-i-s-quality-control-тип-устройства';

export default FlexberryEnum.extend({
  enum: ТипУстройстваEnum,
  sourceType: 'IIS.QualityControl.ТипУстройства'
});
