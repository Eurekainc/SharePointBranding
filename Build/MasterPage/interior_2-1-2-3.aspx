<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" meta:webpartpageexpansion="full" %>
    <%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
        <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
                    <asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
                        <SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
                    </asp:Content>
                    <asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
                        <div class="row">
                            <WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>
                            <div class="col-xs-12">
                                <div class="row">
                                    <div class="col-xs-9">
                                        <div class="editablezone full first">
                                            <WebPartPages:WebPartZone id="g_5C4FAC739FC446C2A464BFA9A3AD7229" runat="server" title="Row 1 Col 1 Span 2">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-3">
                                        <div class="editablezone full first">
                                            <WebPartPages:WebPartZone id="g_5480FBBE98A54CABB38FD5540A54D313" runat="server" title="Row 1 Col 2">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="editablezone full first">
                                            <WebPartPages:WebPartZone id="g_4EED122DF4ED4F588834D95977271227" runat="server" title="Row 2 Full">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_6FC2BA264C404C52A05F127587CD79F1" runat="server" title="Row 3 Left">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_8906DA7C91F34E449DDC228F8C30192C" runat="server" title="Row 3 Right">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_D69F96A0B7CF4B21BA3132704F2398E9" runat="server" title="Row 4 Full">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-4">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_898AC0CE9819499DB0126671C39130A3" runat="server" title="Row 5 Col 1">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_F93FC4D1DC564415BB425D59851AA866" runat="server" title="Row 5 Col 2">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_A541C0532FA74A90ACB34D5AF8A47FD8" runat="server" title="Row 5 Col 3">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </asp:Content>