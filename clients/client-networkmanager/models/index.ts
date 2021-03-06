import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AssociateCustomerGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace AssociateCustomerGatewayRequest {
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface AssociateCustomerGatewayResponse {
  /**
   * <p>The customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace AssociateCustomerGatewayResponse {
  export const filterSensitiveLog = (obj: AssociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

export interface AssociateLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace AssociateLinkRequest {
  export const filterSensitiveLog = (obj: AssociateLinkRequest): any => ({
    ...obj,
  });
}

export interface AssociateLinkResponse {
  /**
   * <p>The link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace AssociateLinkResponse {
  export const filterSensitiveLog = (obj: AssociateLinkResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
  /**
   * <p>Download speed in Mbps.</p>
   */
  DownloadSpeed?: number;

  /**
   * <p>Upload speed in Mbps.</p>
   */
  UploadSpeed?: number;
}

export namespace Bandwidth {
  export const filterSensitiveLog = (obj: Bandwidth): any => ({
    ...obj,
  });
}

/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  Message: string | undefined;
  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateDeviceRequest {
  /**
   * <p>The serial number of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>A description of the device.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The location of the device.</p>
   */
  Location?: Location;

  /**
   * <p>The model of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace CreateDeviceRequest {
  export const filterSensitiveLog = (obj: CreateDeviceRequest): any => ({
    ...obj,
  });
}

export interface CreateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace CreateDeviceResponse {
  export const filterSensitiveLog = (obj: CreateDeviceResponse): any => ({
    ...obj,
  });
}

export interface CreateGlobalNetworkRequest {
  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description of the global network.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace CreateGlobalNetworkRequest {
  export const filterSensitiveLog = (obj: CreateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface CreateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace CreateGlobalNetworkResponse {
  export const filterSensitiveLog = (obj: CreateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface CreateLinkRequest {
  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The type of the link.</p>
   *         <p>Constraints: Cannot include the following characters: | \ ^</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Constraints: Cannot include the following characters: | \ ^</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;

  /**
   * <p>A description of the link.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p> The upload speed and download speed in Mbps. </p>
   */
  Bandwidth: Bandwidth | undefined;
}

export namespace CreateLinkRequest {
  export const filterSensitiveLog = (obj: CreateLinkRequest): any => ({
    ...obj,
  });
}

export interface CreateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace CreateLinkResponse {
  export const filterSensitiveLog = (obj: CreateLinkResponse): any => ({
    ...obj,
  });
}

export interface CreateSiteRequest {
  /**
   * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>The tags to apply to the resource during creation.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of your site.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace CreateSiteRequest {
  export const filterSensitiveLog = (obj: CreateSiteRequest): any => ({
    ...obj,
  });
}

export interface CreateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace CreateSiteResponse {
  export const filterSensitiveLog = (obj: CreateSiteResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
  /**
   * <p>The association state.</p>
   */
  State?: CustomerGatewayAssociationState | string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
   */
  CustomerGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;
}

export namespace CustomerGatewayAssociation {
  export const filterSensitiveLog = (obj: CustomerGatewayAssociation): any => ({
    ...obj,
  });
}

export enum CustomerGatewayAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteDeviceRequest {
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace DeleteDeviceResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj,
  });
}

