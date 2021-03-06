import { MutableRefObject, RefObject } from "react";

function animateOnView(
  element: RefObject<HTMLElement> | MutableRefObject<HTMLElement | undefined>,
  animationIn: string,
  animationOut: string
) {
  let isInView = false;

  function inView() {
    const elementPosition = element.current?.getBoundingClientRect();

    if (elementPosition!.top < 400) {
      return true;
    }

    return false;
  }

  function animate() {
    // console.log("********************");
    // console.log("In View");
    // console.log(element);
    // console.log("********************");

    if (inView() && !isInView) {
      element.current?.classList.add(animationIn);
      element.current?.classList.remove(animationOut);
      console.log("IN");
      isInView = true;
    }

    if (!inView() && isInView) {
      console.log("OUT");
      element.current?.classList.add(animationOut);
      element.current?.classList.remove(animationIn);
      isInView = false;
    }
  }

  // element.current?.addEventListener("click", () => {
  //   console.log("********************");
  //   console.log(element);
  //   console.log("G");
  //   console.log("********************");
  // });

  document.addEventListener("scroll", animate);

  return animate;
}

export { animateOnView };
