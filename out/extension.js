"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cp = require("child_process");
function activate(context) {
    console.log('Congratulations, your extension "treqs" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from treqs!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('treqs.testCommand', () => {
        vscode.window.showInformationMessage('Hello World from treqs!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('treqs.testCommand', () => {
        cp.exec('pwd', (err, stdout, stderr) => {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (err) {
                console.log('error: ' + err);
            }
        });
    }));
    // context.subscriptions.push(vscode.commands.registerCommand('treqs.addOption', () => this.addOption()));
    // addOption() {
    // }
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map