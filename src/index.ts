import RNLocalize from 'react-native-localize';

/**
const en = {\
  "welcome": "Hello world",\
};\
const fr = {\
  "welcome": "Bonjour le monde",\
};\
\
const userLang = new setLang({fr,en});\
\
const welcomeText = userLang.t("welcome");
 */
export default class setLang {
  t: (e: string) => string;

  constructor(
    langFoo: { [key: string]: Object },
    ignoreEnglishVersion: boolean = false,
    showErrorIfClefNotFound: boolean = true
  ) {
    let length = 0;
    const avLang: string[] = [];
    for (let i in langFoo) {
      length++;
      avLang.push(i);
    }
    if (!length) console.error('Why are u using the package userLang ???');
    if (!langFoo.hasOwnProperty('en') && !ignoreEnglishVersion)
      console.error('English version is needed');

    let lang = RNLocalize.getLocales();
    let sysLangTab: string[] = [];

    for (let i = 0; i < lang.length; i++) {
      sysLangTab.push(lang[i].languageCode);
    }
    sysLangTab.push('en');

    let theLang: any = '';
    for (let i: number = 0; i < sysLangTab.length; i++) {
      if (avLang.indexOf(sysLangTab[i]) > -1) {
        theLang = langFoo[sysLangTab[i]];
        break;
      }
    }
    if (!theLang && length) theLang = langFoo[avLang[0]];

    this.t = (e: string) => {
      return (
        theLang[e] ??
        (showErrorIfClefNotFound
          ? console.error(`The "${e}" clef was not found`)
          : '',
        '')
      );
    };
  }
}
