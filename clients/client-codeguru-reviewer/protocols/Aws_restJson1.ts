import {
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
} from "../commands/AssociateRepositoryCommand";
import { DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput } from "../commands/DescribeCodeReviewCommand";
import {
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
} from "../commands/DescribeRecommendationFeedbackCommand";
import {
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
} from "../commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
} from "../commands/DisassociateRepositoryCommand";
import { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "../commands/ListCodeReviewsCommand";
import {
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import {
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "../commands/ListRepositoryAssociationsCommand";
import {
  PutRecommendationFeedbackCommandInput,
  PutRecommendationFeedbackCommandOutput,
} from "../commands/PutRecommendationFeedbackCommand";
import {
  AccessDeniedException,
  CodeCommitRepository,
  CodeReview,
  CodeReviewSummary,
  CommitDiffSourceCodeType,
  ConflictException,
  InternalServerException,
  Metrics,
  MetricsSummary,
  NotFoundException,
  Reaction,
  RecommendationFeedback,
  RecommendationFeedbackSummary,
  RecommendationSummary,
  Repository,
  RepositoryAssociation,
  RepositoryAssociationSummary,
  ResourceNotFoundException,
  SourceCodeType,
  ThirdPartySourceRepository,
  ThrottlingException,
  ValidationException,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AssociateRepositoryCommand = async (
  input: AssociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/associations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Repository !== undefined && { Repository: serializeAws_restJson1Repository(input.Repository, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeCodeReviewCommand = async (
  input: DescribeCodeReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/codereviews/{CodeReviewArn}";
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeRecommendationFeedbackCommand = async (
  input: DescribeRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/feedback/{CodeReviewArn}";
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.RecommendationId !== undefined && { RecommendationId: input.RecommendationId }),
    ...(input.UserId !== undefined && { UserId: input.UserId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeRepositoryAssociationCommand = async (
  input: DescribeRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/associations/{AssociationArn}";
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssociationArn.");
    }
    resolvedPath = resolvedPath.replace("{AssociationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateRepositoryCommand = async (
  input: DisassociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/associations/{AssociationArn}";
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AssociationArn.");
    }
    resolvedPath = resolvedPath.replace("{AssociationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListCodeReviewsCommand = async (
  input: ListCodeReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/codereviews";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.RepositoryNames !== undefined && {
      RepositoryNames: (input.RepositoryNames || []).map((_entry) => _entry),
    }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.States !== undefined && { States: (input.States || []).map((_entry) => _entry) }),
    ...(input.ProviderTypes !== undefined && { ProviderTypes: (input.ProviderTypes || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRecommendationFeedbackCommand = async (
  input: ListRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/feedback/{CodeReviewArn}/RecommendationFeedback";
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.UserIds !== undefined && { UserIds: (input.UserIds || []).map((_entry) => _entry) }),
    ...(input.RecommendationIds !== undefined && {
      RecommendationIds: (input.RecommendationIds || []).map((_entry) => _entry),
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/codereviews/{CodeReviewArn}/Recommendations";
  if (input.CodeReviewArn !== undefined) {
    const labelValue: string = input.CodeReviewArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeReviewArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeReviewArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRepositoryAssociationsCommand = async (
  input: ListRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/associations";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ProviderTypes !== undefined && { ProviderType: (input.ProviderTypes || []).map((_entry) => _entry) }),
    ...(input.States !== undefined && { State: (input.States || []).map((_entry) => _entry) }),
    ...(input.Owners !== undefined && { Owner: (input.Owners || []).map((_entry) => _entry) }),
    ...(input.Names !== undefined && { Name: (input.Names || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutRecommendationFeedbackCommand = async (
  input: PutRecommendationFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.CodeReviewArn !== undefined && { CodeReviewArn: input.CodeReviewArn }),
    ...(input.Reactions !== undefined && { Reactions: serializeAws_restJson1Reactions(input.Reactions, context) }),
    ...(input.RecommendationId !== undefined && { RecommendationId: input.RecommendationId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AssociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AssociateRepositoryCommandError(output, context);
  }
  const contents: AssociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeCodeReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeCodeReviewCommandError(output, context);
  }
  const contents: DescribeCodeReviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeReview: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeReview !== undefined && data.CodeReview !== null) {
    contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCodeReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRecommendationFeedbackCommandError(output, context);
  }
  const contents: DescribeRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    RecommendationFeedback: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RecommendationFeedback !== undefined && data.RecommendationFeedback !== null) {
    contents.RecommendationFeedback = deserializeAws_restJson1RecommendationFeedback(
      data.RecommendationFeedback,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRepositoryAssociationCommandError(output, context);
  }
  const contents: DescribeRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisassociateRepositoryCommandError(output, context);
  }
  const contents: DisassociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    RepositoryAssociation: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
    contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codegurureviewer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.codegurureviewer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListCodeReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListCodeReviewsCommandError(output, context);
  }
  const contents: ListCodeReviewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeReviewSummaries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeReviewSummaries !== undefined && data.CodeReviewSummaries !== null) {
    contents.CodeReviewSummaries = deserializeAws_restJson1CodeReviewSummaries(data.CodeReviewSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCodeReviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeReviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRecommendationFeedbackCommandError(output, context);
  }
  const contents: ListRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecommendationFeedbackSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecommendationFeedbackSummaries !== undefined && data.RecommendationFeedbackSummaries !== null) {
    contents.RecommendationFeedbackSummaries = deserializeAws_restJson1RecommendationFeedbackSummaries(
      data.RecommendationFeedbackSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: ListRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecommendationSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecommendationSummaries !== undefined && data.RecommendationSummaries !== null) {
    contents.RecommendationSummaries = deserializeAws_restJson1RecommendationSummaries(
      data.RecommendationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRepositoryAssociationsCommandError(output, context);
  }
  const contents: ListRepositoryAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RepositoryAssociationSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RepositoryAssociationSummaries !== undefined && data.RepositoryAssociationSummaries !== null) {
    contents.RepositoryAssociationSummaries = deserializeAws_restJson1RepositoryAssociationSummaries(
      data.RepositoryAssociationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRepositoryAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutRecommendationFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutRecommendationFeedbackCommandError(output, context);
  }
  const contents: PutRecommendationFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRecommendationFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codegurureviewer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codegurureviewer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codegurureviewer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codegurureviewer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1CodeCommitRepository = (input: CodeCommitRepository, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_restJson1Reactions = (input: (Reaction | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1Repository = (input: Repository, context: __SerdeContext): any => {
  return {
    ...(input.Bitbucket !== undefined && {
      Bitbucket: serializeAws_restJson1ThirdPartySourceRepository(input.Bitbucket, context),
    }),
    ...(input.CodeCommit !== undefined && {
      CodeCommit: serializeAws_restJson1CodeCommitRepository(input.CodeCommit, context),
    }),
    ...(input.GitHubEnterpriseServer !== undefined && {
      GitHubEnterpriseServer: serializeAws_restJson1ThirdPartySourceRepository(input.GitHubEnterpriseServer, context),
    }),
  };
};

const serializeAws_restJson1ThirdPartySourceRepository = (
  input: ThirdPartySourceRepository,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn !== undefined && { ConnectionArn: input.ConnectionArn }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Owner !== undefined && { Owner: input.Owner }),
  };
};

const deserializeAws_restJson1CodeReview = (output: any, context: __SerdeContext): CodeReview => {
  return {
    CodeReviewArn:
      output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1Metrics(output.Metrics, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    PullRequestId:
      output.PullRequestId !== undefined && output.PullRequestId !== null ? output.PullRequestId : undefined,
    RepositoryName:
      output.RepositoryName !== undefined && output.RepositoryName !== null ? output.RepositoryName : undefined,
    SourceCodeType:
      output.SourceCodeType !== undefined && output.SourceCodeType !== null
        ? deserializeAws_restJson1SourceCodeType(output.SourceCodeType, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1CodeReviewSummaries = (output: any, context: __SerdeContext): CodeReviewSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1CodeReviewSummary(entry, context));
};

const deserializeAws_restJson1CodeReviewSummary = (output: any, context: __SerdeContext): CodeReviewSummary => {
  return {
    CodeReviewArn:
      output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    MetricsSummary:
      output.MetricsSummary !== undefined && output.MetricsSummary !== null
        ? deserializeAws_restJson1MetricsSummary(output.MetricsSummary, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    PullRequestId:
      output.PullRequestId !== undefined && output.PullRequestId !== null ? output.PullRequestId : undefined,
    RepositoryName:
      output.RepositoryName !== undefined && output.RepositoryName !== null ? output.RepositoryName : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1CommitDiffSourceCodeType = (
  output: any,
  context: __SerdeContext
): CommitDiffSourceCodeType => {
  return {
    DestinationCommit:
      output.DestinationCommit !== undefined && output.DestinationCommit !== null
        ? output.DestinationCommit
        : undefined,
    SourceCommit: output.SourceCommit !== undefined && output.SourceCommit !== null ? output.SourceCommit : undefined,
  } as any;
};

const deserializeAws_restJson1Metrics = (output: any, context: __SerdeContext): Metrics => {
  return {
    FindingsCount:
      output.FindingsCount !== undefined && output.FindingsCount !== null ? output.FindingsCount : undefined,
    MeteredLinesOfCodeCount:
      output.MeteredLinesOfCodeCount !== undefined && output.MeteredLinesOfCodeCount !== null
        ? output.MeteredLinesOfCodeCount
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricsSummary = (output: any, context: __SerdeContext): MetricsSummary => {
  return {
    FindingsCount:
      output.FindingsCount !== undefined && output.FindingsCount !== null ? output.FindingsCount : undefined,
    MeteredLinesOfCodeCount:
      output.MeteredLinesOfCodeCount !== undefined && output.MeteredLinesOfCodeCount !== null
        ? output.MeteredLinesOfCodeCount
        : undefined,
  } as any;
};

const deserializeAws_restJson1Reactions = (output: any, context: __SerdeContext): (Reaction | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1RecommendationFeedback = (
  output: any,
  context: __SerdeContext
): RecommendationFeedback => {
  return {
    CodeReviewArn:
      output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Reactions:
      output.Reactions !== undefined && output.Reactions !== null
        ? deserializeAws_restJson1Reactions(output.Reactions, context)
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationFeedbackSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RecommendationFeedbackSummary(entry, context));
};

const deserializeAws_restJson1RecommendationFeedbackSummary = (
  output: any,
  context: __SerdeContext
): RecommendationFeedbackSummary => {
  return {
    Reactions:
      output.Reactions !== undefined && output.Reactions !== null
        ? deserializeAws_restJson1Reactions(output.Reactions, context)
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RecommendationSummary(entry, context));
};

const deserializeAws_restJson1RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EndLine: output.EndLine !== undefined && output.EndLine !== null ? output.EndLine : undefined,
    FilePath: output.FilePath !== undefined && output.FilePath !== null ? output.FilePath : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
    StartLine: output.StartLine !== undefined && output.StartLine !== null ? output.StartLine : undefined,
  } as any;
};

const deserializeAws_restJson1RepositoryAssociation = (output: any, context: __SerdeContext): RepositoryAssociation => {
  return {
    AssociationArn:
      output.AssociationArn !== undefined && output.AssociationArn !== null ? output.AssociationArn : undefined,
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    CreatedTimeStamp:
      output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
        ? new Date(Math.round(output.CreatedTimeStamp * 1000))
        : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_restJson1RepositoryAssociationSummaries = (
  output: any,
  context: __SerdeContext
): RepositoryAssociationSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RepositoryAssociationSummary(entry, context));
};

const deserializeAws_restJson1RepositoryAssociationSummary = (
  output: any,
  context: __SerdeContext
): RepositoryAssociationSummary => {
  return {
    AssociationArn:
      output.AssociationArn !== undefined && output.AssociationArn !== null ? output.AssociationArn : undefined,
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    LastUpdatedTimeStamp:
      output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
        ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_restJson1SourceCodeType = (output: any, context: __SerdeContext): SourceCodeType => {
  return {
    CommitDiff:
      output.CommitDiff !== undefined && output.CommitDiff !== null
        ? deserializeAws_restJson1CommitDiffSourceCodeType(output.CommitDiff, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
