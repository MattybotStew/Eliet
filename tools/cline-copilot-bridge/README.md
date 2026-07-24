Cline → Copilot Agents bridge

What this scaffold does
- Adds a small extension that contributes a view named "Cline" into a view container placeholder COPILOT_VIEW_ID.
- The view shows a single item that executes a placeholder Cline command ID when clicked.

How to use
1. Find the Copilot Agents view container id:
   - In VS Code: Extensions → GitHub Copilot → Extension Files → open package.json and search for "viewsContainers" or any view whose name contains "Agents" or "Agents View".
   - Or on disk (mac/linux): ~/.vscode/extensions/github.copilot-*/package.json
   - Note the view container id (e.g., "github.copilot.agentsView" or similar) and replace COPILOT_VIEW_ID in package.json with it.

2. Find Cline's command id to invoke the panel:
   - Extensions → Cline → Extension Files → open package.json and inspect "contributes.commands" for a command that opens the Cline panel. Replace CLINE_COMMAND_ID in extension.js with that command id.
   - Or on disk: ~/.vscode/extensions/saoudrizwan.claude-dev-*/package.json

3. Install locally
   - From this folder run: npm init -y (optional) and pack as a VSIX using vsce or simply copy files into ~/.vscode/extensions/ for testing.
   - Recommended: Install vsce (npm i -g vsce) then run: vsce package
   - Install the resulting .vsix with: code --install-extension cline-copilot-bridge-0.0.1.vsix

4. Reload VS Code. The Cline view should appear inside the Copilot Agents container. Click "Open Cline" to open the Cline panel.

Notes
- Editing marketplace extension files in-place is fragile; this bridge approach is reversible and won't be overwritten on updates.
- If Copilot doesn't expose a view container for Agents, an alternative is to register the view under a common container like "explorer" or create a webview panel instead.

If you want, I can attempt to auto-detect the COPILOT_VIEW_ID and Cline command id on your machine and replace the placeholders before packaging. Do you want that?