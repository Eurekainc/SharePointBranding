<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" meta:webpartpageexpansion="full" %>
    <%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
        <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                    <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
                        <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
                        <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="editablezone full first">
                                        <WebPartPages:WebPartZone id="g_5D2053D51AE04C58B95DB1DFCB706D7D" runat="server" title="Row 1">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="editablezone full">
                                        <WebPartPages:WebPartZone id="g_BC76384CDC734516891937A7C6FE8AF1" runat="server" title="Row 2 Left">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="editablezone full">
                                        <WebPartPages:WebPartZone id="g_539C01DF43324CCBB323712B7A02AB62" runat="server" title="Row 2 Right">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="editablezone full">
                                        <WebPartPages:WebPartZone id="g_2877EBDC98274B458ED4A960BF2DEB71" runat="server" title="Row 4">
                                            <ZoneTemplate></ZoneTemplate>
                                        </WebPartPages:WebPartZone>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </asp:Content>