import { computed } from "mobx"
import {
  Model,
  model,
  modelAction,
  registerRootStore,
  connectReduxDevTools,
  prop
} from "mobx-keystone"

@model("modelio/Root")
export class Root extends Model({
  text: prop<string>(),
  done: prop<boolean>(),
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done
  }

  @modelAction
  setText(text: string) {
    this.text = text
  }

  @computed
  get asString() {
    return `${!this.done ? "TODO" : "DONE"} ${this.text}`
  }
}

export function createDefaultRoot() {
  return new Root({
    text: "Buy milk",
    done: false,
  })
}

export function createRootStore(): Root {
  const rootStore = createDefaultRoot()

  // Register store to trigger onAttachedToRootStore hook
  registerRootStore(rootStore)

  if (process.env.NODE_ENV === "production") {
      return rootStore
  }

  // Connect to Redux DevTools
  const remotedev = require("remotedev")
  const connection = remotedev.connectViaExtension({
      name: "Todo List Example",
  })

  connectReduxDevTools(remotedev, connection, rootStore)

  return rootStore
}
