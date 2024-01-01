import {ImageResponse} from "next/og";
import Image from "next/image";

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Natasha Johnson, Software Engineer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export default async function DynamicImage({
    params: {message},
}: {
    params: {message: string};
}){
    const imageURL = `https://www.natashajohnson.dev/opengraph-image`
    return new ImageResponse(
        (
            <Image src={imageURL} alt={alt} width={size.width} height={size.height} style={{ objectFit: 'cover' }} />
        ),
        {
            headers: {
                'Content-Type': contentType,
            }
        }
      )
}