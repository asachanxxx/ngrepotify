export class ReportConfiguration {

    /*
    This will be define our layout and there may be several differant layouts for the header.
    The default layout is no 1
    */
    public b_report_header_Layout: number = 1;

    public b_report_header_visible: boolean = true;
    public b_report_footer_visible: boolean = true;
    public b_page_header_visible: boolean = true;
    public b_page_fotter_visible: boolean = true;

    public Report_Image_Url: string = "";
    public Report_Image_Width: number = 333;
    public Report_Image_Height: number = 72;

    public Header_List: Array<ReportField>;

}

/*
* This will use to get header Firld and value data for report headers
*/
export class ReportField {
    public Field_Caption: string = "Default_caption";
    public Field_Separator: string = ":";
    public Field_value: string = "Default_Value";
    public Field_Suffix: string = "Rs";
    public Field_Suffix_Off: boolean = false;
    public Field_Caption_Font_Size: number = 14;
    public Field_value_Font_Size: number = 14;
    public Field_Color: string = "Default_Value";
    public Field_FontBold: boolean = true;
    public Field_Underlined: boolean = false;
    public Field_Font_Size: number = 14;

}
/*
*This use to get report details headers. Array of type of this object would be fine
*/
export class ReportDetailHeader {
    public Field_Text: string = "Default_Value";
    public Field_Font_Size: number = 14;
    public Field_Color: string = "Default_Value";
    public Field_FontBold: boolean = true;
    public Field_Underlined: boolean = false;
}


export class ReportDetailProperty {
    public Property_Count: number = 0;
    public Property_Headers:Array<ReportDetailHeader> =new Array<ReportDetailHeader>();
    public Property_Data: any[] = [];
}

