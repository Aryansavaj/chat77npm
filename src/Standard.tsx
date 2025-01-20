import type { BotProps } from "@chat77npm/js";
import type React from "react";
import { useEffect, useRef } from "react";
import "@chat77npm/js/web";

type Props = BotProps & {
  style?: React.CSSProperties;
  className?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chat77submodule-standard": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string };
    }
  }
}

type StandardElement = HTMLElement & Props;

export const Standard = ({ style, className, ...assignableProps }: Props) => {
  const ref = useRef<StandardElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    Object.assign(ref.current, assignableProps);
  }, [assignableProps]);

  return <chat77submodule-standard ref={ref} style={style} class={className} />;
};

export default Standard;
