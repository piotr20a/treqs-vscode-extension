
import * as vscode from 'vscode';
import cp = require('child_process');
import { HelloWorldPanel } from './webview';
let {PythonShell} = require('python-shell');
// var packageName = 'pip install -e .';
let options = {
	// args: [packageName],
	pythonPath: 'C:\\Users\\Notandi\\AppData\\Local\\Programs\\Python\\Python39\\python.exe',
	// scriptPath: '..\\..\\..\\Desktop\\treqs-ng'
}
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "treqs" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('treqs.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from treqs!', 'delete', 'bye');
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('treqs.testCommand', (res) => {
		console.log(res.path);
		PythonShell.run('script1.py', undefined, function(err: any, result: any){
		   if(err) throw err;
		   console.log("it loaded treqs" + result);
		})
	   cp.exec('treqs list' + res.path,(err, stdout, stderr) =>{
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
