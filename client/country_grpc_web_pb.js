/**
 * @fileoverview gRPC-Web generated client stub for country
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.country = require('./country_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.country.CountryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.country.CountryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.country.GetCountriesRequest,
 *   !proto.country.GetCountriesResponse>}
 */
const methodDescriptor_CountryService_GetCountries = new grpc.web.MethodDescriptor(
  '/country.CountryService/GetCountries',
  grpc.web.MethodType.UNARY,
  proto.country.GetCountriesRequest,
  proto.country.GetCountriesResponse,
  /**
   * @param {!proto.country.GetCountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.country.GetCountriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.country.GetCountriesRequest,
 *   !proto.country.GetCountriesResponse>}
 */
const methodInfo_CountryService_GetCountries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.country.GetCountriesResponse,
  /**
   * @param {!proto.country.GetCountriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.country.GetCountriesResponse.deserializeBinary
);


/**
 * @param {!proto.country.GetCountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.country.GetCountriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.country.GetCountriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.country.CountryServiceClient.prototype.getCountries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/country.CountryService/GetCountries',
      request,
      metadata || {},
      methodDescriptor_CountryService_GetCountries,
      callback);
};


/**
 * @param {!proto.country.GetCountriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.country.GetCountriesResponse>}
 *     A native promise that resolves to the response
 */
proto.country.CountryServicePromiseClient.prototype.getCountries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/country.CountryService/GetCountries',
      request,
      metadata || {},
      methodDescriptor_CountryService_GetCountries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.country.AddCountryRequest,
 *   !proto.country.AddCountryResponse>}
 */
const methodDescriptor_CountryService_AddCountry = new grpc.web.MethodDescriptor(
  '/country.CountryService/AddCountry',
  grpc.web.MethodType.UNARY,
  proto.country.AddCountryRequest,
  proto.country.AddCountryResponse,
  /**
   * @param {!proto.country.AddCountryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.country.AddCountryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.country.AddCountryRequest,
 *   !proto.country.AddCountryResponse>}
 */
const methodInfo_CountryService_AddCountry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.country.AddCountryResponse,
  /**
   * @param {!proto.country.AddCountryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.country.AddCountryResponse.deserializeBinary
);


/**
 * @param {!proto.country.AddCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.country.AddCountryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.country.AddCountryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.country.CountryServiceClient.prototype.addCountry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/country.CountryService/AddCountry',
      request,
      metadata || {},
      methodDescriptor_CountryService_AddCountry,
      callback);
};


/**
 * @param {!proto.country.AddCountryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.country.AddCountryResponse>}
 *     A native promise that resolves to the response
 */
proto.country.CountryServicePromiseClient.prototype.addCountry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/country.CountryService/AddCountry',
      request,
      metadata || {},
      methodDescriptor_CountryService_AddCountry);
};


module.exports = proto.country;

