import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains information about the errors encountered.</p>
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the
   *           <code>"messageId"</code> key in the <code>"message"</code> object.)</p>
   */
  messageId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>More information about the error.</p>
   */
  errorMessage?: string;
}

export namespace BatchPutMessageErrorEntry {
  export const filterSensitiveLog = (obj: BatchPutMessageErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchPutMessageRequest {
  /**
   * <p>The list of messages to send. Each message has the following format:
   *           <code>'{ "messageId": "string", "inputName": "string", "payload": "string"}'</code>
   *          </p>
   */
  messages: Message[] | undefined;
}

export namespace BatchPutMessageRequest {
  export const filterSensitiveLog = (obj: BatchPutMessageRequest): any => ({
    ...obj,
  });
}

export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages.</p>
   */
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

export namespace BatchPutMessageResponse {
  export const filterSensitiveLog = (obj: BatchPutMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the error that occured when attempting to update a detector.</p>
 */
export interface BatchUpdateDetectorErrorEntry {
  /**
   * <p>A message describing the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The code of the error.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>The <code>"messageId"</code> of the update request that caused the error. (The value of the
   *        <code>"messageId"</code> in the update request <code>"Detector"</code> object.)</p>
   */
  messageId?: string;
}

export namespace BatchUpdateDetectorErrorEntry {
  export const filterSensitiveLog = (obj: BatchUpdateDetectorErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchUpdateDetectorRequest {
  /**
   * <p>The list of detectors (instances) to update, along with the values to update.</p>
   */
  detectors: UpdateDetectorRequest[] | undefined;
}

export namespace BatchUpdateDetectorRequest {
  export const filterSensitiveLog = (obj: BatchUpdateDetectorRequest): any => ({
    ...obj,
  });
}

export interface BatchUpdateDetectorResponse {
  /**
   * <p>A list of those detector updates that resulted in errors. (If an error is listed here, the
   *         specific update did not occur.)</p>
   */
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}

export namespace BatchUpdateDetectorResponse {
  export const filterSensitiveLog = (obj: BatchUpdateDetectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeDetectorRequest {
  /**
   * <p>The name of the detector model whose detectors (instances) you want information about.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>A filter used to limit results to detectors (instances) created because of the given key ID.</p>
   */
  keyValue?: string;
}

export namespace DescribeDetectorRequest {
  export const filterSensitiveLog = (obj: DescribeDetectorRequest): any => ({
    ...obj,
  });
}

export interface DescribeDetectorResponse {
  /**
   * <p>Information about the detector (instance).</p>
   */
  detector?: Detector;
}

export namespace DescribeDetectorResponse {
  export const filterSensitiveLog = (obj: DescribeDetectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface Detector {
  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorState;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *         detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;
}

export namespace Detector {
  export const filterSensitiveLog = (obj: Detector): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the current state of the detector instance.</p>
 */
export interface DetectorState {
  /**
   * <p>The name of the state.</p>
   */
  stateName: string | undefined;

  /**
   * <p>The current state of the detector's timers.</p>
   */
  timers: Timer[] | undefined;

  /**
   * <p>The current values of the detector's variables.</p>
   */
  variables: Variable[] | undefined;
}

export namespace DetectorState {
  export const filterSensitiveLog = (obj: DetectorState): any => ({
    ...obj,
  });
}

/**
 * <p>The new state, variable values, and timer settings of the detector (instance).</p>
 */
export interface DetectorStateDefinition {
  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is cleared.</p>
   */
  variables: VariableDefinition[] | undefined;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is
   *        cleared, and its timeout event won't occur.</p>
   */
  timers: TimerDefinition[] | undefined;

  /**
   * <p>The name of the new state of the detector (instance).</p>
   */
  stateName: string | undefined;
}

export namespace DetectorStateDefinition {
  export const filterSensitiveLog = (obj: DetectorStateDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector state.</p>
 */
export interface DetectorStateSummary {
  /**
   * <p>The name of the state.</p>
   */
  stateName?: string;
}

export namespace DetectorStateSummary {
  export const filterSensitiveLog = (obj: DetectorStateSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the detector (instance).</p>
 */
export interface DetectorSummary {
  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: DetectorStateSummary;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this
   *         detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;
}

export namespace DetectorSummary {
  export const filterSensitiveLog = (obj: DetectorSummary): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  InternalFailureException = "InternalFailureException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ServiceUnavailableException = "ServiceUnavailableException",
  ThrottlingException = "ThrottlingException",
}

/**
 * <p>An internal failure occured.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was invalid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

export interface ListDetectorsRequest {
  /**
   * <p>A filter that limits results to those detectors (instances) in the given state.</p>
   */
  stateName?: string;

  /**
   * <p>The name of the detector model whose detectors (instances) are listed.</p>
   */
  detectorModelName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListDetectorsRequest {
  export const filterSensitiveLog = (obj: ListDetectorsRequest): any => ({
    ...obj,
  });
}

export interface ListDetectorsResponse {
  /**
   * <p>A list of summary information about the detectors (instances).</p>
   */
  detectorSummaries?: DetectorSummary[];

  /**
   * <p>A token to retrieve the next set of results, or <code>null</code> if there are no additional
   *           results.</p>
   */
  nextToken?: string;
}

export namespace ListDetectorsResponse {
  export const filterSensitiveLog = (obj: ListDetectorsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a message.</p>
 */
export interface Message {
  /**
   * <p>The ID to assign to the message. Within each batch sent, each <code>"messageId"</code> must
   *         be unique.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string representing
   *           binary data (in which case you must decode it).</p>
   */
  payload: Uint8Array | undefined;

  /**
   * <p>The name of the input into which the message payload is transformed.</p>
   */
  inputName: string | undefined;
}

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

/**
 * <p>The resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The request could not be completed due to throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The current state of a timer.</p>
 */
export interface Timer {
  /**
   * <p>The number of seconds which have elapsed on the timer.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;
}

export namespace Timer {
  export const filterSensitiveLog = (obj: Timer): any => ({
    ...obj,
  });
}

/**
 * <p>The new setting of a timer.</p>
 */
export interface TimerDefinition {
  /**
   * <p>The new setting of the timer (the number of seconds before the timer elapses).</p>
   */
  seconds: number | undefined;

  /**
   * <p>The name of the timer.</p>
   */
  name: string | undefined;
}

export namespace TimerDefinition {
  export const filterSensitiveLog = (obj: TimerDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Information used to update the detector (instance).</p>
 */
export interface UpdateDetectorRequest {
  /**
   * <p>The ID to assign to the detector update <code>"message"</code>. Each <code>"messageId"</code>
   *        must be unique within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   */
  state: DetectorStateDefinition | undefined;

  /**
   * <p>The value of the input key attribute (identifying the device or system) that caused the creation
   *        of this detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The name of the detector model that created the detectors (instances).</p>
   */
  detectorModelName: string | undefined;
}

export namespace UpdateDetectorRequest {
  export const filterSensitiveLog = (obj: UpdateDetectorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The current state of the variable.</p>
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The current value of the variable.</p>
   */
  value: string | undefined;
}

export namespace Variable {
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
}

/**
 * <p>The new value of the variable.</p>
 */
export interface VariableDefinition {
  /**
   * <p>The new value of the variable.</p>
   */
  value: string | undefined;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;
}

export namespace VariableDefinition {
  export const filterSensitiveLog = (obj: VariableDefinition): any => ({
    ...obj,
  });
}
