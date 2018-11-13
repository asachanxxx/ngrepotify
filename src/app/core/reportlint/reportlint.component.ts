/**
 * @license
 * Copyright <> Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ReportConfiguration, ReportField, ReportDetailProperty, ReportDetailHeader } from './c_reportify_config';
import { Meta_extract } from 'src/app/cls_classes';

@Component({
  selector: 'app-reportlint',
  templateUrl: './reportlint.component.html',
  styleUrls: ['./reportlint.component.scss']
})
export class ReportlintComponent implements OnInit, AfterViewInit {


  ngAfterViewInit(): void {

  }
  /**
    * All Inisializing variable that needs to input to the component
  */

  /*
  Report configuration data ...
  */
  @Input() DocumentConfigurations: ReportConfiguration;
  @Input() Report_Details: ReportDetailProperty;
  public Report_Test_Data: Array<Meta_extract>;


  constructor() { }

  ngOnInit() {
    this.DocumentConfigurations = new ReportConfiguration();
    this.DocumentConfigurations.Report_Image_Url = 'assets/Repotify.png';
    this.DocumentConfigurations.Header_List = new Array<ReportField>();


    /* Making Test Data* ****************************************************************************/
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

    this.Report_Test_Data = new Array<Meta_extract>();
    this.Report_Test_Data.push({ val1: 1, val2: "Asanga", val3: "07784584458", val4: "cspl.itm@googlemail.com" });
    this.Report_Test_Data.push({ val1: 2, val2: "Asanga chan", val3: "0552458548", val4: "fmcg@slt.com.lk" });
    for (var x = 0; x < 100; x++) {
      this.Report_Test_Data.push({ val1: x, val2: "Asanga chan" + x.toString(), val3: "0552458548", val4: x.toString() + "@slt.com.lk" });
    }
    /****************************** END of test Data ************************************************************************************* */



    /*Report Details Configurations */
    this.Report_Details = new ReportDetailProperty();
    this.Report_Details.Property_Headers.push(
      { Field_Color: "", Field_Text: "Id", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "Customer Name", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "Contact No", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "E-Mail", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false }
    )
    this.Report_Details.Property_Data = new Array<Meta_extract>();
    this.Report_Details.Property_Count = 4;
    this.Report_Details.Property_Data = this.Report_Test_Data;



  }



}
