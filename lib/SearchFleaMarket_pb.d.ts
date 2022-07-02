import * as $protobuf from "protobufjs";
/** Properties of a Session. */
export interface ISession {

    /** Session id */
    id?: (string|null);

    /** Session expiredTime */
    expiredTime?: (number|Long|null);
}

/** Represents a Session. */
export class Session implements ISession {

    /**
     * Constructs a new Session.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISession);

    /** Session id. */
    public id: string;

    /** Session expiredTime. */
    public expiredTime: (number|Long);

    /**
     * Creates a new Session instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Session instance
     */
    public static create(properties?: ISession): Session;

    /**
     * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Session message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Session;

    /**
     * Decodes a Session message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Session;

    /**
     * Verifies a Session message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Session message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Session
     */
    public static fromObject(object: { [k: string]: any }): Session;

    /**
     * Creates a plain object from a Session message. Also converts values to other types if specified.
     * @param message Session
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Session to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchFleaMarketRequest. */
export interface ISearchFleaMarketRequest {

    /** SearchFleaMarketRequest query */
    query?: (string|null);

    /** SearchFleaMarketRequest regionId */
    regionId?: (number|null);

    /** SearchFleaMarketRequest pageSize */
    pageSize?: (number|null);

    /** SearchFleaMarketRequest pageToken */
    pageToken?: (string|null);

    /** SearchFleaMarketRequest sort */
    sort?: (number|null);

    /** SearchFleaMarketRequest regionRange */
    regionRange?: (number|null);

    /** SearchFleaMarketRequest priceGte */
    priceGte?: (number|Long|null);

    /** SearchFleaMarketRequest priceLte */
    priceLte?: (number|Long|null);

    /** SearchFleaMarketRequest lastAction */
    lastAction?: (string|null);

    /** SearchFleaMarketRequest freeShareEventEnabled */
    freeShareEventEnabled?: (number|null);

    /** SearchFleaMarketRequest queryFromV2 */
    queryFromV2?: (string|null);

    /** SearchFleaMarketRequest funnelFromV2 */
    funnelFromV2?: (string|null);
}

/** Represents a SearchFleaMarketRequest. */
export class SearchFleaMarketRequest implements ISearchFleaMarketRequest {

    /**
     * Constructs a new SearchFleaMarketRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchFleaMarketRequest);

    /** SearchFleaMarketRequest query. */
    public query: string;

    /** SearchFleaMarketRequest regionId. */
    public regionId: number;

    /** SearchFleaMarketRequest pageSize. */
    public pageSize: number;

    /** SearchFleaMarketRequest pageToken. */
    public pageToken: string;

    /** SearchFleaMarketRequest sort. */
    public sort: number;

    /** SearchFleaMarketRequest regionRange. */
    public regionRange: number;

    /** SearchFleaMarketRequest priceGte. */
    public priceGte: (number|Long);

    /** SearchFleaMarketRequest priceLte. */
    public priceLte: (number|Long);

    /** SearchFleaMarketRequest lastAction. */
    public lastAction: string;

    /** SearchFleaMarketRequest freeShareEventEnabled. */
    public freeShareEventEnabled: number;

    /** SearchFleaMarketRequest queryFromV2. */
    public queryFromV2: string;

    /** SearchFleaMarketRequest funnelFromV2. */
    public funnelFromV2: string;

    /**
     * Creates a new SearchFleaMarketRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchFleaMarketRequest instance
     */
    public static create(properties?: ISearchFleaMarketRequest): SearchFleaMarketRequest;

    /**
     * Encodes the specified SearchFleaMarketRequest message. Does not implicitly {@link SearchFleaMarketRequest.verify|verify} messages.
     * @param message SearchFleaMarketRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchFleaMarketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchFleaMarketRequest message, length delimited. Does not implicitly {@link SearchFleaMarketRequest.verify|verify} messages.
     * @param message SearchFleaMarketRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchFleaMarketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchFleaMarketRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchFleaMarketRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchFleaMarketRequest;

    /**
     * Decodes a SearchFleaMarketRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchFleaMarketRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchFleaMarketRequest;

    /**
     * Verifies a SearchFleaMarketRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchFleaMarketRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchFleaMarketRequest
     */
    public static fromObject(object: { [k: string]: any }): SearchFleaMarketRequest;

