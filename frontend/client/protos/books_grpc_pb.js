// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_books_pb = require('../protos/books_pb.js');

function serialize_RecommendationRequest(arg) {
  if (!(arg instanceof protos_books_pb.RecommendationRequest)) {
    throw new Error('Expected argument of type RecommendationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RecommendationRequest(buffer_arg) {
  return protos_books_pb.RecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RecommendationResponse(arg) {
  if (!(arg instanceof protos_books_pb.RecommendationResponse)) {
    throw new Error('Expected argument of type RecommendationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RecommendationResponse(buffer_arg) {
  return protos_books_pb.RecommendationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecommendationsService = exports.RecommendationsService = {
  recommend: {
    path: '/Recommendations/Recommend',
    requestStream: false,
    responseStream: false,
    requestType: protos_books_pb.RecommendationRequest,
    responseType: protos_books_pb.RecommendationResponse,
    requestSerialize: serialize_RecommendationRequest,
    requestDeserialize: deserialize_RecommendationRequest,
    responseSerialize: serialize_RecommendationResponse,
    responseDeserialize: deserialize_RecommendationResponse,
  },
};

exports.RecommendationsClient = grpc.makeGenericClientConstructor(RecommendationsService);
