"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cp = require("child_process");
function activate(context) {
    console.log('Congratulations, your extension "treqs" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from treqs!', 'delete', 'bye');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('treqs.testCommand', (res) => {
        console.log(res.path);
        let path = res.path;
        cp.exec('treqs list C:\\Users\\Notandi\\Desktop\\treqs\\tests\\test_data\\2-test-list-treq-elements.md', (err, stdout, stderr) => {
            console.log(err);
            console.log(stdout);
            console.log(stderr);
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