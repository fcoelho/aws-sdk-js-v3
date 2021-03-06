import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "../commands/GetResourcesCommand";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetResourcesCommandInput,
  ...args: any
): Promise<GetResourcesCommandOutput> => {
  // @ts-ignore
  return await client.getResources(input, ...args);
};
export async function* getResourcesPaginate(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetResourcesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetResourcesCommandOutput;
  while (hasNext) {
    input["PaginationToken"] = token;
    input["ResourcesPerPage"] = config.pageSize;
    if (config.client instanceof ResourceGroupsTaggingAPI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsTaggingAPIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient");
    }
    yield page;
    token = page["PaginationToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
