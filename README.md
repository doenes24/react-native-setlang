# How to install
`yarn add react-native-setlang`  
or  
`npm i react-native-setlang` 
# How it works
So simply.
###### translate.ts
```typescript
import setLang from 'react-native-setlang';

const en = {
  "welcome": "Hello world",
};
const fr = {
  "welcome": "Bonjour le monde",
};

export default new setLang({fr,en});
```
###### App.tsx
```typescript
import userLang from './translate';

const welcomeText = userLang.t("welcome");

console.log(welcomeText);
// 'Hello world' or 'Bonjour le monde'
```
## If user has no language preference ?
No problem :), if user has not language preference, SetLang will chooses the english version of your Objects. If you do not have an english version, it will choose the first one of your Object you setted in `new setLang({fr,en})`.
## If user has those preference: "en", "fr". And I just have a translation for "es" ?
No choice, SetLang will uses es version.