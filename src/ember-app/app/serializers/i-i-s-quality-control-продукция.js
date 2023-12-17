import { Serializer as ПродукцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-quality-control-продукция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПродукцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
