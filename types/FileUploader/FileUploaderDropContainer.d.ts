/// <reference types="svelte" />

type Files = string[];

export default class FileUploaderDropContainer {
  $$prop_def: svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> & {
    /**
     * Specify the accepted file types
     * @default []
     */
    accept?: string[];

    /**
     * Set to `true` to allow multiple files
     * @default false
     */
    multiple?: boolean;

    /**
     * Override the default behavior of validating uploaded files
     * The default behavior does not validate files
     * @default (files) => files
     */
    validateFiles?: (files: Files) => Files;

    /**
     * Specify the label text
     * @default "Add file"
     */
    labelText?: string;

    /**
     * Specify the `role` attribute of the drop container
     * @default "button"
     */
    role?: string;

    /**
     * Set to `true` to disable the input
     * @default false
     */
    disabled?: boolean;

    /**
     * Specify `tabindex` attribute
     * @default "0"
     */
    tabindex?: string;

    /**
     * Set an id for the input element
     */
    id?: string;

    /**
     * Specify a name attribute for the input
     * @default ""
     */
    name?: string;

    /**
     * Obtain a reference to the input HTML element
     * @default null
     */
    ref?: null | HTMLInputElement;
  };

  $$slot_def: {};

  $on(eventname: "dragover", cb: (event: WindowEventMap["dragover"]) => void): () => void;
  $on(eventname: "dragleave", cb: (event: WindowEventMap["dragleave"]) => void): () => void;
  $on(eventname: "drop", cb: (event: WindowEventMap["drop"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "add", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
