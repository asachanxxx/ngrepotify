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
import { Observable, of, observable, Observer } from 'rxjs';

@Component({
  selector: 'app-reportlint',
  templateUrl: './reportlint.component.html',
  styleUrls: ['./reportlint.component.scss']
})
export class ReportlintComponent implements OnInit, AfterViewInit {
  time: Observable<string>;


  ngAfterViewInit(): void {

  }
  /**
    * All Inisializing variable that needs to input to the component
  */

  /**
   * Report configuration data ...
   */
  @Input() DocumentConfigurations: ReportConfiguration;
  /**
   * Report  Body  ...
   */
  @Input() Report_Details: ReportDetailProperty;
  /**
   * This is to pass the report header image
   */
  @Input() Report_BaseImage_Path: string;
  /**
   *  1- Normal Tabular  Mode
   *  2- Tabular WithGrouping Client Side Processing
   *  3- Tabular WithGrouping Server Side Processing
   */
  public ReportMode: number = 2;
  /**
   * This is to pass if group summary on or off
   */
  @Input() Turn_On_Group_Summary: boolean = true;
  /**
   * Holds the data after grouping the raw data
   */
  public GroupBy_Colelction: Array<any> = new Array<any>();



  public Report_Test_Data: Array<Meta_extract>;


  constructor() {

    var total = [0, 1, 2, 3, 4, 5].reduce(
      function (a, b) {
        console.log("reducer", a, b);
        return a + b;

      });


  }

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
    for (var x = 0; x < 50; x++) {
      var cusname = "Asanga";
      switch (x % 9) {
        case 1:
          cusname = "Praboda";
          break;
        case 2:
          cusname = "Umesh";
          break;
        case 3:
          cusname = "Achala";
          break;
        case 4:
          cusname = "Thivanka";
          break;
        case 5:
          cusname = "Shashimal";
          break;
        case 6:
          cusname = "Dilhara";
          break;
        case 7:
          cusname = "Susiri";
          break;
        case 8:
          cusname = "Ramesh";
          break;
        case 9:
          cusname = "Geeth";
          break;
        default:
          cusname = "Thilak";
          break;
      }
      //cusname = cusname + (x % 9).toString();
      this.Report_Test_Data.push({ val1: x, val2: cusname, val3: "0" + (x % 9).toString() + "524" + (x % 9).toString() + "58548", val4: (x % 9).toString() + "@slt.com.lk", val5: x });
    }
    /****************************** END of test Data ************************************************************************************* */



    /*Report Details Configurations ************************************************************************************/
    this.Report_Details = new ReportDetailProperty();
    this.Report_Details.Property_Headers.push(
      { Field_Color: "", Field_Text: "Id", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "Customer Name", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "Contact No", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "E-Mail", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false },
      { Field_Color: "", Field_Text: "Count", Field_Font_Size: 12, Field_FontBold: false, Field_Underlined: false }
    )
    this.Report_Details.Property_Data = new Array<Meta_extract>();
    this.Report_Details.Property_Count = 4;
    this.Report_Details.Property_Data = this.Report_Test_Data;
    /*End of the configurations *********************************************************************************************/

    this.GroupBy_Colelction = this.transform(this.Report_Test_Data, "val3")
    console.log("groupByName: ", this.GroupBy_Colelction);

    console.log("Object.keys",
      Object.keys(this.Report_Details.Property_Headers).
        map(
          k => (
            {
              k,
              value: this.Report_Details.Property_Headers[k].Field_Text
            })));


    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

  /**
   * Syncronusly Group the given List of object by given field 
   */
  transform(collection: Array<any>, property: string): Array<any> {
    if (!collection) {
      return null;
    }
    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});
    console.log("groupedCollection", groupedCollection)
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

  /**
  * ASyncronusly Group the given List of object by given field 
  */
  transformSync(collection: Array<any>, property: string): Observable<Array<any>> {
    if (!collection) {
      return null;
    }
    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});
    return of(Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] })));
  }

}
