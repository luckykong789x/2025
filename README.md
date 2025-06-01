# 2025

xq6vdf-codex/web上でマリオ風ゲーム作成
This repository contains a small browser platformer built with HTML5 Canvas and vanilla JavaScript.

## Running Locally

Some browsers block scripts from running when opened directly from the filesystem. To play the game, start a local HTTP server from this directory and open `index.html` through that server.

If you have Python installed you can run:

This repository contains a small browser game implemented with HTML5 Canvas and plain JavaScript.

## Running Locally

Browsers block script execution when loading files directly from `file://`. To see the game, serve the files from a local HTTP server and open `index.html` through that server.

If you have Python installed, you can start a server from this directory with:
 main

```bash
python3 -m http.server 8000
```

 xq6vdf-codex/web上でマリオ風ゲーム作成
Then navigate to [http://localhost:8000/index.html](http://localhost:8000/index.html) in your browser.

Use the arrow keys to move left and right, and press Up or Space to jump.

Then navigate to [http://localhost:8000/index.html](http://localhost:8000/index.html) in your web browser.

Any simple static server will work; `http.server` is built in to Python and requires no additional dependencies.
 main
