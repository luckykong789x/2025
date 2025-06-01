# 2025

This repository contains a small browser game implemented with HTML5 Canvas and plain JavaScript.

## Running Locally

Browsers block script execution when loading files directly from `file://`. To see the game, serve the files from a local HTTP server and open `index.html` through that server.

If you have Python installed, you can start a server from this directory with:

```bash
python3 -m http.server 8000
```

Then navigate to [http://localhost:8000/index.html](http://localhost:8000/index.html) in your web browser.

Any simple static server will work; `http.server` is built in to Python and requires no additional dependencies.
