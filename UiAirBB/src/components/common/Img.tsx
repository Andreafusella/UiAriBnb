import { ComponentProps } from "react";

function Img({ src, alt, className }: ComponentProps<'img'>) {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default Img