"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cp = require("child_process");
let { pythonShell } = require('python-shell');
function activate(context) {
    console.log('Congratulations, your extension "treqs" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from treqs!');
        pythonShell.runString('x=1+1;print(x)', null, function (err) {
            if (err) {
                console.log(err);
                console.log('finished');
            }
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('treqs.treqsList', () => {
        cp.exec('treqs list extension.ts', (err, stdout, stderr) => {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (err) {
                console.log('error: ' + err);
            }
        });
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map