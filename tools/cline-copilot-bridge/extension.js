const vscode = require('vscode');

function activate(context) {
  const provider = new class {
    constructor() {}
    getChildren() { return [{ id: 'open', label: 'Open Cline' }]; }
    getTreeItem(element) {
      const item = new vscode.TreeItem(element.label);
      item.command = { command: 'clineBridge.openCline', title: element.label };
      return item;
    }
  }();

  context.subscriptions.push(vscode.window.registerTreeDataProvider('clineBridgeView', provider));

  context.subscriptions.push(vscode.commands.registerCommand('clineBridge.openCline', async () => {
    // Try a few fallbacks to open the Cline UI. If needed, replace or add command ids.
    const attempts = [
      // VS Code view command for the activity bar container that Cline registered
      'workbench.view.extension.claude-dev-ActivityBar',
      // Cline provided commands (fallbacks)
      'cline.openWalkthrough',
      'cline.focusChatInput',
      'cline.addToChat'
    ];

    for (const cmd of attempts) {
      try {
        await vscode.commands.executeCommand(cmd);
        return; // success
      } catch (err) {
        // ignore and try next
      }
    }

    vscode.window.showErrorMessage('Failed to open Cline. Ensure Cline is installed and/or update the bridge with the correct view/command ids.');
  }));
}

exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
