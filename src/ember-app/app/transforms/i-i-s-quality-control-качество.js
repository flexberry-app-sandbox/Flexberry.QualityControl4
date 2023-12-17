import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КачествоEnum from '../enums/i-i-s-quality-control-качество';

export default FlexberryEnum.extend({
  enum: КачествоEnum,
  sourceType: 'IIS.QualityControl.Качество'
});
