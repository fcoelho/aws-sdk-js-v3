import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "../commands/ListCollectionsCommand";
import { RekognitionPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListCollectionsCommandInput,
  ...args: any
): Promise<ListCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCollectionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Rekognition,
  input: ListCollectionsCommandInput,
  ...args: any
): Promise<ListCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.listCollections(input, ...args);
};
export async function* listCollectionsPaginate(
  config: RekognitionPaginationConfiguration,
  input: ListCollectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCollectionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListCollectionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
