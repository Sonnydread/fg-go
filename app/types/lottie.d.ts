// types/dotlottie.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          autoplay?: boolean | string;
          loop?: boolean | string;
          speed?: number | string;
          mode?: "normal" | "bounce";
          // Agrega aquí cualquier otra prop que uses
        },
        HTMLElement
      >;
    }
  }
}

export {};