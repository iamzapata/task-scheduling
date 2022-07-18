import { moveForward } from "./moveForward";

/**
 * Running this freezes the browser.
 * 
 */
const elementID = 'QMT-box'
const element = document.getElementById(elementID) as HTMLDivElement;
element.style.cursor = 'pointer'

element.addEventListener('click', () => {
  moveForward(document.getElementById(elementID) as HTMLDivElement, window.queueMicrotask);
})