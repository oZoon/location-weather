import { action, makeAutoObservable, observable } from "mobx"

export class Search {
  searchText = ""

  constructor() {
    makeAutoObservable(this, {
      searchText: observable,
      set: action,
      reset: action
    })
  }

  get = () => {
    return this.searchText
  }

  set = (value: string) => {
    this.searchText = value
  }

  reset = () => {
    this.searchText = ""
  }
}

export const search = new Search()
