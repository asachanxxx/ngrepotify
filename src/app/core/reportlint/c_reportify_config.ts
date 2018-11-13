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

    public Header_List:Array<ReportField>;

}

export class ReportField{
    public Field_Caption: string = "Default_caption";
    public Field_Separator: string = ":";
    public Field_value: string = "Default_Value";
    public Field_Suffix: string = "Rs";
    public Field_Suffix_Off: boolean = false;
    public Field_Caption_Font_Size: number = 14;
    public Field_value_Font_Size: number = 14;
}