    /**
     * Creates a plain object from a SearchFleaMarketRequest message. Also converts values to other types if specified.
     * @param message SearchFleaMarketRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchFleaMarketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchFleaMarketRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Request. */
export interface IRequest {

    /** Request name */
    name?: (number|null);

    /** Request userAgent */
    userAgent?: (string|null);

    /** Request authToken */
    authToken?: (string|null);

    /** Request queryId */
    queryId?: (string|null);

    /** Request session */
    session?: (ISession|null);

    /** Request searchFleaMarketRequest */
    searchFleaMarketRequest?: (ISearchFleaMarketRequest|null);
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request name. */
    public name: number;

    /** Request userAgent. */
    public userAgent: string;

    /** Request authToken. */
    public authToken: string;

    /** Request queryId. */
    public queryId: string;

    /** Request session. */
    public session?: (ISession|null);

    /** Request searchFleaMarketRequest. */
    public searchFleaMarketRequest?: (ISearchFleaMarketRequest|null);

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Image. */
export interface IImage {

    /** Image id */
    id?: (string|null);

    /** Image filepath */
    filepath?: (string|null);

    /** Image type */
    type?: (string|null);

    /** Image service */
    service?: (string|null);

    /** Image width */
    width?: (number|null);

    /** Image height */
    height?: (number|null);

    /** Image url */
    url?: (string|null);

    /** Image thumbnail */
    thumbnail?: (string|null);

    /** Image medium */
    medium?: (string|null);

    /** Image oldImageId */
    oldImageId?: (number|null);

    /** Image typename */
    typename?: (string|null);
}

/** Represents an Image. */
export class Image implements IImage {

    /**
     * Constructs a new Image.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImage);

    /** Image id. */
    public id: string;

    /** Image filepath. */
    public filepath: string;

    /** Image type. */
    public type: string;

    /** Image service. */
    public service: string;

    /** Image width. */
    public width: number;

    /** Image height. */
    public height: number;

    /** Image url. */
    public url: string;

    /** Image thumbnail. */
    public thumbnail: string;

    /** Image medium. */
    public medium: string;

    /** Image oldImageId. */
    public oldImageId: number;

    /** Image typename. */
    public typename: string;

    /**
     * Creates a new Image instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Image instance
     */
    public static create(properties?: IImage): Image;

    /**
     * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Image message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Image;

    /**
     * Decodes an Image message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Image;

    /**
     * Verifies an Image message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Image message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Image
     */
    public static fromObject(object: { [k: string]: any }): Image;

    /**
     * Creates a plain object from an Image message. Also converts values to other types if specified.
     * @param message Image
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Image to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Timestamp. */
export interface ITimestamp {

    /** Timestamp seconds */
    seconds?: (number|null);

    /** Timestamp nanos */
    nanos?: (number|null);
}

/** Represents a Timestamp. */
export class Timestamp implements ITimestamp {

    /**
     * Constructs a new Timestamp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimestamp);

    /** Timestamp seconds. */
    public seconds: number;

    /** Timestamp nanos. */
    public nanos: number;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timestamp instance
     */
    public static create(properties?: ITimestamp): Timestamp;

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timestamp;

    /**
     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timestamp;

    /**
     * Verifies a Timestamp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Timestamp
     */
    public static fromObject(object: { [k: string]: any }): Timestamp;

    /**
     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
     * @param message Timestamp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Timestamp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DoubleValue. */
export interface IDoubleValue {

    /** DoubleValue value */
    value?: (number|Long|null);
}

/** Represents a DoubleValue. */
export class DoubleValue implements IDoubleValue {

    /**
     * Constructs a new DoubleValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDoubleValue);

    /** DoubleValue value. */
    public value: (number|Long);

    /**
     * Creates a new DoubleValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DoubleValue instance
     */
    public static create(properties?: IDoubleValue): DoubleValue;

