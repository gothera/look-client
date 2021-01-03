import { EntitiesDataStore } from "../store/store.types"

export const createEntitiesDataStore = (): EntitiesDataStore => {
    return {
      makeup: {
        byId: [],
      },
      nails: {
        byId: [],
      },
      hair: {
        byId: [],
      },
      eyebrows: {
        byId: [],
      },
      bodyCare: {
        byId: [],
      },
      lashes: {
        byId: [],
      },
    }
  }