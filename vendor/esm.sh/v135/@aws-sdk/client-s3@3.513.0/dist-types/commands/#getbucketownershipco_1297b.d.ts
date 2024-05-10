import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { GetBucketOwnershipControlsOutput, GetBucketOwnershipControlsRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandInput extends GetBucketOwnershipControlsRequest {
}
/**
 * @public
 *
 * The output of {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandOutput extends GetBucketOwnershipControlsOutput, __MetadataBearer {
}
declare const GetBucketOwnershipControlsCommand_base: {
    new (input: GetBucketOwnershipControlsCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<GetBucketOwnershipControlsCommandInput, GetBucketOwnershipControlsCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Retrieves <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you
 *          must have the <code>s3:GetBucketOwnershipControls</code> permission. For more information
 *          about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html">Specifying permissions in a
 *             policy</a>. </p>
 *          <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Using Object
 *             Ownership</a>. </p>
 *          <p>The following operations are related to <code>GetBucketOwnershipControls</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>PutBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketOwnershipControlsOutput
 * //   OwnershipControls: { // OwnershipControls
 * //     Rules: [ // OwnershipControlsRules // required
 * //       { // OwnershipControlsRule
 * //         ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketOwnershipControlsCommandInput - {@link GetBucketOwnershipControlsCommandInput}
 * @returns {@link GetBucketOwnershipControlsCommandOutput}
 * @see {@link GetBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link GetBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class GetBucketOwnershipControlsCommand extends GetBucketOwnershipControlsCommand_base {
}
