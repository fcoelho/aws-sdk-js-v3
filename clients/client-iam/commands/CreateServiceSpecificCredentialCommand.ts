import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateServiceSpecificCredentialRequest, CreateServiceSpecificCredentialResponse } from "../models/index";
import {
  deserializeAws_queryCreateServiceSpecificCredentialCommand,
  serializeAws_queryCreateServiceSpecificCredentialCommand,
} from "../protocols/Aws_query";
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

export type CreateServiceSpecificCredentialCommandInput = CreateServiceSpecificCredentialRequest;
export type CreateServiceSpecificCredentialCommandOutput = CreateServiceSpecificCredentialResponse & __MetadataBearer;

export class CreateServiceSpecificCredentialCommand extends $Command<
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceSpecificCredentialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateServiceSpecificCredentialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceSpecificCredentialResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryCreateServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
