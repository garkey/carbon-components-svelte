/// <reference types="svelte" />

export default class CodeSnippetSkeleton {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> & {
    /**
     * Set the type of code snippet
     * @default "single"
     */
    type?: "single" | "inline" | "multi";
  };

  $$slot_def: {};

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseleave", cb: (event: WindowEventMap["mouseleave"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
