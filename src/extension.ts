
import * as vscode from 'vscode';
import cp = require('child_process');
let {pythonShell} = require('python-shell');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "treqs" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from treqs!');
		pythonShell.runString('x=1+1;print(x)', null, function (err: any) {
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

// this method is called when your extension is deactivated
export function deactivate() {}
