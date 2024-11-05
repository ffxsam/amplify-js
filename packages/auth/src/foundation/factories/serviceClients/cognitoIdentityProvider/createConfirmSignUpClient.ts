// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { composeServiceApi } from '@aws-amplify/core/internals/aws-client-utils/composers';

import { DEFAULT_SERVICE_CLIENT_API_CONFIG } from './constants';
import { cognitoUserPoolTransferHandler } from './shared/handler';
import {
	createUserPoolDeserializer,
	createUserPoolSerializer,
} from './shared/serde';
import {
	ConfirmSignUpCommandInput,
	ConfirmSignUpCommandOutput,
	ServiceClientFactoryInput,
} from './types';

export const createConfirmSignUpClient = (config: ServiceClientFactoryInput) =>
	composeServiceApi(
		cognitoUserPoolTransferHandler,
		createUserPoolSerializer<ConfirmSignUpCommandInput>('ConfirmSignUp'),
		createUserPoolDeserializer<ConfirmSignUpCommandOutput>(),
		{
			...DEFAULT_SERVICE_CLIENT_API_CONFIG,
			...config,
		},
	);
