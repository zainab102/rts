import { photoSrc } from "@/lib/photos";
import type { ImgHTMLAttributes } from "react";

type PhotoProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

export function Photo({ src, alt = "", ...props }: PhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={photoSrc(src)} alt={alt} {...props} />
  );
}