export interface DeleteGlobalNetworkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DeleteGlobalNetworkRequest {
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface DeleteGlobalNetworkResponse {
  /**
   * <p>Information about the global network.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace DeleteGlobalNetworkResponse {
  export const filterSensitiveLog = (obj: DeleteGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface DeleteLinkRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;
}

export namespace DeleteLinkRequest {
  export const filterSensitiveLog = (obj: DeleteLinkRequest): any => ({
    ...obj,
  });
}

export interface DeleteLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace DeleteLinkResponse {
  export const filterSensitiveLog = (obj: DeleteLinkResponse): any => ({
    ...obj,
  });
}

export interface DeleteSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId: string | undefined;
}

export namespace DeleteSiteRequest {
  export const filterSensitiveLog = (obj: DeleteSiteRequest): any => ({
    ...obj,
  });
}

export interface DeleteSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace DeleteSiteResponse {
  export const filterSensitiveLog = (obj: DeleteSiteResponse): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn: string | undefined;
}

export namespace DeregisterTransitGatewayRequest {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface DeregisterTransitGatewayResponse {
  /**
   * <p>The transit gateway registration information.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace DeregisterTransitGatewayResponse {
  export const filterSensitiveLog = (obj: DeregisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The IDs of one or more global networks. The maximum is 10.</p>
   */
  GlobalNetworkIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeGlobalNetworksRequest {
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksRequest): any => ({
    ...obj,
  });
}

export interface DescribeGlobalNetworksResponse {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the global networks.</p>
   */
  GlobalNetworks?: GlobalNetwork[];
}

export namespace DescribeGlobalNetworksResponse {
  export const filterSensitiveLog = (obj: DescribeGlobalNetworksResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a device.</p>
 */
export interface Device {
  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The device model.</p>
   */
  Model?: string;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The device serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The tags for the device.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The device type.</p>
   */
  Type?: string;

  /**
   * <p>The site ID.</p>
   */
  SiteId?: string;

  /**
   * <p>The site location.</p>
   */
  Location?: Location;

  /**
   * <p>The device state.</p>
   */
  State?: DeviceState | string;

  /**
   * <p>The device vendor.</p>
   */
  Vendor?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

export enum DeviceState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

export interface DisassociateCustomerGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  CustomerGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DisassociateCustomerGatewayRequest {
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayRequest): any => ({
    ...obj,
  });
}

export interface DisassociateCustomerGatewayResponse {
  /**
   * <p>Information about the customer gateway association.</p>
   */
  CustomerGatewayAssociation?: CustomerGatewayAssociation;
}

export namespace DisassociateCustomerGatewayResponse {
  export const filterSensitiveLog = (obj: DisassociateCustomerGatewayResponse): any => ({
    ...obj,
  });
}

export interface DisassociateLinkRequest {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace DisassociateLinkRequest {
  export const filterSensitiveLog = (obj: DisassociateLinkRequest): any => ({
    ...obj,
  });
}

export interface DisassociateLinkResponse {
  /**
   * <p>Information about the link association.</p>
   */
  LinkAssociation?: LinkAssociation;
}

export namespace DisassociateLinkResponse {
  export const filterSensitiveLog = (obj: DisassociateLinkResponse): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more customer gateway Amazon Resource Names (ARNs). For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.</p>
   */
  CustomerGatewayArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace GetCustomerGatewayAssociationsRequest {
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetCustomerGatewayAssociationsResponse {
  /**
   * <p>The customer gateway associations.</p>
   */
  CustomerGatewayAssociations?: CustomerGatewayAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetCustomerGatewayAssociationsResponse {
  export const filterSensitiveLog = (obj: GetCustomerGatewayAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetDevicesRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more device IDs. The maximum is 10.</p>
   */
  DeviceIds?: string[];

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesRequest {
  export const filterSensitiveLog = (obj: GetDevicesRequest): any => ({
    ...obj,
  });
}

export interface GetDevicesResponse {
  /**
   * <p>The devices.</p>
   */
  Devices?: Device[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetDevicesResponse {
  export const filterSensitiveLog = (obj: GetDevicesResponse): any => ({
    ...obj,
  });
}

export interface GetLinkAssociationsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace GetLinkAssociationsRequest {
  export const filterSensitiveLog = (obj: GetLinkAssociationsRequest): any => ({
    ...obj,
  });
}

export interface GetLinkAssociationsResponse {
  /**
   * <p>The link associations.</p>
   */
  LinkAssociations?: LinkAssociation[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetLinkAssociationsResponse {
  export const filterSensitiveLog = (obj: GetLinkAssociationsResponse): any => ({
    ...obj,
  });
}

export interface GetLinksRequest {
  /**
   * <p>The link provider.</p>
   */
  Provider?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The link type.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>One or more link IDs. The maximum is 10.</p>
   */
  LinkIds?: string[];
}

export namespace GetLinksRequest {
  export const filterSensitiveLog = (obj: GetLinksRequest): any => ({
    ...obj,
  });
}

export interface GetLinksResponse {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The links.</p>
   */
  Links?: Link[];
}

export namespace GetLinksResponse {
  export const filterSensitiveLog = (obj: GetLinksResponse): any => ({
    ...obj,
  });
}

export interface GetSitesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>One or more site IDs. The maximum is 10.</p>
   */
  SiteIds?: string[];
}

export namespace GetSitesRequest {
  export const filterSensitiveLog = (obj: GetSitesRequest): any => ({
    ...obj,
  });
}

export interface GetSitesResponse {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The sites.</p>
   */
  Sites?: Site[];
}

export namespace GetSitesResponse {
  export const filterSensitiveLog = (obj: GetSitesResponse): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
   *             10.</p>
   */
  TransitGatewayArns?: string[];

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsRequest {
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsRequest): any => ({
    ...obj,
  });
}

export interface GetTransitGatewayRegistrationsResponse {
  /**
   * <p>The transit gateway registrations.</p>
   */
  TransitGatewayRegistrations?: TransitGatewayRegistration[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetTransitGatewayRegistrationsResponse {
  export const filterSensitiveLog = (obj: GetTransitGatewayRegistrationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a global network.</p>
 */
export interface GlobalNetwork {
  /**
   * <p>The tags for the global network.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The date and time that the global network was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the global network.</p>
   */
  Description?: string;

  /**
   * <p>The state of the global network.</p>
   */
  State?: GlobalNetworkState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the global network.</p>
   */
  GlobalNetworkArn?: string;
}

export namespace GlobalNetwork {
  export const filterSensitiveLog = (obj: GlobalNetwork): any => ({
    ...obj,
  });
}

export enum GlobalNetworkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>The request has failed due to an internal error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;

  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a link.</p>
 */
export interface Link {
  /**
   * <p>The date and time that the link was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description of the link.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The type of the link.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The provider of the link.</p>
   */
  Provider?: string;

  /**
   * <p>The tags for the link.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The bandwidth for the link.</p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The Amazon Resource Name (ARN) of the link.</p>
   */
  LinkArn?: string;

  /**
   * <p>The state of the link.</p>
   */
  State?: LinkState | string;
}

export namespace Link {
  export const filterSensitiveLog = (obj: Link): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The state of the association.</p>
   */
  LinkAssociationState?: LinkAssociationState | string;

  /**
   * <p>The ID of the link.</p>
   */
  LinkId?: string;

  /**
   * <p>The device ID for the link association.</p>
   */
  DeviceId?: string;
}

export namespace LinkAssociation {
  export const filterSensitiveLog = (obj: LinkAssociation): any => ({
    ...obj,
  });
}

export enum LinkAssociationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  pending = "PENDING",
}

export enum LinkState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a location.</p>
 */
export interface Location {
  /**
   * <p>The physical address.</p>
   */
  Address?: string;

  /**
   * <p>The longitude.</p>
   */
  Longitude?: string;

  /**
   * <p>The latitude.</p>
   */
  Latitude?: string;
}

export namespace Location {
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway. For more information, see
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
   */
  TransitGatewayArn: string | undefined;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;
}

export namespace RegisterTransitGatewayRequest {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayRequest): any => ({
    ...obj,
  });
}

export interface RegisterTransitGatewayResponse {
  /**
   * <p>Information about the transit gateway registration.</p>
   */
  TransitGatewayRegistration?: TransitGatewayRegistration;
}

export namespace RegisterTransitGatewayResponse {
  export const filterSensitiveLog = (obj: RegisterTransitGatewayResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType: string | undefined;

  Message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>The limit code.</p>
   */
  LimitCode: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>The error message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The service code.</p>
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a site.</p>
 */
export interface Site {
  /**
   * <p>The state of the site.</p>
   */
  State?: SiteState | string;

  /**
   * <p>The location of the site.</p>
   */
  Location?: Location;

  /**
   * <p>The date and time that the site was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;

  /**
   * <p>The description of the site.</p>
   */
  Description?: string;

  /**
   * <p>The tags for the site.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the site.</p>
   */
  SiteArn?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;
}

export namespace Site {
  export const filterSensitiveLog = (obj: Site): any => ({
    ...obj,
  });
}

export enum SiteState {
  available = "AVAILABLE",
  deleting = "DELETING",
  pending = "PENDING",
  updating = "UPDATING",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The tags to apply to the specified resource.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>Indicates when to retry the request.</p>
   */
  RetryAfterSeconds?: number;

  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
  /**
   * <p>The state of the transit gateway registration.</p>
   */
  State?: TransitGatewayRegistrationStateReason;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId?: string;
}

export namespace TransitGatewayRegistration {
  export const filterSensitiveLog = (obj: TransitGatewayRegistration): any => ({
    ...obj,
  });
}

export enum TransitGatewayRegistrationState {
  available = "AVAILABLE",
  deleted = "DELETED",
  deleting = "DELETING",
  failed = "FAILED",
  pending = "PENDING",
}

/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
  /**
   * <p>The message for the state reason.</p>
   */
  Message?: string;

  /**
   * <p>The code for the state reason.</p>
   */
  Code?: TransitGatewayRegistrationState | string;
}

export namespace TransitGatewayRegistrationStateReason {
  export const filterSensitiveLog = (obj: TransitGatewayRegistrationStateReason): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The tag keys to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceRequest {
  /**
   * <p>The serial number of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The ID of the site.</p>
   */
  SiteId?: string;

  /**
   * <p>The type of the device.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The vendor of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Vendor?: string;

  /**
   * <p>Describes a location.</p>
   */
  Location?: Location;

  /**
   * <p>A description of the device.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;

  /**
   * <p>The model of the device.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Model?: string;

  /**
   * <p>The ID of the device.</p>
   */
  DeviceId: string | undefined;
}

export namespace UpdateDeviceRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceResponse {
  /**
   * <p>Information about the device.</p>
   */
  Device?: Device;
}

export namespace UpdateDeviceResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
    ...obj,
  });
}

export interface UpdateGlobalNetworkRequest {
  /**
   * <p>The ID of your global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>A description of the global network.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateGlobalNetworkRequest {
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkRequest): any => ({
    ...obj,
  });
}

export interface UpdateGlobalNetworkResponse {
  /**
   * <p>Information about the global network object.</p>
   */
  GlobalNetwork?: GlobalNetwork;
}

export namespace UpdateGlobalNetworkResponse {
  export const filterSensitiveLog = (obj: UpdateGlobalNetworkResponse): any => ({
    ...obj,
  });
}

export interface UpdateLinkRequest {
  /**
   * <p>The ID of the link.</p>
   */
  LinkId: string | undefined;

  /**
   * <p>The upload and download speed in Mbps. </p>
   */
  Bandwidth?: Bandwidth;

  /**
   * <p>The type of the link.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The provider of the link.</p>
   *         <p>Length Constraints: Maximum length of 128 characters.</p>
   */
  Provider?: string;

  /**
   * <p>A description of the link.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateLinkRequest {
  export const filterSensitiveLog = (obj: UpdateLinkRequest): any => ({
    ...obj,
  });
}

export interface UpdateLinkResponse {
  /**
   * <p>Information about the link.</p>
   */
  Link?: Link;
}

export namespace UpdateLinkResponse {
  export const filterSensitiveLog = (obj: UpdateLinkResponse): any => ({
    ...obj,
  });
}

export interface UpdateSiteRequest {
  /**
   * <p>The ID of the global network.</p>
   */
  GlobalNetworkId: string | undefined;

  /**
   * <p>The ID of your site.</p>
   */
  SiteId: string | undefined;

  /**
   * <p>The site location:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>Address</code>: The physical address of the site.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Latitude</code>: The latitude of the site. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Longitude</code>: The longitude of the site.</p>
   *             </li>
   *          </ul>
   */
  Location?: Location;

  /**
   * <p>A description of your site.</p>
   *         <p>Length Constraints: Maximum length of 256 characters.</p>
   */
  Description?: string;
}

export namespace UpdateSiteRequest {
  export const filterSensitiveLog = (obj: UpdateSiteRequest): any => ({
    ...obj,
  });
}

export interface UpdateSiteResponse {
  /**
   * <p>Information about the site.</p>
   */
  Site?: Site;
}

export namespace UpdateSiteResponse {
  export const filterSensitiveLog = (obj: UpdateSiteResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: ValidationExceptionField[];

  Message: string | undefined;
  /**
   * <p>The reason for the error.</p>
   */
  Reason?: ValidationExceptionReason | string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The message for the field.</p>
   */
  Message: string | undefined;

  /**
   * <p>The name of the field.</p>
   */
  Name: string | undefined;
}

export namespace ValidationExceptionField {
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CannotParse",
  FIELD_VALIDATION_FAILED = "FieldValidationFailed",
  OTHER = "Other",
  UNKNOWN_OPERATION = "UnknownOperation",
}
