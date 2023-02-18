# QuakeWorld Resources [![Deploy](https://github.com/qw-tools/resources/actions/workflows/deploy.yml/badge.svg)](https://github.com/qw-tools/resources/actions/workflows/deploy.yml)

:link: **https://tools.quake.world/resources/**

## Development

### Setup

```shell
# clone repo
git clone git@github.com:qw-tools/resources.git
cd resources

# install dependencies
yarn install

# start dev server
yarn dev
```

dev server is hosted at http://localhost:5173

### Commands

| Command      | Description                                       |
|--------------|---------------------------------------------------|
| `yarn dev`   | Start development server at http://localhost:5173 |
| `yarn build` | Build site to `/dist`                             |
| `yarn serve` | Serve `/dist` at http://localhost:4173            |
| `yarn lint`  | Run linter                                        |
