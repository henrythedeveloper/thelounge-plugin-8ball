# Overview

The **Magic 8-Ball Plugin** adds a fun `/8ball` command to The Lounge, an IRC client. Users can ask the Magic 8-Ball a question, and it will respond with a randomly selected answer.

---
# Installation Guide

## **Step 1: Locate The Lounge Home Directory**

The Lounge stores its configuration and plugins in its "home directory." This directory may vary depending on your operating system:

- **macOS/Linux**: The home directory is typically `~/.thelounge`.
- **Windows**: By default, the home directory is located at `%APPDATA%\thelounge`.

---

## **Step 2: Create the Plugin Folder**

1. Navigate to The Lounge's `packages/node_modules` directory:
    
- On macOS/Linux:
```
cd ~/.thelounge/packages/node_modules
```
- On Windows:
```
cd %APPDATA%\thelounge\packages\node_modules
```
2. Create a new folder for the plugin:
```
mkdir thelounge-plugin-8ball
```

---

## **Step 3: Add the Plugin Code**

Inside the newly created folder, add the `index.js` and  `package.json` files.

---

## **Step 4: Register the Plugin with `yarn link`**
1. Open a terminal in the`thelounge-plugin-8ball` folder:
- On macOS:
```
  cd ~/.thelounge/packages/node_modules/thelounge-plugin-8ball
```
- On Windows:
```
  cd %APPDATA%\thelounge\packages\node_modules\thelounge-plugin-8ball
```
2. Run the following command to register the plugin globally:
```
yarn link
```

---
## **Step 5: Add the Plugin to The Lounge's Dependencies**

1. Open the `package.json` file in `~/.thelounge/packages/` (macOS/Linux) or `%APPDATA%\thelounge\packages\` (Windows).
2. Add the following entry to the `dependencies` section:
```
"thelounge-plugin-8ball": "file:node_modules/thelounge-plugin-8ball"
```
3. Save the file.

---
## **Step 6: Link the Plugin to The Lounge's Source**

1. Navigate to the directory where The Lounge is installed (if installed from source):
```
cd /path/to/thelounge/source
```

2. Run the following command to link the plugin:
```
yarn link thelounge-plugin-8ball
```

---
## **Step 7: Restart The Lounge**

1. Restart The Lounge to load the plugin:
```
thelounge start
```

---
## **Step 8: Test the Plugin**

1. Join a channel in The Lounge.
2. Use the `/8ball` command:
```
/8ball Am I cooked?
```
3. The Magic 8-Ball should respond with a random answer.
