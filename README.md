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

## How to use it correctly ?
Make a translation repository:
```
src/
    translation/
      index.ts
      en.ts
      fr.ts
    App.tsx
```
#### Next
In your **index.ts** you write something like this:
```typescript
import en from './en';
import fr from './fr';
import setLang from 'react-native-setlang';
export default new setLang({en,fr});
```

In **en.ts** and/or **fr.ts**
```typescript
export default {
  like: 'J\'aime',
};
```
And in **App.tsx**
```typescript
import ul from './translation';
// OR
// import userLang from './translation'

const iLike = ul.t('like');
```