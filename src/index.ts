import { createStore, Store, StoreOptions } from "./Store"
import { Resource, ResourceActionOptions, ResourceOptions } from "./Resource"

export class Vapi {
  private resource: Resource

  constructor(options: ResourceOptions) {
    this.resource = new Resource(options)
    return this
  }

  get(options: ResourceActionOptions) {
    return this.add(Object.assign(options, { method: "get" }))
  }

  delete(options: ResourceActionOptions) {
    return this.add(Object.assign(options, { method: "delete" }))
  }

  post(options: ResourceActionOptions) {
    return this.add(Object.assign(options, { method: "post" }))
  }

  put(options: ResourceActionOptions) {
    return this.add(Object.assign(options, { method: "put" }))
  }

  patch(options: ResourceActionOptions) {
    return this.add(Object.assign(options, { method: "patch" }))
  }

  add(options: ResourceActionOptions): Vapi {
    this.resource.add(options)
    return this
  }

  getStore(options: StoreOptions = {}): Store {
    return createStore(this.resource, options)
  }
}

export default Vapi