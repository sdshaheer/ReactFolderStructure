"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const pdf_editor_provider_1 = require("./pdf-editor-provider");
function activate(context) {
    const extensionRoot = vscode.Uri.file(context.extensionPath);
    const provider = new pdf_editor_provider_1.PdfEditorProvider(extensionRoot);
    const disposable = vscode.window.registerCustomEditorProvider('pdf.preview', provider, {
        webviewOptions: {
            enableFindWidget: false,
            retainContextWhenHidden: true,
        },
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map