# AzView

[![license](https://img.shields.io/npm/l/react-native-az-view)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-native-az-view)](https://npm.im/react-native-az-view)

A custom scrollview with loading spinner.

```sh
import {AzView} from 'react-native-az-view';
...
<AzView isLoading={this.state.isLoading}>
    ...
</AzView>
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
