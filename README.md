# AzView

[![license](https://img.shields.io/npm/l/react-native-az-view)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-native-az-view)](https://npm.im/react-native-az-view)

A custom scrollview with loading spinner.

## Table of Contents

- [Install](#install)
- [Example](#example)
- [Options](#options)
- [Contributors](#contributors)
- [License](#license)

## Install

[npm][]:

```sh
npm install rreact-native-az-view
```

[yarn][]:

```sh
yarn add react-native-az-view
```

## Example

```js
import { AzView } from "react-native-az-view";

<AzView isLoading={this.state.isLoading}>...</AzView>;
```

## Options

| Property     | Type    | Default      | Description                      |
| ------------ | ------- | ------------ | -------------------------------- |
| isLoading    | Boolean | required     | Controls the display of loading. |
| loadingText  | String  | `Loading...` | Not implemented yet.             |
| loadingColor | String  | `#FFFFFF`    | Not implemented yet.             |

## Contributors

| Name                | Website              |
| ------------------- | -------------------- |
| **Raphael Azeredo** | <http://azeredo.dev> |

## License

[MIT](LICENSE) © Raphael Azeredo

##

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
