/// <reference types="svelte" />

export default class FluidForm {
  $$prop_def: {};

  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
