import { Anton } from "next/font/google";

const anton = Anton({weight: ['400'], subsets: ["latin"]});

interface TitleProps {
    title: string;
    alt?: boolean;
}

const Title = ({title, alt}: TitleProps) => {
  return (
    <h2 className={`max-w-[1400px] w-[90vw] mx-auto text-6xl my-6 font-semibold ${alt ? 'text-white' : 'text-black'} ${anton.className}`}>{`${title}.`}</h2>
  )
}

export default Title