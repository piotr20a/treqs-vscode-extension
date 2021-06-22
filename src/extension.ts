
import * as vscode from 'vscode';
import cp = require('child_process');

export function activate(context: vscode.ExtensionContext) {

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

// this method is called when your extension is deactivated
export function deactivate() { }
