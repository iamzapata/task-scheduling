type RequestAnimationFrameCallback = typeof window.requestAnimationFrame

type SetTimeoutCallback = typeof window.setTimeout

type QueMicrotaskCallback = typeof window.queueMicrotask

type Callback =
  | RequestAnimationFrameCallback
  | SetTimeoutCallback
  | QueMicrotaskCallback

export function moveForward(
  element: HTMLElement,
  schedulingCallback: Callback,
  x = 0
) {
  const clientWidth = document.documentElement.clientWidth

  element.style.left = `${x}px`
  const nextX = x >= clientWidth ? 0 : x + 1
  schedulingCallback(() => moveForward(element, schedulingCallback, nextX))
}
