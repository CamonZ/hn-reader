import DS from 'ember-data';
import {
  extractSingle as parseSingle,
  extractArray as parseArray
} from "hn-reader/extractors/story";

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeSingleResponse(store, type, payload, id, requestType) {
    payload = parseSingle(payload);

    store._setMetadataFor('story', this.extractMeta(store, type, payload));

    return this._super(store, type, payload, id, requestType);
  },

  normalizeArrayResponse(store, type, payload, requestType) {
    payload = parseArray(payload);

    store._setMetadataFor('story', this.extractMeta(store, type, payload));
    return this._super(store, type, payload, requestType);
  }
});
