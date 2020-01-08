// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	const flowPath = vscode.workspace.getConfiguration("flowchart");
	const editor = vscode.window.activeTextEditor;

	if (flowPath && editor) {
		let disposable = vscode.commands.registerTextEditorCommand('extension.flowchart', () => {
			let documentText = editor.document.getText().replace(/\r\n/g, "");
			
			const panel = vscode.window.createWebviewPanel(
				'flowChart',
				'flowchart',
				vscode.ViewColumn.Beside,
				{
					enableScripts: true,
					retainContextWhenHidden: true
				}
			)

			exec(`java -Dfile.encoding=utf-8 -Dtext="${documentText}" -jar ${flowPath.get("path")}`, (error, stdout, stderr) =>{
				if (!error) {
					panel.webview.html = stdout;
				} else {
					vscode.window.showInformationMessage(stderr);
				}
			});
		});
	
		context.subscriptions.push(disposable);	
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