    /**
     * Encodes the specified DoubleValue message. Does not implicitly {@link DoubleValue.verify|verify} messages.
     * @param message DoubleValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link DoubleValue.verify|verify} messages.
     * @param message DoubleValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DoubleValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DoubleValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DoubleValue;

    /**
     * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DoubleValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DoubleValue;

    /**
     * Verifies a DoubleValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DoubleValue
     */
    public static fromObject(object: { [k: string]: any }): DoubleValue;

    /**
     * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
     * @param message DoubleValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DoubleValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FleaMarketDoc. */
export interface IFleaMarketDoc {

    /** FleaMarketDoc docId */
    docId?: (number|null);

    /** FleaMarketDoc docToken */
    docToken?: (string|null);

    /** FleaMarketDoc docIdStr */
    docIdStr?: (string|null);

    /** FleaMarketDoc id */
    id?: (number|null);

    /** FleaMarketDoc userId */
    userId?: (number|null);

    /** FleaMarketDoc regionId */
    regionId?: (number|null);

    /** FleaMarketDoc regionName */
    regionName?: (string|null);

    /** FleaMarketDoc categoryId */
    categoryId?: (number|null);

    /** FleaMarketDoc firstImageId */
    firstImageId?: (number|null);

    /** FleaMarketDoc status */
    status?: (number|null);

    /** FleaMarketDoc visible */
    visible?: (number|null);

    /** FleaMarketDoc publishRange */
    publishRange?: (string|null);

    /** FleaMarketDoc score */
    score?: (number|Long|null);

    /** FleaMarketDoc price */
    price?: (IDoubleValue|null);

    /** FleaMarketDoc title */
    title?: (string|null);

    /** FleaMarketDoc content */
    content?: (string|null);

    /** FleaMarketDoc watchesCount */
    watchesCount?: (number|null);

    /** FleaMarketDoc chatRoomsCount */
    chatRoomsCount?: (number|null);

    /** FleaMarketDoc republishCount */
    republishCount?: (number|null);

    /** FleaMarketDoc publishedAt */
    publishedAt?: (ITimestamp|null);

    /** FleaMarketDoc createdAt */
    createdAt?: (ITimestamp|null);

    /** FleaMarketDoc userChatRoomsCount */
    userChatRoomsCount?: (number|null);

    /** FleaMarketDoc firstImage */
    firstImage?: (IImage|null);
}

/** Represents a FleaMarketDoc. */
export class FleaMarketDoc implements IFleaMarketDoc {

    /**
     * Constructs a new FleaMarketDoc.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFleaMarketDoc);

    /** FleaMarketDoc docId. */
    public docId: number;

    /** FleaMarketDoc docToken. */
    public docToken: string;

    /** FleaMarketDoc docIdStr. */
    public docIdStr: string;

    /** FleaMarketDoc id. */
    public id: number;

    /** FleaMarketDoc userId. */
    public userId: number;

    /** FleaMarketDoc regionId. */
    public regionId: number;

    /** FleaMarketDoc regionName. */
    public regionName: string;

    /** FleaMarketDoc categoryId. */
    public categoryId: number;

    /** FleaMarketDoc firstImageId. */
    public firstImageId: number;

    /** FleaMarketDoc status. */
    public status: number;

    /** FleaMarketDoc visible. */
    public visible: number;

    /** FleaMarketDoc publishRange. */
    public publishRange: string;

    /** FleaMarketDoc score. */
    public score: (number|Long);

    /** FleaMarketDoc price. */
    public price?: (IDoubleValue|null);

    /** FleaMarketDoc title. */
    public title: string;

    /** FleaMarketDoc content. */
    public content: string;

    /** FleaMarketDoc watchesCount. */
    public watchesCount: number;

    /** FleaMarketDoc chatRoomsCount. */
    public chatRoomsCount: number;

    /** FleaMarketDoc republishCount. */
    public republishCount: number;

    /** FleaMarketDoc publishedAt. */
    public publishedAt?: (ITimestamp|null);

    /** FleaMarketDoc createdAt. */
    public createdAt?: (ITimestamp|null);

    /** FleaMarketDoc userChatRoomsCount. */
    public userChatRoomsCount: number;

