import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RegisterWorkspaceDirectoryRequest, RegisterWorkspaceDirectoryResult } from "../models/index";
import {
  deserializeAws_json1_1RegisterWorkspaceDirectoryCommand,
  serializeAws_json1_1RegisterWorkspaceDirectoryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RegisterWorkspaceDirectoryCommandInput = RegisterWorkspaceDirectoryRequest;
export type RegisterWorkspaceDirectoryCommandOutput = RegisterWorkspaceDirectoryResult & __MetadataBearer;

export class RegisterWorkspaceDirectoryCommand extends $Command<
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterWorkspaceDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterWorkspaceDirectoryCommandInput, RegisterWorkspaceDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RegisterWorkspaceDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterWorkspaceDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterWorkspaceDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterWorkspaceDirectoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterWorkspaceDirectoryCommandOutput> {
    return deserializeAws_json1_1RegisterWorkspaceDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
