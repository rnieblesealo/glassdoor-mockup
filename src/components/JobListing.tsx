import clsx from "clsx"

import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";

interface JobListingProps {
  companyName: string,
  jobTitle: string
  rating: number,
  location: string,
  salaryInfo: string,
  since: string,
  icon?: React.ReactNode,
  color?: string,
  fontColor?: string
}

export default function JobListing({ companyName, jobTitle, rating, location, salaryInfo, since, icon, color, fontColor }: JobListingProps) {
  const main = clsx(
    "w-full h-min-content bg-red-500 rounded-[8px]",
    "p-[5px]",
    
    "gap-[3px]",

    "flex",
    "flex-col"
  )

  const heading = clsx(
    "font-work",
    "font-bold",

    "text-[1rem]",
  )

  const text = clsx(
    "font-work",
    "font-medium",

    "text-[0.7rem]",

    // Position icons correctly
    "flex",
    "items-center",
    "gap-[5px]"
  )

  const fadedtext = clsx(
    text,

    // Only used for footer, align to end
    "justify-end"
  )

  const largerIcon = clsx(
    "text-[25px]",
  )

  const subcontainer = clsx(
    "flex flex-row items-center gap-[5px]"
  )

  interface ColorSpanProps {
    children?: React.ReactNode
    className?: string
    color?: string
  }

  function ColorSpan({ children, className, color }: ColorSpanProps) {
    return (
      <span className={className} style={{ color: color ?? "white" }}>{children}</span>
    )
  }

  return (
    <div className={main} style={{ backgroundColor: color }}>
      <div className={subcontainer}>
        <ColorSpan className={largerIcon} color={fontColor}>{icon}</ColorSpan>
        <ColorSpan className={text} color={fontColor}>{companyName}</ColorSpan>
        <ColorSpan className={`${text} ml-auto`} color={fontColor}><IoStar />{rating.toFixed(1)}</ColorSpan>
      </div>
      <ColorSpan className={heading} color={fontColor}>{jobTitle}</ColorSpan>
      <ColorSpan className={text} color={fontColor}><FaLocationDot />{location}</ColorSpan>
      <div className={subcontainer}>
        <ColorSpan className={text} color={fontColor}><RiMoneyDollarBoxFill />{`${salaryInfo} [Glassdoor est.]`}</ColorSpan>
        <ColorSpan className={`${fadedtext} ml-auto`} color={fontColor}>{since}</ColorSpan>
      </div>
    </div >
  )
}
