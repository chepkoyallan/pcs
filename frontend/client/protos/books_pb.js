// source: protos/books.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.BookCategory', null, global);
goog.exportSymbol('proto.BookRecommendation', null, global);
goog.exportSymbol('proto.RecommendationRequest', null, global);
goog.exportSymbol('proto.RecommendationResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecommendationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RecommendationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecommendationRequest.displayName = 'proto.RecommendationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BookRecommendation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BookRecommendation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BookRecommendation.displayName = 'proto.BookRecommendation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RecommendationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RecommendationResponse.repeatedFields_, null);
};
goog.inherits(proto.RecommendationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RecommendationResponse.displayName = 'proto.RecommendationResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecommendationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.RecommendationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecommendationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecommendationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxResults: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecommendationRequest}
 */
proto.RecommendationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecommendationRequest;
  return proto.RecommendationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecommendationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecommendationRequest}
 */
proto.RecommendationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {!proto.BookCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecommendationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecommendationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecommendationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecommendationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMaxResults();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.RecommendationRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecommendationRequest} returns this
 */
proto.RecommendationRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional BookCategory category = 2;
 * @return {!proto.BookCategory}
 */
proto.RecommendationRequest.prototype.getCategory = function() {
  return /** @type {!proto.BookCategory} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.BookCategory} value
 * @return {!proto.RecommendationRequest} returns this
 */
proto.RecommendationRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 max_results = 3;
 * @return {number}
 */
proto.RecommendationRequest.prototype.getMaxResults = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.RecommendationRequest} returns this
 */
proto.RecommendationRequest.prototype.setMaxResults = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BookRecommendation.prototype.toObject = function(opt_includeInstance) {
  return proto.BookRecommendation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BookRecommendation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BookRecommendation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BookRecommendation}
 */
proto.BookRecommendation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BookRecommendation;
  return proto.BookRecommendation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BookRecommendation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BookRecommendation}
 */
proto.BookRecommendation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BookRecommendation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BookRecommendation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BookRecommendation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BookRecommendation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.BookRecommendation.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BookRecommendation} returns this
 */
proto.BookRecommendation.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.BookRecommendation.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BookRecommendation} returns this
 */
proto.BookRecommendation.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RecommendationResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RecommendationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RecommendationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RecommendationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecommendationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recommendationsList: jspb.Message.toObjectList(msg.getRecommendationsList(),
    proto.BookRecommendation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RecommendationResponse}
 */
proto.RecommendationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RecommendationResponse;
  return proto.RecommendationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RecommendationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RecommendationResponse}
 */
proto.RecommendationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.BookRecommendation;
      reader.readMessage(value,proto.BookRecommendation.deserializeBinaryFromReader);
      msg.addRecommendations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RecommendationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RecommendationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RecommendationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RecommendationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecommendationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.BookRecommendation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BookRecommendation recommendations = 1;
 * @return {!Array<!proto.BookRecommendation>}
 */
proto.RecommendationResponse.prototype.getRecommendationsList = function() {
  return /** @type{!Array<!proto.BookRecommendation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BookRecommendation, 1));
};


/**
 * @param {!Array<!proto.BookRecommendation>} value
 * @return {!proto.RecommendationResponse} returns this
*/
proto.RecommendationResponse.prototype.setRecommendationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.BookRecommendation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BookRecommendation}
 */
proto.RecommendationResponse.prototype.addRecommendations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.BookRecommendation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RecommendationResponse} returns this
 */
proto.RecommendationResponse.prototype.clearRecommendationsList = function() {
  return this.setRecommendationsList([]);
};


/**
 * @enum {number}
 */
proto.BookCategory = {
  MYSTERY: 0,
  SCIENCE_FICTION: 1,
  SELF_HELP: 2
};

goog.object.extend(exports, proto);