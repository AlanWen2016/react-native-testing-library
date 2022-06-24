(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(80)),o={id:"react-navigation",title:"React Navigation"},c={unversionedId:"react-navigation",id:"react-navigation",isDocsHomePage:!1,title:"React Navigation",description:"This section deals with integrating @testing-library/react-native with react-navigation, using Jest.",source:"@site/docs/ReactNavigation.md",permalink:"/react-native-testing-library/docs/react-navigation",editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/docs/ReactNavigation.md",sidebar:"docs",previous:{title:"ESLint Plugin Testing Library Compatibility",permalink:"/react-native-testing-library/docs/eslint-plugin-testing-library"},next:{title:"Redux Integration",permalink:"/react-native-testing-library/docs/redux-integration"}},s=[{value:"Stack Navigator",id:"stack-navigator",children:[{value:"Setting up",id:"setting-up",children:[]},{value:"Setting up the test environment",id:"setting-up-the-test-environment",children:[]},{value:"Example tests",id:"example-tests",children:[]}]},{value:"Drawer Navigator",id:"drawer-navigator",children:[{value:"Setting up",id:"setting-up-1",children:[]},{value:"Setting up the test environment",id:"setting-up-the-test-environment-1",children:[]},{value:"Example tests",id:"example-tests-1",children:[]}]},{value:"Running tests",id:"running-tests",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section deals with integrating ",Object(r.b)("inlineCode",{parentName:"p"},"@testing-library/react-native")," with ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation"),", using Jest."),Object(r.b)("h2",{id:"stack-navigator"},"Stack Navigator"),Object(r.b)("h3",{id:"setting-up"},"Setting up"),Object(r.b)("p",null,"Install the packages required for React Navigation. For this example, we will use a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/stack-navigator/"}),"stack navigator")," to transition to the second page when any of the items are clicked on."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add @react-native-community/masked-view @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens\n")),Object(r.b)("p",null,"Create an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/AppNavigator.js"}),Object(r.b)("inlineCode",{parentName:"a"},"./AppNavigator.js"))," component which will list the navigation stack:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nimport HomeScreen from './screens/HomeScreen';\nimport DetailsScreen from './screens/DetailsScreen';\n\nconst { Screen, Navigator } = createStackNavigator();\n\nexport default function Navigation() {\n  const options = {};\n\n  return (\n    <Navigator>\n      <Screen name=\"Home\" component={HomeScreen} />\n      <Screen options={options} name=\"Details\" component={DetailsScreen} />\n    </Navigator>\n  );\n}\n")),Object(r.b)("p",null,"Create your two screens which we will transition to and from them. The homescreen, found in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/screens/HomeScreen.js"}),Object(r.b)("inlineCode",{parentName:"a"},"./screens/HomeScreen.js")),", contains a list of elements presented in a list view. On tap of any of these items will move to the details screen with the item number:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport {\n  Text,\n  View,\n  FlatList,\n  TouchableOpacity,\n  StyleSheet,\n} from 'react-native';\n\nexport default function HomeScreen({ navigation }) {\n  const [items] = React.useState(\n    new Array(20).fill(null).map((_, idx) => idx + 1)\n  );\n\n  const onOpacityPress = (item) => navigation.navigate('Details', item);\n\n  return (\n    <View>\n      <Text style={styles.header}>List of numbers from 1 to 20</Text>\n      <FlatList\n        keyExtractor={(_, idx) => `${idx}`}\n        data={items}\n        renderItem={({ item }) => (\n          <TouchableOpacity\n            onPress={() => onOpacityPress(item)}\n            style={styles.row}\n          >\n            <Text>Item number {item}</Text>\n          </TouchableOpacity>\n        )}\n      />\n    </View>\n  );\n}\n\nconst divider = '#DDDDDD';\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 20,\n    textAlign: 'center',\n    marginVertical: 16,\n  },\n  row: {\n    paddingVertical: 16,\n    paddingHorizontal: 24,\n    borderBottomColor: divider,\n    borderBottomWidth: 1,\n  },\n});\n")),Object(r.b)("p",null,"The details screen, found in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/screens/DetailsScreen.js"}),Object(r.b)("inlineCode",{parentName:"a"},"./screens/DetailsScreen.js")),", contains a header with the item number passed from the home screen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./screens/DetailsScreen.js\nimport * as React from 'react';\nimport { Text, StyleSheet, View } from 'react-native';\n\nexport default function DetailsScreen(props) {\n  const item = Number.parseInt(props.route.params, 10);\n\n  return (\n    <View>\n      <Text style={styles.header}>Showing details for {item}</Text>\n      <Text style={styles.body}>the number you have chosen is {item}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  header: {\n    fontSize: 20,\n    textAlign: 'center',\n    marginVertical: 16,\n  },\n  body: {\n    textAlign: 'center',\n  },\n});\n")),Object(r.b)("h3",{id:"setting-up-the-test-environment"},"Setting up the test environment"),Object(r.b)("p",null,"Install required dev dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D jest @testing-library/react-native\n")),Object(r.b)("p",null,"Create your ",Object(r.b)("inlineCode",{parentName:"p"},"jest.config.js")," file (or place the following properties in your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),' as a "jest" property)'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  preset: 'react-native',\n  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],\n  transformIgnorePatterns: [\n    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',\n  ],\n};\n")),Object(r.b)("p",null,"Notice the 2 entries that don't come with the default React Native project:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setupFiles")," \u2013 an array of files that Jest is going to execute before running your tests. In this case, we run ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-gesture-handler/jestSetup.js")," which sets up necessary mocks for ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-gesture-handler")," native module"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transformIgnorePatterns")," \u2013 an array of paths that Jest ignores when transforming code. In this case, the negative lookahead regular expression is used, to tell Jest to transform (with Babel) every package inside ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules/")," that starts with ",Object(r.b)("inlineCode",{parentName:"li"},"react-native"),", ",Object(r.b)("inlineCode",{parentName:"li"},"@react-native-community")," or ",Object(r.b)("inlineCode",{parentName:"li"},"@react-navigation")," (added by us, the rest is in ",Object(r.b)("inlineCode",{parentName:"li"},"react-native")," preset by default, so you don't have to worry about it).")),Object(r.b)("h3",{id:"example-tests"},"Example tests"),Object(r.b)("p",null,"For this example, we are going to test out two things. The first thing is that the page is laid out as expected. The second, and most important, is that the page will transition to the detail screen when any item is tapped on."),Object(r.b)("p",null,"Let's add a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/__tests__/AppNavigator.js"}),Object(r.b)("inlineCode",{parentName:"a"},"AppNavigator.test.js"))," file in ",Object(r.b)("inlineCode",{parentName:"p"},"src/__tests__")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { render, screen, fireEvent } from '@testing-library/react-native';\n\nimport AppNavigator from '../AppNavigator';\n\n// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420\n// Use with React Native <= 0.63\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n\n// Use this instead with React Native >= 0.64\n// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');\n\ndescribe('Testing react navigation', () => {\n  test('page contains the header and 10 items', async () => {\n    const component = (\n      <NavigationContainer>\n        <AppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n\n    const header = await screen.findByText('List of numbers from 1 to 20');\n    const items = await screen.findAllByText(/Item number/);\n\n    expect(header).toBeTruthy();\n    expect(items.length).toBe(10);\n  });\n\n  test('clicking on one item takes you to the details screen', async () => {\n    const component = (\n      <NavigationContainer>\n        <AppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const toClick = await screen.findByText('Item number 5');\n\n    fireEvent(toClick, 'press');\n    const newHeader = await screen.findByText('Showing details for 5');\n    const newBody = await screen.findByText('the number you have chosen is 5');\n\n    expect(newHeader).toBeTruthy();\n    expect(newBody).toBeTruthy();\n  });\n});\n")),Object(r.b)("h2",{id:"drawer-navigator"},"Drawer Navigator"),Object(r.b)("p",null,"Testing the Drawer Navigation requires an additional setup step for mocking the Reanimated library."),Object(r.b)("h3",{id:"setting-up-1"},"Setting up"),Object(r.b)("p",null,"Install the packages required for React Navigation. For this example, we will use a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/drawer-navigator/"}),"drawer navigator")," to transition between a home screen and an additional screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add @react-native-community/masked-view @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens\n")),Object(r.b)("p",null,"Create a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/DrawerAppNavigator.js"}),Object(r.b)("inlineCode",{parentName:"a"},"./DrawerAppNavigator.js"))," component which will list the navigation stack:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import 'react-native-gesture-handler';\nimport React from 'react';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\nconst { Screen, Navigator } = createDrawerNavigator();\n\nexport default function Navigation() {\n  return (\n    <Navigator>\n      <Screen name=\"Home\" component={HomeScreen} />\n      <Screen name=\"Notifications\" component={NotificationsScreen} />\n    </Navigator>\n  );\n}\n")),Object(r.b)("p",null,"Create your two screens which we will transition to and from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Welcome!</Text>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>This is the notifications screen</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n")),Object(r.b)("h3",{id:"setting-up-the-test-environment-1"},"Setting up the test environment"),Object(r.b)("p",null,"Install required dev dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D jest @testing-library/react-native\n")),Object(r.b)("p",null,"Create a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/jest-setup.js"}),Object(r.b)("inlineCode",{parentName:"a"},"mock file"))," necessary for your tests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import 'react-native-gesture-handler/jestSetup';\n\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n")),Object(r.b)("p",null,"Create your ",Object(r.b)("inlineCode",{parentName:"p"},"jest.config.js")," file (or place the following properties in your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),' as a "jest" property)'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  preset: 'react-native',\n  setupFiles: ['./jest-setup.js'],\n  transformIgnorePatterns: [\n    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',\n  ],\n};\n")),Object(r.b)("p",null,"Make sure that the path to the file in ",Object(r.b)("inlineCode",{parentName:"p"},"setupFiles")," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."),Object(r.b)("p",null,"This setup is copied from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/testing/"}),"React Navigation documentation"),"."),Object(r.b)("h3",{id:"example-tests-1"},"Example tests"),Object(r.b)("p",null,"For this example, we are going to test out two things. The first thing is that the screen is loaded correctly. The second, and most important, is that the page will transition to the notifications screen when the button is tapped on."),Object(r.b)("p",null,"Let's add a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library/blob/main/examples/reactnavigation/src/__tests__/DrawerAppNavigator.js"}),Object(r.b)("inlineCode",{parentName:"a"},"DrawerAppNavigator.test.js"))," file in ",Object(r.b)("inlineCode",{parentName:"p"},"src/__tests__")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { render, screen, fireEvent } from '@testing-library/react-native';\n\nimport DrawerAppNavigator from '../DrawerAppNavigator';\n\ndescribe('Testing react navigation', () => {\n  test('screen contains a button linking to the notifications page', async () => {\n    const component = (\n      <NavigationContainer>\n        <DrawerAppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const button = await screen.findByText('Go to notifications');\n\n    expect(button).toBeTruthy();\n  });\n\n  test('clicking on the button takes you to the notifications screen', async () => {\n    const component = (\n      <NavigationContainer>\n        <DrawerAppNavigator />\n      </NavigationContainer>\n    );\n\n    render(component);\n    const oldScreen = screen.queryByText('Welcome!');\n    const button = await screen.findByText('Go to notifications');\n\n    expect(oldScreen).toBeTruthy();\n\n    fireEvent(button, 'press');\n    const newScreen = await screen.findByText('This is the notifications screen');\n\n    expect(newScreen).toBeTruthy();\n  });\n});\n")),Object(r.b)("h2",{id:"running-tests"},"Running tests"),Object(r.b)("p",null,"To run the tests, place a test script inside your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')),Object(r.b)("p",null,"And run the ",Object(r.b)("inlineCode",{parentName:"p"},"test")," script with ",Object(r.b)("inlineCode",{parentName:"p"},"npm test")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn test"),"."))}p.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);