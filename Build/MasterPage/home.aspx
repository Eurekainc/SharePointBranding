<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" meta:webpartpageexpansion="full" %>
    <%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
        <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                    <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
                        <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
                        <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
                        <div class="row" style="margin-left: 50px; margin-right: 50px;">
                            <div class="col-lg-12">
                                <div class="row" style="margin-top: 30px; margin-left: 50px; margin-right: 50px;">
                                    <div class="col-lg-8 offset-lg-1">
                                        <div class="newsboxcontainer">
                                            <WebPartPages:WebPartZone id="g_CEBAF8AC8FF24F5B86E60E8C0EB23F64" runat="server" title="Top Center">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <WebPartPages:WebPartZone id="g_F1C58DF68D754C56B7397FE71E1269B7" runat="server" title="Top Right">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 30px; margin-left: 50px; margin-right: 50px;">
                            <div class="col-lg-12">
                                <div class="row" style="margin-top: 30px; margin-left: 50px; margin-right: 50px;">
                                    <div class="col-lg-6">
                                        <WebPartPages:WebPartZone id="g_C8B28831EC384292997C93A73042B584" runat="server" title="Middle Row 1 Col 1">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                    <div class="col-lg-6">
                                        <WebPartPages:WebPartZone id="g_306CFF37636542C8AEE6CDBF2F8DE260" runat="server" title="Middle Row 1 Col 2">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 30px; margin-left: 50px; margin-right: 50px;">
                                    <div class="col-lg-4">
                                        <WebPartPages:WebPartZone id="g_2DE7A18E258B40179502C99F7750CA31" runat="server" title="Middle Row 2 Col 1">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                    <div class="col-lg-4">
                                        <WebPartPages:WebPartZone id="g_240CD2D092854D63967A1E9479E5283B" runat="server" title="Middle Row 2 Col 2">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                    <div class="col-lg-4">
                                        <WebPartPages:WebPartZone id="g_594F280756D043298A8F4AA45E3E6C30" runat="server" title="Right Side Bottom">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 30px; margin-left: 50px; margin-right: 50px;">
                                    <div class="col-lg-8">
                                        <WebPartPages:WebPartZone id="g_594F280756D043298A8F4AA45E3E6C31" runat="server" title="Bottom Right Side">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                    <div class="col-lg-4">
                                        <WebPartPages:WebPartZone id="g_594F280756D043298A8F4AA45E3E6C32" runat="server" title="Bottom Left Side">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <WebPartPages:WebPartZone id="g_48EB767446CE41D798ABD1A0D9D70FB7" runat="server" title="Bottom Row">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </asp:Content>