# Local Development

This project is an Astro personal homepage. On this machine, Node is available from the interactive shell environment, so use `bash -ic` when starting it from a non-interactive agent/session.

## Check Node

```bash
bash -ic 'node --version && npm --version'
```

Expected on the current machine:

```text
v24.15.0
11.12.1
```

## Install Dependencies

Dependencies are already present in `node_modules`. If they need to be refreshed:

```bash
bash -ic 'npm install'
```

## Build

```bash
bash -ic 'npm run build'
```

## Start Dev Server

```bash
bash -ic 'npm run dev -- --host 0.0.0.0'
```

Astro will print the local URL, normally:

```text
http://localhost:4321/
```

## Notes

- Use `Ctrl+C` to stop the dev server.
- If port `4321` is occupied, start with another port:

```bash
bash -ic 'npm run dev -- --host 0.0.0.0 --port 4322'
```
