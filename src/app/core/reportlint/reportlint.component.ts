/**
 * @license
 * Copyright <> Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ReportConfiguration, ReportField } from './c_reportify_config';
import { Meta_extract } from 'src/app/cls_classes';

@Component({
  selector: 'app-reportlint',
  templateUrl: './reportlint.component.html',
  styleUrls: ['./reportlint.component.scss']
})
export class ReportlintComponent implements OnInit ,AfterViewInit {
  
  
  ngAfterViewInit(): void {
  
  }
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
    this.DocumentConfigurations.Report_Image_Url = 'assets/Repotify.png';

    this.DocumentConfigurations.Header_List = new Array<ReportField>();

    var header1: ReportField = new ReportField();
    header1.Field_Caption = "Customer";
    header1.Field_Separator = " : ";
    header1.Field_Suffix = "-";
    header1.Field_Suffix_Off = true;
    header1.Field_value = "Arboshiki";
    header1.Field_value_Font_Size = 14;
    header1.Field_Caption_Font_Size = 14;

    var header2: ReportField = new ReportField();
    header2.Field_Caption = "Address";
    header2.Field_Separator = " : ";
    header2.Field_Suffix = "-";
    header2.Field_Suffix_Off = true;
    header2.Field_value = "455 Foggy Heights, AZ 85004, US";
    header2.Field_value_Font_Size = 14;
    header2.Field_Caption_Font_Size = 14;

    var header3: ReportField = new ReportField();
    header3.Field_Caption = "TeLephone";
    header3.Field_Separator = " : ";
    header3.Field_Suffix = "-";
    header3.Field_Suffix_Off = true;
    header3.Field_value = "(123) 456-789";
    header3.Field_value_Font_Size = 14;
    header3.Field_Caption_Font_Size = 14;

    var header4: ReportField = new ReportField();
    header4.Field_Caption = "E-Mail";
    header4.Field_Separator = " : ";
    header4.Field_Suffix = "-";
    header4.Field_Suffix_Off = true;
    header4.Field_value = "company@example.com";
    header4.Field_value_Font_Size = 14;
    header4.Field_Caption_Font_Size = 14;

    this.DocumentConfigurations.Header_List.push(header1, header2, header3, header4);
    console.log(this.DocumentConfigurations.Header_List);

   
    var expx: Array<Meta_extract> = new Array<Meta_extract>();
    expx.push({val1:1 , val2:"Asanga"});
    expx.push({val1:2 , val2:"Asanga chan"});

    // Step 1. Get all the object keys.
    let evilResponseProps = Object.getOwnPropertyNames(expx[0]);
    console.log("evilResponseProps",evilResponseProps)


    // // Step 2. Create an empty array.
    // let goodResponse = [];
    // // Step 3. Iterate throw all keys.
    // for (let prop of evilResponseProps) {
    //   //goodResponse.push(evilResponseProps[prop]);
    //   // console.log(prop);
    //   // console.log(Object.getOwnPropertyNames(prop));
    // }

    // //console.log(evilResponseProps);

    // const object1 = {
    //   a: 1,
    //   b: 2,
    //   c: 3
    // };
    // console.log(object1)
    //console.log(Object.getOwnPropertyNames(object1));
  }

}
