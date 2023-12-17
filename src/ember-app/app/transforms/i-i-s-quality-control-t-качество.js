import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tКачествоEnum from '../enums/i-i-s-quality-control-t-качество';

export default FlexberryEnum.extend({
  enum: tКачествоEnum,
  sourceType: 'IIS.QualityControl.tКачество'
});
