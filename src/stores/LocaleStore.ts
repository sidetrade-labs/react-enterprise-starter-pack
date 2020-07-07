import { observable, action, autorun } from "mobx"

export interface ILocale {
  locale: string
}

class LocaleStore implements ILocale {
  @observable locale: string

  constructor() {
    this.locale = ""

    autorun(() => {
      this.setLocale(navigator.language.split(/[-_]/)[0])
    })
  }

  @action
  setLocale(locale: string) {
    this.locale = locale
  }
}

export default LocaleStore
