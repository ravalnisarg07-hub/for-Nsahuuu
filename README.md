# Nasera's little corner 🌸

A static, mobile-first comfort site. No backend, no database, no API keys.

## Folder structure
```
index.html   page structure
style.css    colors + styling (palette is at the top)
script.js    all messages, games and behavior (messages are at the top)
assets/
  images/    your photos (memory1.jpg ... memory4.jpg)
  videos/    memory-video1.mp4 ...
  sounds/    optional audio (not wired up yet)
  icons/     optional custom panda/animal images
```

## Run it locally
Open `index.html` in a browser. That's it.

## Deploy on GitHub Pages
1. Create a new GitHub repo (e.g. `for-nasera`) and upload everything in this folder.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/for-nasera/`. Send her that link.

## Where to customize
- **Messages:** top of `script.js` (`DAYS`, `OPEN`, `NOTES`, `FORTUNES`, `SECRETS`, `BUBBLES`, `MOODS`, `FINAL`).
- **Photos:** drop images into `assets/images/` named `memory1.jpg` to `memory4.jpg`. To add more, copy a `<figure>` line in `index.html` (Memories section). Videos go in `assets/videos/` (copy a `<figure><video ...>` line). Edit the `<figcaption>` text to change captions. Missing images simply don't show.
- **Colors:** CSS variables at the top of `style.css` (night mode colors are right below).
- **Panda and animals:** they are emoji. Change the `PANDA` object in `script.js`, or swap emoji for `<img src="assets/icons/...">` tags.
- **Sounds:** put files in `assets/sounds/` and add an `<audio>` element with a user-controlled button.
- **Game settings:** `CATCH_SECONDS` in `script.js`; memory cards are the `cards` list in `memory()`.
- **Her progress:** saved in her own browser (localStorage). Clear site data to reset.
