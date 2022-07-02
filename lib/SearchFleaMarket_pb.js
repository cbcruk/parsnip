/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Session = (function() {

    /**
     * Properties of a Session.
     * @exports ISession
     * @interface ISession
     * @property {string|null} [id] Session id
     * @property {number|Long|null} [expiredTime] Session expiredTime
     */

    /**
     * Constructs a new Session.
     * @exports Session
     * @classdesc Represents a Session.
     * @implements ISession
     * @constructor
     * @param {ISession=} [properties] Properties to set
     */
    function Session(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Session id.
     * @member {string} id
     * @memberof Session
     * @instance
     */
    Session.prototype.id = "";

    /**
     * Session expiredTime.
     * @member {number|Long} expiredTime
     * @memberof Session
     * @instance
     */
    Session.prototype.expiredTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Session instance using the specified properties.
     * @function create
     * @memberof Session
     * @static
     * @param {ISession=} [properties] Properties to set
     * @returns {Session} Session instance
     */
    Session.create = function create(properties) {
        return new Session(properties);
    };

    /**
     * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
     * @function encode
     * @memberof Session
     * @static
     * @param {ISession} message Session message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Session.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.expiredTime != null && Object.hasOwnProperty.call(message, "expiredTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.expiredTime);
        return writer;
    };

    /**
     * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Session
     * @static
     * @param {ISession} message Session message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Session.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Session message from the specified reader or buffer.
     * @function decode
     * @memberof Session
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Session} Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Session.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Session();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.expiredTime = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Session message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Session
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Session} Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Session.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Session message.
     * @function verify
     * @memberof Session
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Session.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.expiredTime != null && message.hasOwnProperty("expiredTime"))
            if (!$util.isInteger(message.expiredTime) && !(message.expiredTime && $util.isInteger(message.expiredTime.low) && $util.isInteger(message.expiredTime.high)))
                return "expiredTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a Session message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Session
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Session} Session
     */
    Session.fromObject = function fromObject(object) {
        if (object instanceof $root.Session)
            return object;
        var message = new $root.Session();
        if (object.id != null)
            message.id = String(object.id);
        if (object.expiredTime != null)
            if ($util.Long)
                (message.expiredTime = $util.Long.fromValue(object.expiredTime)).unsigned = true;
            else if (typeof object.expiredTime === "string")
                message.expiredTime = parseInt(object.expiredTime, 10);
            else if (typeof object.expiredTime === "number")
                message.expiredTime = object.expiredTime;
            else if (typeof object.expiredTime === "object")
                message.expiredTime = new $util.LongBits(object.expiredTime.low >>> 0, object.expiredTime.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a Session message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Session
     * @static
     * @param {Session} message Session
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Session.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.expiredTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.expiredTime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.expiredTime != null && message.hasOwnProperty("expiredTime"))
            if (typeof message.expiredTime === "number")
                object.expiredTime = options.longs === String ? String(message.expiredTime) : message.expiredTime;
            else
                object.expiredTime = options.longs === String ? $util.Long.prototype.toString.call(message.expiredTime) : options.longs === Number ? new $util.LongBits(message.expiredTime.low >>> 0, message.expiredTime.high >>> 0).toNumber(true) : message.expiredTime;
        return object;
    };

    /**
     * Converts this Session to JSON.
     * @function toJSON
     * @memberof Session
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Session.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Session;
})();

$root.SearchFleaMarketRequest = (function() {

    /**
     * Properties of a SearchFleaMarketRequest.
     * @exports ISearchFleaMarketRequest
     * @interface ISearchFleaMarketRequest
     * @property {string|null} [query] SearchFleaMarketRequest query
     * @property {number|null} [regionId] SearchFleaMarketRequest regionId
     * @property {number|null} [pageSize] SearchFleaMarketRequest pageSize
     * @property {string|null} [pageToken] SearchFleaMarketRequest pageToken
     * @property {number|null} [sort] SearchFleaMarketRequest sort
     * @property {number|null} [regionRange] SearchFleaMarketRequest regionRange
     * @property {number|Long|null} [priceGte] SearchFleaMarketRequest priceGte
     * @property {number|Long|null} [priceLte] SearchFleaMarketRequest priceLte
     * @property {string|null} [lastAction] SearchFleaMarketRequest lastAction
     * @property {number|null} [freeShareEventEnabled] SearchFleaMarketRequest freeShareEventEnabled
     * @property {string|null} [queryFromV2] SearchFleaMarketRequest queryFromV2
     * @property {string|null} [funnelFromV2] SearchFleaMarketRequest funnelFromV2
     */

    /**
     * Constructs a new SearchFleaMarketRequest.
     * @exports SearchFleaMarketRequest
     * @classdesc Represents a SearchFleaMarketRequest.
     * @implements ISearchFleaMarketRequest
     * @constructor
     * @param {ISearchFleaMarketRequest=} [properties] Properties to set
     */
    function SearchFleaMarketRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchFleaMarketRequest query.
     * @member {string} query
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.query = "";

    /**
     * SearchFleaMarketRequest regionId.
     * @member {number} regionId
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.regionId = 0;

    /**
     * SearchFleaMarketRequest pageSize.
     * @member {number} pageSize
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.pageSize = 0;

    /**
     * SearchFleaMarketRequest pageToken.
     * @member {string} pageToken
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.pageToken = "";

    /**
     * SearchFleaMarketRequest sort.
     * @member {number} sort
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.sort = 0;

    /**
     * SearchFleaMarketRequest regionRange.
     * @member {number} regionRange
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.regionRange = 0;

    /**
     * SearchFleaMarketRequest priceGte.
     * @member {number|Long} priceGte
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.priceGte = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SearchFleaMarketRequest priceLte.
     * @member {number|Long} priceLte
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.priceLte = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SearchFleaMarketRequest lastAction.
     * @member {string} lastAction
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.lastAction = "";

    /**
     * SearchFleaMarketRequest freeShareEventEnabled.
     * @member {number} freeShareEventEnabled
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.freeShareEventEnabled = 0;

    /**
     * SearchFleaMarketRequest queryFromV2.
     * @member {string} queryFromV2
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.queryFromV2 = "";

    /**
     * SearchFleaMarketRequest funnelFromV2.
     * @member {string} funnelFromV2
     * @memberof SearchFleaMarketRequest
     * @instance
     */
    SearchFleaMarketRequest.prototype.funnelFromV2 = "";

    /**
     * Creates a new SearchFleaMarketRequest instance using the specified properties.
     * @function create
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {ISearchFleaMarketRequest=} [properties] Properties to set
     * @returns {SearchFleaMarketRequest} SearchFleaMarketRequest instance
     */
    SearchFleaMarketRequest.create = function create(properties) {
        return new SearchFleaMarketRequest(properties);
    };

    /**
     * Encodes the specified SearchFleaMarketRequest message. Does not implicitly {@link SearchFleaMarketRequest.verify|verify} messages.
     * @function encode
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {ISearchFleaMarketRequest} message SearchFleaMarketRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchFleaMarketRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
        if (message.regionId != null && Object.hasOwnProperty.call(message, "regionId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.regionId);
        if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
        if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.pageToken);
        if (message.sort != null && Object.hasOwnProperty.call(message, "sort"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sort);
        if (message.regionRange != null && Object.hasOwnProperty.call(message, "regionRange"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.regionRange);
        if (message.priceGte != null && Object.hasOwnProperty.call(message, "priceGte"))
            writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.priceGte);
        if (message.priceLte != null && Object.hasOwnProperty.call(message, "priceLte"))
            writer.uint32(/* id 9, wireType 1 =*/73).fixed64(message.priceLte);
        if (message.lastAction != null && Object.hasOwnProperty.call(message, "lastAction"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.lastAction);
        if (message.freeShareEventEnabled != null && Object.hasOwnProperty.call(message, "freeShareEventEnabled"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.freeShareEventEnabled);
        if (message.queryFromV2 != null && Object.hasOwnProperty.call(message, "queryFromV2"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.queryFromV2);
        if (message.funnelFromV2 != null && Object.hasOwnProperty.call(message, "funnelFromV2"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.funnelFromV2);
        return writer;
    };

    /**
     * Encodes the specified SearchFleaMarketRequest message, length delimited. Does not implicitly {@link SearchFleaMarketRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {ISearchFleaMarketRequest} message SearchFleaMarketRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchFleaMarketRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchFleaMarketRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchFleaMarketRequest} SearchFleaMarketRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchFleaMarketRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchFleaMarketRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.query = reader.string();
                break;
            case 2:
                message.regionId = reader.int32();
                break;
            case 3:
                message.pageSize = reader.int32();
                break;
            case 4:
                message.pageToken = reader.string();
                break;
            case 5:
                message.sort = reader.int32();
                break;
            case 6:
                message.regionRange = reader.int32();
                break;
            case 8:
                message.priceGte = reader.fixed64();
                break;
            case 9:
                message.priceLte = reader.fixed64();
                break;
            case 11:
                message.lastAction = reader.string();
                break;
            case 14:
                message.freeShareEventEnabled = reader.int32();
                break;
            case 15:
                message.queryFromV2 = reader.string();
                break;
            case 16:
                message.funnelFromV2 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SearchFleaMarketRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchFleaMarketRequest} SearchFleaMarketRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchFleaMarketRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchFleaMarketRequest message.
     * @function verify
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchFleaMarketRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.query != null && message.hasOwnProperty("query"))
            if (!$util.isString(message.query))
                return "query: string expected";
        if (message.regionId != null && message.hasOwnProperty("regionId"))
            if (!$util.isInteger(message.regionId))
                return "regionId: integer expected";
        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
            if (!$util.isInteger(message.pageSize))
                return "pageSize: integer expected";
        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
            if (!$util.isString(message.pageToken))
                return "pageToken: string expected";
        if (message.sort != null && message.hasOwnProperty("sort"))
            if (!$util.isInteger(message.sort))
                return "sort: integer expected";
        if (message.regionRange != null && message.hasOwnProperty("regionRange"))
            if (!$util.isInteger(message.regionRange))
                return "regionRange: integer expected";
        if (message.priceGte != null && message.hasOwnProperty("priceGte"))
            if (!$util.isInteger(message.priceGte) && !(message.priceGte && $util.isInteger(message.priceGte.low) && $util.isInteger(message.priceGte.high)))
                return "priceGte: integer|Long expected";
        if (message.priceLte != null && message.hasOwnProperty("priceLte"))
            if (!$util.isInteger(message.priceLte) && !(message.priceLte && $util.isInteger(message.priceLte.low) && $util.isInteger(message.priceLte.high)))
                return "priceLte: integer|Long expected";
        if (message.lastAction != null && message.hasOwnProperty("lastAction"))
            if (!$util.isString(message.lastAction))
                return "lastAction: string expected";
        if (message.freeShareEventEnabled != null && message.hasOwnProperty("freeShareEventEnabled"))
            if (!$util.isInteger(message.freeShareEventEnabled))
                return "freeShareEventEnabled: integer expected";
        if (message.queryFromV2 != null && message.hasOwnProperty("queryFromV2"))
            if (!$util.isString(message.queryFromV2))
                return "queryFromV2: string expected";
        if (message.funnelFromV2 != null && message.hasOwnProperty("funnelFromV2"))
            if (!$util.isString(message.funnelFromV2))
                return "funnelFromV2: string expected";
        return null;
    };

    /**
     * Creates a SearchFleaMarketRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchFleaMarketRequest} SearchFleaMarketRequest
     */
    SearchFleaMarketRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchFleaMarketRequest)
            return object;
        var message = new $root.SearchFleaMarketRequest();
        if (object.query != null)
            message.query = String(object.query);
        if (object.regionId != null)
            message.regionId = object.regionId | 0;
        if (object.pageSize != null)
            message.pageSize = object.pageSize | 0;
        if (object.pageToken != null)
            message.pageToken = String(object.pageToken);
        if (object.sort != null)
            message.sort = object.sort | 0;
        if (object.regionRange != null)
            message.regionRange = object.regionRange | 0;
        if (object.priceGte != null)
            if ($util.Long)
                (message.priceGte = $util.Long.fromValue(object.priceGte)).unsigned = false;
            else if (typeof object.priceGte === "string")
                message.priceGte = parseInt(object.priceGte, 10);
            else if (typeof object.priceGte === "number")
                message.priceGte = object.priceGte;
            else if (typeof object.priceGte === "object")
                message.priceGte = new $util.LongBits(object.priceGte.low >>> 0, object.priceGte.high >>> 0).toNumber();
        if (object.priceLte != null)
            if ($util.Long)
                (message.priceLte = $util.Long.fromValue(object.priceLte)).unsigned = false;
            else if (typeof object.priceLte === "string")
                message.priceLte = parseInt(object.priceLte, 10);
            else if (typeof object.priceLte === "number")
                message.priceLte = object.priceLte;
            else if (typeof object.priceLte === "object")
                message.priceLte = new $util.LongBits(object.priceLte.low >>> 0, object.priceLte.high >>> 0).toNumber();
        if (object.lastAction != null)
            message.lastAction = String(object.lastAction);
        if (object.freeShareEventEnabled != null)
            message.freeShareEventEnabled = object.freeShareEventEnabled | 0;
        if (object.queryFromV2 != null)
            message.queryFromV2 = String(object.queryFromV2);
        if (object.funnelFromV2 != null)
            message.funnelFromV2 = String(object.funnelFromV2);
        return message;
    };

    /**
     * Creates a plain object from a SearchFleaMarketRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchFleaMarketRequest
     * @static
     * @param {SearchFleaMarketRequest} message SearchFleaMarketRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchFleaMarketRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.query = "";
            object.regionId = 0;
            object.pageSize = 0;
            object.pageToken = "";
            object.sort = 0;
            object.regionRange = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.priceGte = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.priceGte = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.priceLte = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.priceLte = options.longs === String ? "0" : 0;
            object.lastAction = "";
            object.freeShareEventEnabled = 0;
            object.queryFromV2 = "";
            object.funnelFromV2 = "";
        }
        if (message.query != null && message.hasOwnProperty("query"))
            object.query = message.query;
        if (message.regionId != null && message.hasOwnProperty("regionId"))
            object.regionId = message.regionId;
        if (message.pageSize != null && message.hasOwnProperty("pageSize"))
            object.pageSize = message.pageSize;
        if (message.pageToken != null && message.hasOwnProperty("pageToken"))
            object.pageToken = message.pageToken;
        if (message.sort != null && message.hasOwnProperty("sort"))
            object.sort = message.sort;
        if (message.regionRange != null && message.hasOwnProperty("regionRange"))
            object.regionRange = message.regionRange;
        if (message.priceGte != null && message.hasOwnProperty("priceGte"))
            if (typeof message.priceGte === "number")
                object.priceGte = options.longs === String ? String(message.priceGte) : message.priceGte;
            else
                object.priceGte = options.longs === String ? $util.Long.prototype.toString.call(message.priceGte) : options.longs === Number ? new $util.LongBits(message.priceGte.low >>> 0, message.priceGte.high >>> 0).toNumber() : message.priceGte;
        if (message.priceLte != null && message.hasOwnProperty("priceLte"))
            if (typeof message.priceLte === "number")
                object.priceLte = options.longs === String ? String(message.priceLte) : message.priceLte;
            else
                object.priceLte = options.longs === String ? $util.Long.prototype.toString.call(message.priceLte) : options.longs === Number ? new $util.LongBits(message.priceLte.low >>> 0, message.priceLte.high >>> 0).toNumber() : message.priceLte;
        if (message.lastAction != null && message.hasOwnProperty("lastAction"))
            object.lastAction = message.lastAction;
        if (message.freeShareEventEnabled != null && message.hasOwnProperty("freeShareEventEnabled"))
            object.freeShareEventEnabled = message.freeShareEventEnabled;
        if (message.queryFromV2 != null && message.hasOwnProperty("queryFromV2"))
            object.queryFromV2 = message.queryFromV2;
        if (message.funnelFromV2 != null && message.hasOwnProperty("funnelFromV2"))
            object.funnelFromV2 = message.funnelFromV2;
        return object;
    };

    /**
     * Converts this SearchFleaMarketRequest to JSON.
     * @function toJSON
     * @memberof SearchFleaMarketRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchFleaMarketRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchFleaMarketRequest;
})();

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {number|null} [name] Request name
     * @property {string|null} [userAgent] Request userAgent
     * @property {string|null} [authToken] Request authToken
     * @property {string|null} [queryId] Request queryId
     * @property {ISession|null} [session] Request session
     * @property {ISearchFleaMarketRequest|null} [searchFleaMarketRequest] Request searchFleaMarketRequest
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request name.
     * @member {number} name
     * @memberof Request
     * @instance
     */
    Request.prototype.name = 0;

    /**
     * Request userAgent.
     * @member {string} userAgent
     * @memberof Request
     * @instance
     */
    Request.prototype.userAgent = "";

    /**
     * Request authToken.
     * @member {string} authToken
     * @memberof Request
     * @instance
     */
    Request.prototype.authToken = "";

    /**
     * Request queryId.
     * @member {string} queryId
     * @memberof Request
     * @instance
     */
    Request.prototype.queryId = "";

    /**
     * Request session.
     * @member {ISession|null|undefined} session
     * @memberof Request
     * @instance
     */
    Request.prototype.session = null;

    /**
     * Request searchFleaMarketRequest.
     * @member {ISearchFleaMarketRequest|null|undefined} searchFleaMarketRequest
     * @memberof Request
     * @instance
     */
    Request.prototype.searchFleaMarketRequest = null;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.name);
        if (message.userAgent != null && Object.hasOwnProperty.call(message, "userAgent"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.userAgent);
        if (message.authToken != null && Object.hasOwnProperty.call(message, "authToken"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.authToken);
        if (message.queryId != null && Object.hasOwnProperty.call(message, "queryId"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.queryId);
        if (message.session != null && Object.hasOwnProperty.call(message, "session"))
            $root.Session.encode(message.session, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.searchFleaMarketRequest != null && Object.hasOwnProperty.call(message, "searchFleaMarketRequest"))
            $root.SearchFleaMarketRequest.encode(message.searchFleaMarketRequest, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.int32();
                break;
            case 12:
                message.userAgent = reader.string();
                break;
            case 13:
                message.authToken = reader.string();
                break;
            case 14:
                message.queryId = reader.string();
                break;
            case 15:
                message.session = $root.Session.decode(reader, reader.uint32());
                break;
            case 106:
                message.searchFleaMarketRequest = $root.SearchFleaMarketRequest.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isInteger(message.name))
                return "name: integer expected";
        if (message.userAgent != null && message.hasOwnProperty("userAgent"))
            if (!$util.isString(message.userAgent))
                return "userAgent: string expected";
        if (message.authToken != null && message.hasOwnProperty("authToken"))
            if (!$util.isString(message.authToken))
                return "authToken: string expected";
        if (message.queryId != null && message.hasOwnProperty("queryId"))
            if (!$util.isString(message.queryId))
                return "queryId: string expected";
        if (message.session != null && message.hasOwnProperty("session")) {
            var error = $root.Session.verify(message.session);
            if (error)
                return "session." + error;
        }
        if (message.searchFleaMarketRequest != null && message.hasOwnProperty("searchFleaMarketRequest")) {
            var error = $root.SearchFleaMarketRequest.verify(message.searchFleaMarketRequest);
            if (error)
                return "searchFleaMarketRequest." + error;
        }
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        var message = new $root.Request();
        if (object.name != null)
            message.name = object.name | 0;
        if (object.userAgent != null)
            message.userAgent = String(object.userAgent);
        if (object.authToken != null)
            message.authToken = String(object.authToken);
        if (object.queryId != null)
            message.queryId = String(object.queryId);
        if (object.session != null) {
            if (typeof object.session !== "object")
                throw TypeError(".Request.session: object expected");
            message.session = $root.Session.fromObject(object.session);
        }
        if (object.searchFleaMarketRequest != null) {
            if (typeof object.searchFleaMarketRequest !== "object")
                throw TypeError(".Request.searchFleaMarketRequest: object expected");
            message.searchFleaMarketRequest = $root.SearchFleaMarketRequest.fromObject(object.searchFleaMarketRequest);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = 0;
            object.userAgent = "";
            object.authToken = "";
            object.queryId = "";
            object.session = null;
            object.searchFleaMarketRequest = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.userAgent != null && message.hasOwnProperty("userAgent"))
            object.userAgent = message.userAgent;
        if (message.authToken != null && message.hasOwnProperty("authToken"))
            object.authToken = message.authToken;
        if (message.queryId != null && message.hasOwnProperty("queryId"))
            object.queryId = message.queryId;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = $root.Session.toObject(message.session, options);
        if (message.searchFleaMarketRequest != null && message.hasOwnProperty("searchFleaMarketRequest"))
            object.searchFleaMarketRequest = $root.SearchFleaMarketRequest.toObject(message.searchFleaMarketRequest, options);
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Request;
})();

$root.Image = (function() {

    /**
     * Properties of an Image.
     * @exports IImage
     * @interface IImage
     * @property {string|null} [id] Image id
     * @property {string|null} [filepath] Image filepath
     * @property {string|null} [type] Image type
     * @property {string|null} [service] Image service
     * @property {number|null} [width] Image width
     * @property {number|null} [height] Image height
     * @property {string|null} [url] Image url
     * @property {string|null} [thumbnail] Image thumbnail
     * @property {string|null} [medium] Image medium
     * @property {number|null} [oldImageId] Image oldImageId
     * @property {string|null} [typename] Image typename
     */

    /**
     * Constructs a new Image.
     * @exports Image
     * @classdesc Represents an Image.
     * @implements IImage
     * @constructor
     * @param {IImage=} [properties] Properties to set
     */
    function Image(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Image id.
     * @member {string} id
     * @memberof Image
     * @instance
     */
    Image.prototype.id = "";

    /**
     * Image filepath.
     * @member {string} filepath
     * @memberof Image
     * @instance
     */
    Image.prototype.filepath = "";

    /**
     * Image type.
     * @member {string} type
     * @memberof Image
     * @instance
     */
    Image.prototype.type = "";

    /**
     * Image service.
     * @member {string} service
     * @memberof Image
     * @instance
     */
    Image.prototype.service = "";

    /**
     * Image width.
     * @member {number} width
     * @memberof Image
     * @instance
     */
    Image.prototype.width = 0;

    /**
     * Image height.
     * @member {number} height
     * @memberof Image
     * @instance
     */
    Image.prototype.height = 0;

    /**
     * Image url.
     * @member {string} url
     * @memberof Image
     * @instance
     */
    Image.prototype.url = "";

    /**
     * Image thumbnail.
     * @member {string} thumbnail
     * @memberof Image
     * @instance
     */
    Image.prototype.thumbnail = "";

    /**
     * Image medium.
     * @member {string} medium
     * @memberof Image
     * @instance
     */
    Image.prototype.medium = "";

    /**
     * Image oldImageId.
     * @member {number} oldImageId
     * @memberof Image
     * @instance
     */
    Image.prototype.oldImageId = 0;

    /**
     * Image typename.
     * @member {string} typename
     * @memberof Image
     * @instance
     */
    Image.prototype.typename = "";

    /**
     * Creates a new Image instance using the specified properties.
     * @function create
     * @memberof Image
     * @static
     * @param {IImage=} [properties] Properties to set
     * @returns {Image} Image instance
     */
    Image.create = function create(properties) {
        return new Image(properties);
    };

    /**
     * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
     * @function encode
     * @memberof Image
     * @static
     * @param {IImage} message Image message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Image.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.filepath);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
        if (message.service != null && Object.hasOwnProperty.call(message, "service"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.service);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.height);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.url);
        if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.thumbnail);
        if (message.medium != null && Object.hasOwnProperty.call(message, "medium"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.medium);
        if (message.oldImageId != null && Object.hasOwnProperty.call(message, "oldImageId"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.oldImageId);
        if (message.typename != null && Object.hasOwnProperty.call(message, "typename"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.typename);
        return writer;
    };

    /**
     * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Image
     * @static
     * @param {IImage} message Image message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Image.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Image message from the specified reader or buffer.
     * @function decode
     * @memberof Image
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Image} Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Image.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Image();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.filepath = reader.string();
                break;
            case 3:
                message.type = reader.string();
                break;
            case 4:
                message.service = reader.string();
                break;
            case 5:
                message.width = reader.int32();
                break;
            case 6:
                message.height = reader.int32();
                break;
            case 7:
                message.url = reader.string();
                break;
            case 8:
                message.thumbnail = reader.string();
                break;
            case 9:
                message.medium = reader.string();
                break;
            case 10:
                message.oldImageId = reader.int32();
                break;
            case 11:
                message.typename = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Image message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Image
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Image} Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Image.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Image message.
     * @function verify
     * @memberof Image
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Image.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.filepath != null && message.hasOwnProperty("filepath"))
            if (!$util.isString(message.filepath))
                return "filepath: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
            if (!$util.isString(message.thumbnail))
                return "thumbnail: string expected";
        if (message.medium != null && message.hasOwnProperty("medium"))
            if (!$util.isString(message.medium))
                return "medium: string expected";
        if (message.oldImageId != null && message.hasOwnProperty("oldImageId"))
            if (!$util.isInteger(message.oldImageId))
                return "oldImageId: integer expected";
        if (message.typename != null && message.hasOwnProperty("typename"))
            if (!$util.isString(message.typename))
                return "typename: string expected";
        return null;
    };

    /**
     * Creates an Image message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Image
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Image} Image
     */
    Image.fromObject = function fromObject(object) {
        if (object instanceof $root.Image)
            return object;
        var message = new $root.Image();
        if (object.id != null)
            message.id = String(object.id);
        if (object.filepath != null)
            message.filepath = String(object.filepath);
        if (object.type != null)
            message.type = String(object.type);
        if (object.service != null)
            message.service = String(object.service);
        if (object.width != null)
            message.width = object.width | 0;
        if (object.height != null)
            message.height = object.height | 0;
        if (object.url != null)
            message.url = String(object.url);
        if (object.thumbnail != null)
            message.thumbnail = String(object.thumbnail);
        if (object.medium != null)
            message.medium = String(object.medium);
        if (object.oldImageId != null)
            message.oldImageId = object.oldImageId | 0;
        if (object.typename != null)
            message.typename = String(object.typename);
        return message;
    };

    /**
     * Creates a plain object from an Image message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Image
     * @static
     * @param {Image} message Image
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Image.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.filepath = "";
            object.type = "";
            object.service = "";
            object.width = 0;
            object.height = 0;
            object.url = "";
            object.thumbnail = "";
            object.medium = "";
            object.oldImageId = 0;
            object.typename = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.filepath != null && message.hasOwnProperty("filepath"))
            object.filepath = message.filepath;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
            object.thumbnail = message.thumbnail;
        if (message.medium != null && message.hasOwnProperty("medium"))
            object.medium = message.medium;
        if (message.oldImageId != null && message.hasOwnProperty("oldImageId"))
            object.oldImageId = message.oldImageId;
        if (message.typename != null && message.hasOwnProperty("typename"))
            object.typename = message.typename;
        return object;
    };

    /**
     * Converts this Image to JSON.
     * @function toJSON
     * @memberof Image
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Image.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Image;
})();

$root.Timestamp = (function() {

    /**
     * Properties of a Timestamp.
     * @exports ITimestamp
     * @interface ITimestamp
     * @property {number|null} [seconds] Timestamp seconds
     * @property {number|null} [nanos] Timestamp nanos
     */

    /**
     * Constructs a new Timestamp.
     * @exports Timestamp
     * @classdesc Represents a Timestamp.
     * @implements ITimestamp
     * @constructor
     * @param {ITimestamp=} [properties] Properties to set
     */
    function Timestamp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Timestamp seconds.
     * @member {number} seconds
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.seconds = 0;

    /**
     * Timestamp nanos.
     * @member {number} nanos
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.nanos = 0;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @function create
     * @memberof Timestamp
     * @static
     * @param {ITimestamp=} [properties] Properties to set
     * @returns {Timestamp} Timestamp instance
     */
    Timestamp.create = function create(properties) {
        return new Timestamp(properties);
    };

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @function encode
     * @memberof Timestamp
     * @static
     * @param {ITimestamp} message Timestamp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timestamp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seconds);
        if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
        return writer;
    };

    /**
     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Timestamp
     * @static
     * @param {ITimestamp} message Timestamp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @function decode
     * @memberof Timestamp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Timestamp} Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timestamp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seconds = reader.int32();
                break;
            case 2:
                message.nanos = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Timestamp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Timestamp} Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Timestamp message.
     * @function verify
     * @memberof Timestamp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Timestamp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            if (!$util.isInteger(message.seconds))
                return "seconds: integer expected";
        if (message.nanos != null && message.hasOwnProperty("nanos"))
            if (!$util.isInteger(message.nanos))
                return "nanos: integer expected";
        return null;
    };

    /**
     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Timestamp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Timestamp} Timestamp
     */
    Timestamp.fromObject = function fromObject(object) {
        if (object instanceof $root.Timestamp)
            return object;
        var message = new $root.Timestamp();
        if (object.seconds != null)
            message.seconds = object.seconds | 0;
        if (object.nanos != null)
            message.nanos = object.nanos | 0;
        return message;
    };

    /**
     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Timestamp
     * @static
     * @param {Timestamp} message Timestamp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Timestamp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seconds = 0;
            object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            object.seconds = message.seconds;
        if (message.nanos != null && message.hasOwnProperty("nanos"))
            object.nanos = message.nanos;
        return object;
    };

    /**
     * Converts this Timestamp to JSON.
     * @function toJSON
     * @memberof Timestamp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Timestamp;
})();

$root.DoubleValue = (function() {

    /**
     * Properties of a DoubleValue.
     * @exports IDoubleValue
     * @interface IDoubleValue
     * @property {number|Long|null} [value] DoubleValue value
     */

    /**
     * Constructs a new DoubleValue.
     * @exports DoubleValue
     * @classdesc Represents a DoubleValue.
     * @implements IDoubleValue
     * @constructor
     * @param {IDoubleValue=} [properties] Properties to set
     */
    function DoubleValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DoubleValue value.
     * @member {number|Long} value
     * @memberof DoubleValue
     * @instance
     */
    DoubleValue.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new DoubleValue instance using the specified properties.
     * @function create
     * @memberof DoubleValue
     * @static
     * @param {IDoubleValue=} [properties] Properties to set
     * @returns {DoubleValue} DoubleValue instance
     */
    DoubleValue.create = function create(properties) {
        return new DoubleValue(properties);
    };

    /**
     * Encodes the specified DoubleValue message. Does not implicitly {@link DoubleValue.verify|verify} messages.
     * @function encode
     * @memberof DoubleValue
     * @static
     * @param {IDoubleValue} message DoubleValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DoubleValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.value);
        return writer;
    };

    /**
     * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link DoubleValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DoubleValue
     * @static
     * @param {IDoubleValue} message DoubleValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DoubleValue message from the specified reader or buffer.
     * @function decode
     * @memberof DoubleValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DoubleValue} DoubleValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DoubleValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DoubleValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.fixed64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DoubleValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DoubleValue} DoubleValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DoubleValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DoubleValue message.
     * @function verify
     * @memberof DoubleValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DoubleValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DoubleValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DoubleValue} DoubleValue
     */
    DoubleValue.fromObject = function fromObject(object) {
        if (object instanceof $root.DoubleValue)
            return object;
        var message = new $root.DoubleValue();
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = false;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DoubleValue
     * @static
     * @param {DoubleValue} message DoubleValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DoubleValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
        return object;
    };

    /**
     * Converts this DoubleValue to JSON.
     * @function toJSON
     * @memberof DoubleValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DoubleValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DoubleValue;
})();

$root.FleaMarketDoc = (function() {

    /**
     * Properties of a FleaMarketDoc.
     * @exports IFleaMarketDoc
     * @interface IFleaMarketDoc
     * @property {number|null} [docId] FleaMarketDoc docId
     * @property {string|null} [docToken] FleaMarketDoc docToken
     * @property {string|null} [docIdStr] FleaMarketDoc docIdStr
     * @property {number|null} [id] FleaMarketDoc id
     * @property {number|null} [userId] FleaMarketDoc userId
     * @property {number|null} [regionId] FleaMarketDoc regionId
     * @property {string|null} [regionName] FleaMarketDoc regionName
     * @property {number|null} [categoryId] FleaMarketDoc categoryId
     * @property {number|null} [firstImageId] FleaMarketDoc firstImageId
     * @property {number|null} [status] FleaMarketDoc status
     * @property {number|null} [visible] FleaMarketDoc visible
     * @property {string|null} [publishRange] FleaMarketDoc publishRange
     * @property {number|Long|null} [score] FleaMarketDoc score
     * @property {IDoubleValue|null} [price] FleaMarketDoc price
     * @property {string|null} [title] FleaMarketDoc title
     * @property {string|null} [content] FleaMarketDoc content
     * @property {number|null} [watchesCount] FleaMarketDoc watchesCount
     * @property {number|null} [chatRoomsCount] FleaMarketDoc chatRoomsCount
     * @property {number|null} [republishCount] FleaMarketDoc republishCount
     * @property {ITimestamp|null} [publishedAt] FleaMarketDoc publishedAt
     * @property {ITimestamp|null} [createdAt] FleaMarketDoc createdAt
     * @property {number|null} [userChatRoomsCount] FleaMarketDoc userChatRoomsCount
     * @property {IImage|null} [firstImage] FleaMarketDoc firstImage
     */

    /**
     * Constructs a new FleaMarketDoc.
     * @exports FleaMarketDoc
     * @classdesc Represents a FleaMarketDoc.
     * @implements IFleaMarketDoc
     * @constructor
     * @param {IFleaMarketDoc=} [properties] Properties to set
     */
    function FleaMarketDoc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FleaMarketDoc docId.
     * @member {number} docId
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.docId = 0;

    /**
     * FleaMarketDoc docToken.
     * @member {string} docToken
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.docToken = "";

    /**
     * FleaMarketDoc docIdStr.
     * @member {string} docIdStr
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.docIdStr = "";

    /**
     * FleaMarketDoc id.
     * @member {number} id
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.id = 0;

    /**
     * FleaMarketDoc userId.
     * @member {number} userId
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.userId = 0;

    /**
     * FleaMarketDoc regionId.
     * @member {number} regionId
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.regionId = 0;

    /**
     * FleaMarketDoc regionName.
     * @member {string} regionName
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.regionName = "";

    /**
     * FleaMarketDoc categoryId.
     * @member {number} categoryId
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.categoryId = 0;

    /**
     * FleaMarketDoc firstImageId.
     * @member {number} firstImageId
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.firstImageId = 0;

    /**
     * FleaMarketDoc status.
     * @member {number} status
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.status = 0;

    /**
     * FleaMarketDoc visible.
     * @member {number} visible
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.visible = 0;

    /**
     * FleaMarketDoc publishRange.
     * @member {string} publishRange
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.publishRange = "";

    /**
     * FleaMarketDoc score.
     * @member {number|Long} score
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FleaMarketDoc price.
     * @member {IDoubleValue|null|undefined} price
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.price = null;

    /**
     * FleaMarketDoc title.
     * @member {string} title
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.title = "";

    /**
     * FleaMarketDoc content.
     * @member {string} content
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.content = "";

    /**
     * FleaMarketDoc watchesCount.
     * @member {number} watchesCount
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.watchesCount = 0;

    /**
     * FleaMarketDoc chatRoomsCount.
     * @member {number} chatRoomsCount
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.chatRoomsCount = 0;

    /**
     * FleaMarketDoc republishCount.
     * @member {number} republishCount
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.republishCount = 0;

    /**
     * FleaMarketDoc publishedAt.
     * @member {ITimestamp|null|undefined} publishedAt
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.publishedAt = null;

    /**
     * FleaMarketDoc createdAt.
     * @member {ITimestamp|null|undefined} createdAt
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.createdAt = null;

    /**
     * FleaMarketDoc userChatRoomsCount.
     * @member {number} userChatRoomsCount
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.userChatRoomsCount = 0;

    /**
     * FleaMarketDoc firstImage.
     * @member {IImage|null|undefined} firstImage
     * @memberof FleaMarketDoc
     * @instance
     */
    FleaMarketDoc.prototype.firstImage = null;

    /**
     * Creates a new FleaMarketDoc instance using the specified properties.
     * @function create
     * @memberof FleaMarketDoc
     * @static
     * @param {IFleaMarketDoc=} [properties] Properties to set
     * @returns {FleaMarketDoc} FleaMarketDoc instance
     */
    FleaMarketDoc.create = function create(properties) {
        return new FleaMarketDoc(properties);
    };

    /**
     * Encodes the specified FleaMarketDoc message. Does not implicitly {@link FleaMarketDoc.verify|verify} messages.
     * @function encode
     * @memberof FleaMarketDoc
     * @static
     * @param {IFleaMarketDoc} message FleaMarketDoc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FleaMarketDoc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.docId != null && Object.hasOwnProperty.call(message, "docId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.docId);
        if (message.docToken != null && Object.hasOwnProperty.call(message, "docToken"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.docToken);
        if (message.docIdStr != null && Object.hasOwnProperty.call(message, "docIdStr"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.docIdStr);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.id);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.userId);
        if (message.regionId != null && Object.hasOwnProperty.call(message, "regionId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.regionId);
        if (message.regionName != null && Object.hasOwnProperty.call(message, "regionName"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.regionName);
        if (message.categoryId != null && Object.hasOwnProperty.call(message, "categoryId"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.categoryId);
        if (message.firstImageId != null && Object.hasOwnProperty.call(message, "firstImageId"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.firstImageId);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.status);
        if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.visible);
        if (message.publishRange != null && Object.hasOwnProperty.call(message, "publishRange"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.publishRange);
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(/* id 19, wireType 1 =*/153).fixed64(message.score);
        if (message.price != null && Object.hasOwnProperty.call(message, "price"))
            $root.DoubleValue.encode(message.price, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.title);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 22, wireType 2 =*/178).string(message.content);
        if (message.watchesCount != null && Object.hasOwnProperty.call(message, "watchesCount"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.watchesCount);
        if (message.chatRoomsCount != null && Object.hasOwnProperty.call(message, "chatRoomsCount"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.chatRoomsCount);
        if (message.republishCount != null && Object.hasOwnProperty.call(message, "republishCount"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.republishCount);
        if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
            $root.Timestamp.encode(message.publishedAt, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            $root.Timestamp.encode(message.createdAt, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.userChatRoomsCount != null && Object.hasOwnProperty.call(message, "userChatRoomsCount"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.userChatRoomsCount);
        if (message.firstImage != null && Object.hasOwnProperty.call(message, "firstImage"))
            $root.Image.encode(message.firstImage, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FleaMarketDoc message, length delimited. Does not implicitly {@link FleaMarketDoc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FleaMarketDoc
     * @static
     * @param {IFleaMarketDoc} message FleaMarketDoc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FleaMarketDoc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FleaMarketDoc message from the specified reader or buffer.
     * @function decode
     * @memberof FleaMarketDoc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FleaMarketDoc} FleaMarketDoc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FleaMarketDoc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FleaMarketDoc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.docId = reader.int32();
                break;
            case 2:
                message.docToken = reader.string();
                break;
            case 3:
                message.docIdStr = reader.string();
                break;
            case 10:
                message.id = reader.int32();
                break;
            case 11:
                message.userId = reader.int32();
                break;
            case 12:
                message.regionId = reader.int32();
                break;
            case 13:
                message.regionName = reader.string();
                break;
            case 14:
                message.categoryId = reader.int32();
                break;
            case 15:
                message.firstImageId = reader.int32();
                break;
            case 16:
                message.status = reader.int32();
                break;
            case 17:
                message.visible = reader.int32();
                break;
            case 18:
                message.publishRange = reader.string();
                break;
            case 19:
                message.score = reader.fixed64();
                break;
            case 20:
                message.price = $root.DoubleValue.decode(reader, reader.uint32());
                break;
            case 21:
                message.title = reader.string();
                break;
            case 22:
                message.content = reader.string();
                break;
            case 23:
                message.watchesCount = reader.int32();
                break;
            case 24:
                message.chatRoomsCount = reader.int32();
                break;
            case 25:
                message.republishCount = reader.int32();
                break;
            case 26:
                message.publishedAt = $root.Timestamp.decode(reader, reader.uint32());
                break;
            case 27:
                message.createdAt = $root.Timestamp.decode(reader, reader.uint32());
                break;
            case 28:
                message.userChatRoomsCount = reader.int32();
                break;
            case 41:
                message.firstImage = $root.Image.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FleaMarketDoc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FleaMarketDoc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FleaMarketDoc} FleaMarketDoc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FleaMarketDoc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FleaMarketDoc message.
     * @function verify
     * @memberof FleaMarketDoc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FleaMarketDoc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.docId != null && message.hasOwnProperty("docId"))
            if (!$util.isInteger(message.docId))
                return "docId: integer expected";
        if (message.docToken != null && message.hasOwnProperty("docToken"))
            if (!$util.isString(message.docToken))
                return "docToken: string expected";
        if (message.docIdStr != null && message.hasOwnProperty("docIdStr"))
            if (!$util.isString(message.docIdStr))
                return "docIdStr: string expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.regionId != null && message.hasOwnProperty("regionId"))
            if (!$util.isInteger(message.regionId))
                return "regionId: integer expected";
        if (message.regionName != null && message.hasOwnProperty("regionName"))
            if (!$util.isString(message.regionName))
                return "regionName: string expected";
        if (message.categoryId != null && message.hasOwnProperty("categoryId"))
            if (!$util.isInteger(message.categoryId))
                return "categoryId: integer expected";
        if (message.firstImageId != null && message.hasOwnProperty("firstImageId"))
            if (!$util.isInteger(message.firstImageId))
                return "firstImageId: integer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.visible != null && message.hasOwnProperty("visible"))
            if (!$util.isInteger(message.visible))
                return "visible: integer expected";
        if (message.publishRange != null && message.hasOwnProperty("publishRange"))
            if (!$util.isString(message.publishRange))
                return "publishRange: string expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                return "score: integer|Long expected";
        if (message.price != null && message.hasOwnProperty("price")) {
            var error = $root.DoubleValue.verify(message.price);
            if (error)
                return "price." + error;
        }
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.watchesCount != null && message.hasOwnProperty("watchesCount"))
            if (!$util.isInteger(message.watchesCount))
                return "watchesCount: integer expected";
        if (message.chatRoomsCount != null && message.hasOwnProperty("chatRoomsCount"))
            if (!$util.isInteger(message.chatRoomsCount))
                return "chatRoomsCount: integer expected";
        if (message.republishCount != null && message.hasOwnProperty("republishCount"))
            if (!$util.isInteger(message.republishCount))
                return "republishCount: integer expected";
        if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
            var error = $root.Timestamp.verify(message.publishedAt);
            if (error)
                return "publishedAt." + error;
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
            var error = $root.Timestamp.verify(message.createdAt);
            if (error)
                return "createdAt." + error;
        }
        if (message.userChatRoomsCount != null && message.hasOwnProperty("userChatRoomsCount"))
            if (!$util.isInteger(message.userChatRoomsCount))
                return "userChatRoomsCount: integer expected";
        if (message.firstImage != null && message.hasOwnProperty("firstImage")) {
            var error = $root.Image.verify(message.firstImage);
            if (error)
                return "firstImage." + error;
        }
        return null;
    };

    /**
     * Creates a FleaMarketDoc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FleaMarketDoc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FleaMarketDoc} FleaMarketDoc
     */
    FleaMarketDoc.fromObject = function fromObject(object) {
        if (object instanceof $root.FleaMarketDoc)
            return object;
        var message = new $root.FleaMarketDoc();
        if (object.docId != null)
            message.docId = object.docId | 0;
        if (object.docToken != null)
            message.docToken = String(object.docToken);
        if (object.docIdStr != null)
            message.docIdStr = String(object.docIdStr);
        if (object.id != null)
            message.id = object.id | 0;
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.regionId != null)
            message.regionId = object.regionId | 0;
        if (object.regionName != null)
            message.regionName = String(object.regionName);
        if (object.categoryId != null)
            message.categoryId = object.categoryId | 0;
        if (object.firstImageId != null)
            message.firstImageId = object.firstImageId | 0;
        if (object.status != null)
            message.status = object.status | 0;
        if (object.visible != null)
            message.visible = object.visible | 0;
        if (object.publishRange != null)
            message.publishRange = String(object.publishRange);
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        if (object.price != null) {
            if (typeof object.price !== "object")
                throw TypeError(".FleaMarketDoc.price: object expected");
            message.price = $root.DoubleValue.fromObject(object.price);
        }
        if (object.title != null)
            message.title = String(object.title);
        if (object.content != null)
            message.content = String(object.content);
        if (object.watchesCount != null)
            message.watchesCount = object.watchesCount | 0;
        if (object.chatRoomsCount != null)
            message.chatRoomsCount = object.chatRoomsCount | 0;
        if (object.republishCount != null)
            message.republishCount = object.republishCount | 0;
        if (object.publishedAt != null) {
            if (typeof object.publishedAt !== "object")
                throw TypeError(".FleaMarketDoc.publishedAt: object expected");
            message.publishedAt = $root.Timestamp.fromObject(object.publishedAt);
        }
        if (object.createdAt != null) {
            if (typeof object.createdAt !== "object")
                throw TypeError(".FleaMarketDoc.createdAt: object expected");
            message.createdAt = $root.Timestamp.fromObject(object.createdAt);
        }
        if (object.userChatRoomsCount != null)
            message.userChatRoomsCount = object.userChatRoomsCount | 0;
        if (object.firstImage != null) {
            if (typeof object.firstImage !== "object")
                throw TypeError(".FleaMarketDoc.firstImage: object expected");
            message.firstImage = $root.Image.fromObject(object.firstImage);
        }
        return message;
    };

    /**
     * Creates a plain object from a FleaMarketDoc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FleaMarketDoc
     * @static
     * @param {FleaMarketDoc} message FleaMarketDoc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FleaMarketDoc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.docId = 0;
            object.docToken = "";
            object.docIdStr = "";
            object.id = 0;
            object.userId = 0;
            object.regionId = 0;
            object.regionName = "";
            object.categoryId = 0;
            object.firstImageId = 0;
            object.status = 0;
            object.visible = 0;
            object.publishRange = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
            object.price = null;
            object.title = "";
            object.content = "";
            object.watchesCount = 0;
            object.chatRoomsCount = 0;
            object.republishCount = 0;
            object.publishedAt = null;
            object.createdAt = null;
            object.userChatRoomsCount = 0;
            object.firstImage = null;
        }
        if (message.docId != null && message.hasOwnProperty("docId"))
            object.docId = message.docId;
        if (message.docToken != null && message.hasOwnProperty("docToken"))
            object.docToken = message.docToken;
        if (message.docIdStr != null && message.hasOwnProperty("docIdStr"))
            object.docIdStr = message.docIdStr;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.regionId != null && message.hasOwnProperty("regionId"))
            object.regionId = message.regionId;
        if (message.regionName != null && message.hasOwnProperty("regionName"))
            object.regionName = message.regionName;
        if (message.categoryId != null && message.hasOwnProperty("categoryId"))
            object.categoryId = message.categoryId;
        if (message.firstImageId != null && message.hasOwnProperty("firstImageId"))
            object.firstImageId = message.firstImageId;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.visible != null && message.hasOwnProperty("visible"))
            object.visible = message.visible;
        if (message.publishRange != null && message.hasOwnProperty("publishRange"))
            object.publishRange = message.publishRange;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        if (message.price != null && message.hasOwnProperty("price"))
            object.price = $root.DoubleValue.toObject(message.price, options);
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.watchesCount != null && message.hasOwnProperty("watchesCount"))
            object.watchesCount = message.watchesCount;
        if (message.chatRoomsCount != null && message.hasOwnProperty("chatRoomsCount"))
            object.chatRoomsCount = message.chatRoomsCount;
        if (message.republishCount != null && message.hasOwnProperty("republishCount"))
            object.republishCount = message.republishCount;
        if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
            object.publishedAt = $root.Timestamp.toObject(message.publishedAt, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = $root.Timestamp.toObject(message.createdAt, options);
        if (message.userChatRoomsCount != null && message.hasOwnProperty("userChatRoomsCount"))
            object.userChatRoomsCount = message.userChatRoomsCount;
        if (message.firstImage != null && message.hasOwnProperty("firstImage"))
            object.firstImage = $root.Image.toObject(message.firstImage, options);
        return object;
    };

    /**
     * Converts this FleaMarketDoc to JSON.
     * @function toJSON
     * @memberof FleaMarketDoc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FleaMarketDoc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FleaMarketDoc;
})();

$root.SearchFleaMarketResponse = (function() {

    /**
     * Properties of a SearchFleaMarketResponse.
     * @exports ISearchFleaMarketResponse
     * @interface ISearchFleaMarketResponse
     * @property {Array.<IFleaMarketDoc>|null} [docsList] SearchFleaMarketResponse docsList
     * @property {string|null} [nextPageToken] SearchFleaMarketResponse nextPageToken
     * @property {number|null} [isRecommendNotificationKeyword] SearchFleaMarketResponse isRecommendNotificationKeyword
     * @property {string|null} [recommendTab] SearchFleaMarketResponse recommendTab
     */

    /**
     * Constructs a new SearchFleaMarketResponse.
     * @exports SearchFleaMarketResponse
     * @classdesc Represents a SearchFleaMarketResponse.
     * @implements ISearchFleaMarketResponse
     * @constructor
     * @param {ISearchFleaMarketResponse=} [properties] Properties to set
     */
    function SearchFleaMarketResponse(properties) {
        this.docsList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchFleaMarketResponse docsList.
     * @member {Array.<IFleaMarketDoc>} docsList
     * @memberof SearchFleaMarketResponse
     * @instance
     */
    SearchFleaMarketResponse.prototype.docsList = $util.emptyArray;

    /**
     * SearchFleaMarketResponse nextPageToken.
     * @member {string} nextPageToken
     * @memberof SearchFleaMarketResponse
     * @instance
     */
    SearchFleaMarketResponse.prototype.nextPageToken = "";

    /**
     * SearchFleaMarketResponse isRecommendNotificationKeyword.
     * @member {number} isRecommendNotificationKeyword
     * @memberof SearchFleaMarketResponse
     * @instance
     */
    SearchFleaMarketResponse.prototype.isRecommendNotificationKeyword = 0;

    /**
     * SearchFleaMarketResponse recommendTab.
     * @member {string} recommendTab
     * @memberof SearchFleaMarketResponse
     * @instance
     */
    SearchFleaMarketResponse.prototype.recommendTab = "";

    /**
     * Creates a new SearchFleaMarketResponse instance using the specified properties.
     * @function create
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {ISearchFleaMarketResponse=} [properties] Properties to set
     * @returns {SearchFleaMarketResponse} SearchFleaMarketResponse instance
     */
    SearchFleaMarketResponse.create = function create(properties) {
        return new SearchFleaMarketResponse(properties);
    };

    /**
     * Encodes the specified SearchFleaMarketResponse message. Does not implicitly {@link SearchFleaMarketResponse.verify|verify} messages.
     * @function encode
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {ISearchFleaMarketResponse} message SearchFleaMarketResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchFleaMarketResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.docsList != null && message.docsList.length)
            for (var i = 0; i < message.docsList.length; ++i)
                $root.FleaMarketDoc.encode(message.docsList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
        if (message.isRecommendNotificationKeyword != null && Object.hasOwnProperty.call(message, "isRecommendNotificationKeyword"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.isRecommendNotificationKeyword);
        if (message.recommendTab != null && Object.hasOwnProperty.call(message, "recommendTab"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.recommendTab);
        return writer;
    };

    /**
     * Encodes the specified SearchFleaMarketResponse message, length delimited. Does not implicitly {@link SearchFleaMarketResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {ISearchFleaMarketResponse} message SearchFleaMarketResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchFleaMarketResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchFleaMarketResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchFleaMarketResponse} SearchFleaMarketResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchFleaMarketResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchFleaMarketResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.docsList && message.docsList.length))
                    message.docsList = [];
                message.docsList.push($root.FleaMarketDoc.decode(reader, reader.uint32()));
                break;
            case 2:
                message.nextPageToken = reader.string();
                break;
            case 4:
                message.isRecommendNotificationKeyword = reader.int32();
                break;
            case 5:
                message.recommendTab = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SearchFleaMarketResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchFleaMarketResponse} SearchFleaMarketResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchFleaMarketResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchFleaMarketResponse message.
     * @function verify
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchFleaMarketResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.docsList != null && message.hasOwnProperty("docsList")) {
            if (!Array.isArray(message.docsList))
                return "docsList: array expected";
            for (var i = 0; i < message.docsList.length; ++i) {
                var error = $root.FleaMarketDoc.verify(message.docsList[i]);
                if (error)
                    return "docsList." + error;
            }
        }
        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
            if (!$util.isString(message.nextPageToken))
                return "nextPageToken: string expected";
        if (message.isRecommendNotificationKeyword != null && message.hasOwnProperty("isRecommendNotificationKeyword"))
            if (!$util.isInteger(message.isRecommendNotificationKeyword))
                return "isRecommendNotificationKeyword: integer expected";
        if (message.recommendTab != null && message.hasOwnProperty("recommendTab"))
            if (!$util.isString(message.recommendTab))
                return "recommendTab: string expected";
        return null;
    };

    /**
     * Creates a SearchFleaMarketResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchFleaMarketResponse} SearchFleaMarketResponse
     */
    SearchFleaMarketResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchFleaMarketResponse)
            return object;
        var message = new $root.SearchFleaMarketResponse();
        if (object.docsList) {
            if (!Array.isArray(object.docsList))
                throw TypeError(".SearchFleaMarketResponse.docsList: array expected");
            message.docsList = [];
            for (var i = 0; i < object.docsList.length; ++i) {
                if (typeof object.docsList[i] !== "object")
                    throw TypeError(".SearchFleaMarketResponse.docsList: object expected");
                message.docsList[i] = $root.FleaMarketDoc.fromObject(object.docsList[i]);
            }
        }
        if (object.nextPageToken != null)
            message.nextPageToken = String(object.nextPageToken);
        if (object.isRecommendNotificationKeyword != null)
            message.isRecommendNotificationKeyword = object.isRecommendNotificationKeyword | 0;
        if (object.recommendTab != null)
            message.recommendTab = String(object.recommendTab);
        return message;
    };

    /**
     * Creates a plain object from a SearchFleaMarketResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchFleaMarketResponse
     * @static
     * @param {SearchFleaMarketResponse} message SearchFleaMarketResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchFleaMarketResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.docsList = [];
        if (options.defaults) {
            object.nextPageToken = "";
            object.isRecommendNotificationKeyword = 0;
            object.recommendTab = "";
        }
        if (message.docsList && message.docsList.length) {
            object.docsList = [];
            for (var j = 0; j < message.docsList.length; ++j)
                object.docsList[j] = $root.FleaMarketDoc.toObject(message.docsList[j], options);
        }
        if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
            object.nextPageToken = message.nextPageToken;
        if (message.isRecommendNotificationKeyword != null && message.hasOwnProperty("isRecommendNotificationKeyword"))
            object.isRecommendNotificationKeyword = message.isRecommendNotificationKeyword;
        if (message.recommendTab != null && message.hasOwnProperty("recommendTab"))
            object.recommendTab = message.recommendTab;
        return object;
    };

    /**
     * Converts this SearchFleaMarketResponse to JSON.
     * @function toJSON
     * @memberof SearchFleaMarketResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchFleaMarketResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchFleaMarketResponse;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {string|null} [requestId] Response requestId
     * @property {string|null} [queryId] Response queryId
     * @property {ISession|null} [session] Response session
     * @property {ISearchFleaMarketResponse|null} [searchFleaMarketResponse] Response searchFleaMarketResponse
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response requestId.
     * @member {string} requestId
     * @memberof Response
     * @instance
     */
    Response.prototype.requestId = "";

    /**
     * Response queryId.
     * @member {string} queryId
     * @memberof Response
     * @instance
     */
    Response.prototype.queryId = "";

    /**
     * Response session.
     * @member {ISession|null|undefined} session
     * @memberof Response
     * @instance
     */
    Response.prototype.session = null;

    /**
     * Response searchFleaMarketResponse.
     * @member {ISearchFleaMarketResponse|null|undefined} searchFleaMarketResponse
     * @memberof Response
     * @instance
     */
    Response.prototype.searchFleaMarketResponse = null;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.requestId);
        if (message.queryId != null && Object.hasOwnProperty.call(message, "queryId"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.queryId);
        if (message.session != null && Object.hasOwnProperty.call(message, "session"))
            $root.Session.encode(message.session, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.searchFleaMarketResponse != null && Object.hasOwnProperty.call(message, "searchFleaMarketResponse"))
            $root.SearchFleaMarketResponse.encode(message.searchFleaMarketResponse, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 11:
                message.requestId = reader.string();
                break;
            case 12:
                message.queryId = reader.string();
                break;
            case 13:
                message.session = $root.Session.decode(reader, reader.uint32());
                break;
            case 106:
                message.searchFleaMarketResponse = $root.SearchFleaMarketResponse.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.queryId != null && message.hasOwnProperty("queryId"))
            if (!$util.isString(message.queryId))
                return "queryId: string expected";
        if (message.session != null && message.hasOwnProperty("session")) {
            var error = $root.Session.verify(message.session);
            if (error)
                return "session." + error;
        }
        if (message.searchFleaMarketResponse != null && message.hasOwnProperty("searchFleaMarketResponse")) {
            var error = $root.SearchFleaMarketResponse.verify(message.searchFleaMarketResponse);
            if (error)
                return "searchFleaMarketResponse." + error;
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.queryId != null)
            message.queryId = String(object.queryId);
        if (object.session != null) {
            if (typeof object.session !== "object")
                throw TypeError(".Response.session: object expected");
            message.session = $root.Session.fromObject(object.session);
        }
        if (object.searchFleaMarketResponse != null) {
            if (typeof object.searchFleaMarketResponse !== "object")
                throw TypeError(".Response.searchFleaMarketResponse: object expected");
            message.searchFleaMarketResponse = $root.SearchFleaMarketResponse.fromObject(object.searchFleaMarketResponse);
        }
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.requestId = "";
            object.queryId = "";
            object.session = null;
            object.searchFleaMarketResponse = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.queryId != null && message.hasOwnProperty("queryId"))
            object.queryId = message.queryId;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = $root.Session.toObject(message.session, options);
        if (message.searchFleaMarketResponse != null && message.hasOwnProperty("searchFleaMarketResponse"))
            object.searchFleaMarketResponse = $root.SearchFleaMarketResponse.toObject(message.searchFleaMarketResponse, options);
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Response;
})();

module.exports = $root;
