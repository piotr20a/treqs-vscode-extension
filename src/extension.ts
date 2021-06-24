
import * as vscode from 'vscode';
import cp = require('child_process');
import { HelloWorldPanel } from './webview';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "treqs" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from treqs!', 'delete', 'bye');
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('treqs.testCommand', (res) => {
		console.log(res.path);
		let path = res.path
	   cp.exec('treqs list C:\\Users\\Notandi\\Desktop\\treqs\\tests\\test_data\\2-test-list-treq-elements.md' ,(err, stdout, stderr) =>{
		console.log(err);
		console.log(stdout);
		console.log(stderr);
	   })
}))

	// context.subscriptions.push(vscode.commands.registerCommand('treqs.addOption', () => this.addOption()));

	// addOption() {

	// }
}

// this method is called when your extension is deactivated
export function deactivate() { }
