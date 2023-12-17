import { Serializer as ПроверяемоеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-quality-control-проверяемое';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроверяемоеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
