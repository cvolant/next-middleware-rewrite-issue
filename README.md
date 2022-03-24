# Minimal reproduction

This reproduction is build upon next rewrites official example: `/blog` is rewriten to `/news` in the next.config.js.

2 middlewares have been added:

- one in the existing `/pages/news` folder, which already contains the `[...slug]` page.
- one in the newly created `/pages/blog` folder, that should not exist and does not contain any page.

Both these middlewares only log something to the terminal.

```
/pages
├ ...
├ /news
| ├ _middelware
| └ [...slug]
├ /blog
| └ _middelware
├ ...
```

## Steps to reproduce

```bash
yarn install && yarn build && yarn start
```

Then visit the website, and check the logs in the terminal. You will see the logs from `/pages/blog/_middleware.js` (that has no associated pages) and not from `/pages/blog/_middleware.js`.
