# vscode flowchat plugin

## Features

> use dsl to generate flowchart

## Requirements

* java environment in PATH
* config extension core lib path, which core lib can download from https://github.com/zcfrank1st/flow-lang/releases(v1.2)

## User Setting

        "editor.tokenColorCustomizations": {
            "textMateRules": [
                {
                    "scope": "flow.step",
                    "settings": {
                        "foreground": "#33CCFF"
                    }
                },
                {
                    "scope": "flow.opt",
                    "settings": {
                        "foreground": "#CC6633"
                    }
                },
                {
                    "scope": "flow.label",
                    "settings": {
                        "foreground": "#990033"
                    }
                }
            ]
        }

**Enjoy!**
