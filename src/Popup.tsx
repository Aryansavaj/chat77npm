import type { PopupProps } from "@chat77npm/js";
import type React from "react";
import { useCallback, useEffect, useRef } from "react";
import "@chat77npm/js/web";

type Props = PopupProps;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chat77submodule-popup": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string };
    }
  }
}

type PopupElement = HTMLElement & Props;

export const Popup = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<PopupElement | null>(null);

  const attachPopupToContainer = useCallback((props: Props) => {
    const popupElement = document.createElement(
      "chat77submodule-popup",
    ) as PopupElement;
    popupRef.current = popupElement;
    injectPropsToElement(popupRef.current, props);
    if (!containerRef.current) {
      console.warn(
        "Could not attach popup to container because containerRef.current is null",
      );
      return;
    }
    containerRef.current?.append(popupRef.current);
  }, []);

  useEffect(() => {
    if (!popupRef.current) attachPopupToContainer(props);
    injectPropsToElement(popupRef.current as PopupElement, props);
  }, [attachPopupToContainer, props]);

  useEffect(() => {
    return () => {
      popupRef.current?.remove();
      popupRef.current = null;
    };
  }, []);

  const injectPropsToElement = (element: PopupElement, props: Props) => {
    Object.assign(element, props);
  };

  return <div ref={containerRef} />;
};

export default Popup;
