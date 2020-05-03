/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { MigrationJobTask, ScriptOrg } from "..";
import { OPERATION } from "../../components/statics";


export default interface ICRUDJobCreateResult {
    job: any,
    cn: any,
    chunks: Array<Array<any>>,
    task: MigrationJobTask,
    org: ScriptOrg,
    operation: OPERATION
}
