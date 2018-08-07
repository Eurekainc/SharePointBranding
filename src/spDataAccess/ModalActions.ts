// //import { ContactDom } from "./App";
// import { ContactDataAccess } from "./DataAccess";

// export class modalActions {
//     public static LaunchNewItemModal() {
//         let ModalHtml: HTMLElement = document.getElementById("newContactContainer").cloneNode(true) as HTMLElement;
//         let ModalOptions: SP.UI.DialogOptions = new SP.UI.DialogOptions();
//         ModalOptions.title = "New Contact";
//         ModalOptions.width = 400;
//         ModalOptions.height = 300;
//         ModalOptions.html = ModalHtml;
//         ModalOptions.dialogReturnValueCallback = ContactDataAccess.CreateNewContact;
//         SP.UI.ModalDialog.showModalDialog(ModalOptions);
//         (ModalHtml.getElementsByClassName("SubmitNewContact")[0] as HTMLButtonElement).onclick = modalActions.SubmitModal;
//         (ModalHtml.getElementsByClassName("CancelNewContact")[0] as HTMLButtonElement).onclick = modalActions.CancelModal;
//     }
//     public static SubmitModal(e: MouseEvent) {
//         var Validated: boolean = true;
//         var ReturnValue:ModalReturnValue = new ModalReturnValue;
//         let ModalContainer = e.srcElement.closest(".newContactContainer");

//         let NameElement = (ModalContainer.querySelector(".txtContactName") as HTMLInputElement);
//         let EmailElement = (ModalContainer.querySelector(".txtContactEmail") as HTMLInputElement);
//         let PhoneNumberElement = (ModalContainer.querySelector(".txtContactPhone") as HTMLInputElement);
//         //ContactDom.ValidateDomValue(NameElement)? ReturnValue.Name = NameElement.value: Validated = false;
//        // ContactDom.ValidateDomValue(PhoneNumberElement)? ReturnValue.PhoneNumber = PhoneNumberElement.value: Validated = false;
//         ReturnValue.Email = EmailElement.value;
//         Validated ? SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK, ReturnValue) : "";
//     }
//     public static CancelModal() {
//         SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel, "");
//     }
// }
// export class ModalReturnValue{
//     Name:string;
//     Email:string;
//     PhoneNumber:string;
// }