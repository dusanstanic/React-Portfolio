import { MutableRefObject, RefObject } from "react";

function animateOnViewChildren(
  element: RefObject<HTMLElement> | MutableRefObject<HTMLElement | undefined>,
  animationIn: string,
  animationOut: string
) {
  const elementChildren: HTMLElement[] = Array.prototype.slice.call(
    element.current?.children
  );

  let isInView = false;
  let gen: Generator<HTMLElement> | null;
  let curElement: HTMLElement;

  function inView() {
    const elementPosition = element.current?.getBoundingClientRect();

    if (elementPosition!.top < 400) {
      return true;
    }

    return false;
  }

  function* generator() {
    let delay = 0;
    for (let i = 0; i < elementChildren.length; i++) {
      yield elementChildren[i];
      console.dir(elementChildren[i].getBoundingClientRect());
      delay += 0.2;
      elementChildren[i].style.animationDelay = delay + "s";
      elementChildren[i].classList.add(animationIn);
      elementChildren[i].classList.remove(animationOut);
      console.log("After yield");
    }
  }

  function animate() {
    if (inView() && !isInView) {
      gen = generator();
      curElement = gen.next().value;

      isInView = true;
    }

    if (inView() && gen) {
      while (curElement) {
        if (curElement.getBoundingClientRect().top >= 500) {
          break;
        }

        curElement = gen.next().value;
      }
    }

    if (!inView() && isInView) {
      for (let i = 0; i < elementChildren.length; i++) {
        elementChildren[i].style.animationDelay = 0 + "s";
        elementChildren[i].classList.remove(animationIn);
        elementChildren[i].classList.add(animationOut);
      }

      gen = null;
      isInView = false;
    }
  }

  document.addEventListener("scroll", animate);

  return animate;
}

export { animateOnViewChildren };
