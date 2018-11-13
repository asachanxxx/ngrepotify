/**
 * @license
 * Copyright <> Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Input, OnInit } from '@angular/core';
import { ReportConfiguration } from './c_reportify_config';

@Component({
  selector: 'app-reportlint',
  templateUrl: './reportlint.component.html',
  styleUrls: ['./reportlint.component.scss']
})
export class ReportlintComponent implements OnInit {
  /**
    * All Inisializing variable that needs to input to the component
  */

  /*
  Report configuration data ...
  */
  @Input() DocumentConfigurations: ReportConfiguration;



  constructor() { }

  ngOnInit() {
    this.DocumentConfigurations = new ReportConfiguration();
    
  }

}