    /** FleaMarketDoc firstImage. */
    public firstImage?: (IImage|null);

    /**
     * Creates a new FleaMarketDoc instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FleaMarketDoc instance
     */
    public static create(properties?: IFleaMarketDoc): FleaMarketDoc;

    /**
     * Encodes the specified FleaMarketDoc message. Does not implicitly {@link FleaMarketDoc.verify|verify} messages.
     * @param message FleaMarketDoc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFleaMarketDoc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FleaMarketDoc message, length delimited. Does not implicitly {@link FleaMarketDoc.verify|verify} messages.
     * @param message FleaMarketDoc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFleaMarketDoc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FleaMarketDoc message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FleaMarketDoc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FleaMarketDoc;

    /**
     * Decodes a FleaMarketDoc message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FleaMarketDoc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FleaMarketDoc;

    /**
     * Verifies a FleaMarketDoc message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FleaMarketDoc message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FleaMarketDoc
     */
    public static fromObject(object: { [k: string]: any }): FleaMarketDoc;

    /**
     * Creates a plain object from a FleaMarketDoc message. Also converts values to other types if specified.
     * @param message FleaMarketDoc
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FleaMarketDoc, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FleaMarketDoc to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchFleaMarketResponse. */
export interface ISearchFleaMarketResponse {

    /** SearchFleaMarketResponse docsList */
    docsList?: (IFleaMarketDoc[]|null);

    /** SearchFleaMarketResponse nextPageToken */
    nextPageToken?: (string|null);

    /** SearchFleaMarketResponse isRecommendNotificationKeyword */
    isRecommendNotificationKeyword?: (number|null);

    /** SearchFleaMarketResponse recommendTab */
    recommendTab?: (string|null);
}

/** Represents a SearchFleaMarketResponse. */
export class SearchFleaMarketResponse implements ISearchFleaMarketResponse {

    /**
     * Constructs a new SearchFleaMarketResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchFleaMarketResponse);

    /** SearchFleaMarketResponse docsList. */
    public docsList: IFleaMarketDoc[];

    /** SearchFleaMarketResponse nextPageToken. */
    public nextPageToken: string;

    /** SearchFleaMarketResponse isRecommendNotificationKeyword. */
    public isRecommendNotificationKeyword: number;

    /** SearchFleaMarketResponse recommendTab. */
    public recommendTab: string;

    /**
     * Creates a new SearchFleaMarketResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchFleaMarketResponse instance
     */
    public static create(properties?: ISearchFleaMarketResponse): SearchFleaMarketResponse;

    /**
     * Encodes the specified SearchFleaMarketResponse message. Does not implicitly {@link SearchFleaMarketResponse.verify|verify} messages.
     * @param message SearchFleaMarketResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchFleaMarketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchFleaMarketResponse message, length delimited. Does not implicitly {@link SearchFleaMarketResponse.verify|verify} messages.
     * @param message SearchFleaMarketResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchFleaMarketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchFleaMarketResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchFleaMarketResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchFleaMarketResponse;

    /**
     * Decodes a SearchFleaMarketResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchFleaMarketResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchFleaMarketResponse;

    /**
     * Verifies a SearchFleaMarketResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchFleaMarketResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchFleaMarketResponse
     */
    public static fromObject(object: { [k: string]: any }): SearchFleaMarketResponse;

    /**
     * Creates a plain object from a SearchFleaMarketResponse message. Also converts values to other types if specified.
     * @param message SearchFleaMarketResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchFleaMarketResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchFleaMarketResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Response. */
export interface IResponse {

    /** Response requestId */
    requestId?: (string|null);

    /** Response queryId */
    queryId?: (string|null);

    /** Response session */
    session?: (ISession|null);

    /** Response searchFleaMarketResponse */
    searchFleaMarketResponse?: (ISearchFleaMarketResponse|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response requestId. */
    public requestId: string;

    /** Response queryId. */
    public queryId: string;

    /** Response session. */
    public session?: (ISession|null);

    /** Response searchFleaMarketResponse. */
    public searchFleaMarketResponse?: (ISearchFleaMarketResponse|null);

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
