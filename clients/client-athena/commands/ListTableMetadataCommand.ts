import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListTableMetadataInput, ListTableMetadataOutput } from "../models/index";
import {
  deserializeAws_json1_1ListTableMetadataCommand,
  serializeAws_json1_1ListTableMetadataCommand,
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

export type ListTableMetadataCommandInput = ListTableMetadataInput;
export type ListTableMetadataCommandOutput = ListTableMetadataOutput & __MetadataBearer;

export class ListTableMetadataCommand extends $Command<
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTableMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTableMetadataCommandInput, ListTableMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListTableMetadataInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTableMetadataOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTableMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTableMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTableMetadataCommandOutput> {
    return deserializeAws_json1_1ListTableMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
