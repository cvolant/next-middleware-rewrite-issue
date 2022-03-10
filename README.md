# Minimal reproduction

This reproduction is build upon next rewrites official example.
2 middlewares have been added:

- one in the existing `/pages/news` folder, which already contains the `[...slug]` page.
- one in the newly created `/pages/blog` folder (that should not exist...).

Note: `/blog` is rewriten to `/news` in the next.config.js.

Both these middlewares only log something to the terminal.

## Steps to reproduce

```bash
yarn install && yarn build && yarn start
```

Then visit the website, and check the logs in the terminal. You will see the logs from `/pages/blog/_middleware.js` and not from `/pages/blog/_middleware.js`.
