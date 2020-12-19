// The module 'vscode' contains the VS Code extensibility API
import { ExtensionContext, commands, window, ProviderResult, Uri } from 'vscode';
import { URLSearchParams } from 'url';

export function activate(context: ExtensionContext) {

	let disposable = window.registerUriHandler({
		handleUri(uri: Uri): ProviderResult<void> {
			if (uri.path === '/open-or-clone') {
				const query = new URLSearchParams(uri.query);
				const project = query.get('project');
				let url = query.get('url');
				if (project && url) {
					url = decodeURIComponent(url);
					handleOpenOrClone(project, url);
				} else {
					window.showErrorMessage(`Could not open or clone project: ${project} at ${url}`);
				}
			}
		}
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }

async function handleOpenOrClone(project: string, url: string) {
	const recent: any = await findRecent(project);
	if (recent) {
		handleOpen(project, recent.folderUri.path);
	} else {
		window.showInformationMessage(`Project \`${project}\` not found in recents, cloning...`);
		commands.executeCommand('git.clone', url);
	}
}

async function findRecent(project: string) {
	const recentlyOpened: any = await commands.executeCommand('_workbench.getRecentlyOpened');
	return recentlyOpened.workspaces.find((entry: any) => entry.folderUri.path.endsWith(project));
}

async function handleOpen(project: string, path: string) {
	const curWindow = 'Open';
	const newWindow = 'Open in New window';
	const result = await window.showInformationMessage(`Would you like to open \`${project}\` at "${path}"?`, curWindow, newWindow);

	const uriPath = Uri.file(path);
	if (result === curWindow) {
		commands.executeCommand('vscode.openFolder', uriPath);
	} else if (result === newWindow) {
		commands.executeCommand('vscode.openFolder', uriPath, true);
	}
}
