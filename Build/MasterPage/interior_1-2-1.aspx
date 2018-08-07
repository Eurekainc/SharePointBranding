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
                            <div class="col-xs-9">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="editablezone full first">
                                            <WebPartPages:WebPartZone id="g_D76D823AA855437096B26A39513258D3" runat="server" title="Row 1 Full">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_20997853DB0945319E9FCE90DBCD3009" runat="server" title="Row 2 Col 1">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_B7E95D3ED74941A7BE23E162398B1B89" runat="server" title="Row 2 Col 2">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="editablezone full">
                                            <WebPartPages:WebPartZone id="g_AD44787C8F4F4DD78D97F827389E7E96" runat="server" title="Row 3 Full">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="zone linkslist">
                                            <WebPartPages:WebPartZone id="g_A646C31850384DE1BD5F53AA934B1A79" runat="server" title="Right Top">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="editablezone full tall">
                                            <WebPartPages:WebPartZone id="g_13C3834739F84D989E33E41AE732C45C" runat="server" title="Right Bottom">
                                                <ZoneTemplate></ZoneTemplate>
                                            </WebPartPages:WebPartZone>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </asp:Content>