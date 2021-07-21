# VS Code: Open Recent via URI

[![Version](https://img.shields.io/visual-studio-marketplace/v/timmoverlaan.uri-open-recent)](https://marketplace.visualstudio.com/items?itemName=timmoverlaan.uri-open-recent)

This VS code extension adds an URI handler to quickly open a project from elsewhere (eg GitHub, GitLab, BitBucket). The name of the project must be present in recent items for this extension to find it. This is the structure of the URI:

| Scheme      | Authority                      | Path             | Query                              |
|-------------|--------------------------------|------------------|------------------------------------|
| `vscode://` | `timmoverlaan.uri-open-recent` | `/open-or-clone` | `?project=<PROJECT>&url=<GIT_URL>` |

## Instructions

1. Install this extension
2. From VS Code: [Open this repo on GitHub](https://github.com/tverlaan/uri-open-recent)
3. To VS Code: [Open or clone this repo in VS Code](https://tverlaan.github.io/uri-open-recent.html)

## Features

  * Open (recent) project by URI
  * Offer to clone project if not found in recents

![Example open dialog](images/uri-open-recent-example.png)

## Requirements

It's recommended to call the URI from a third party application, eg from a browser.


## Extension Settings

Not applicable

## Browser integrations

  * [Open in VS Code](https://github.com/tverlaan/open-in-vscode) (Chrome)
