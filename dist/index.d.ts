import * as react_jsx_runtime from 'react/jsx-runtime';
import { BotProps, BubbleProps, PopupProps } from '@chat77npm/js';
import React from 'react';

type Props$2 = BotProps & {
    style?: React.CSSProperties;
    className?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "chat77submodule-standard": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
            };
        }
    }
}
declare const Standard: ({ style, className, ...assignableProps }: Props$2) => react_jsx_runtime.JSX.Element;

type Props$1 = BubbleProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "chat77submodule-bubble": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
declare const Bubble: (props: Props$1) => null;

type Props = PopupProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "chat77submodule-popup": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
            };
        }
    }
}
declare const Popup: (props: Props) => react_jsx_runtime.JSX.Element;

export { Bubble, Popup, Standard };
