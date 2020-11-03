/// <reference types="svelte" />

export default class Switch {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> & {
    /**
     * Specify the switch text
     * Alternatively, use the named slot "text" (e.g. <span slot="text">...</span>)
     * @default "Provide text"
     */
    text?: string;

    /**
     * Set to `true` for the switch to be selected
     * @default false
     */
    selected?: boolean;

    /**
     * Set to `true` to disable the switch
     * @default false
     */
    disabled?: boolean;

    /**
     * Set an id for the button element
     */
    id?: string;

    /**
     * Obtain a reference to the button HTML element
     * @default null
     */
    ref?: null | HTMLButtonElement;
  };

  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
