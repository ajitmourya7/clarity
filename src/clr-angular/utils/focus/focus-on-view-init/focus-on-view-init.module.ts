/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FOCUS_ON_VIEW_INIT_DIRECTIVES } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [FOCUS_ON_VIEW_INIT_DIRECTIVES],
  exports: [FOCUS_ON_VIEW_INIT_DIRECTIVES],
})
export class ClrFocusOnViewInitModule {}
