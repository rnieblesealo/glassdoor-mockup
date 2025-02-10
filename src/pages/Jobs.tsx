import clsx from "clsx"

import { FaSearch, FaStar } from "react-icons/fa"
import { FaEllipsis, FaLocationDot } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { TbBrandAirbnb } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

import JobListing from "../components/JobListing"

export default function JobsPage() {
  const main = clsx(
    "w-screen",
    "h-min-content",

    "bg-gradient-to-b",
    "from-black",
    "to-green",

    "flex",
    "flex-col",
    "items-center",

    "gap-[20px]",
  )

  const navbar = clsx(
    "w-full",
    "h-[60px]",

    "bg-black",

    "flex",
    "items-center",
    "justify-left",

    "pl-[20px]",
    "pr-[20px]",
  )

  const heading = clsx(
    "font-[600]",
    "font-work",

    "text-[1.7rem]",
  )

  const text = clsx(
    "font-[400]",
    "font-work",

    "text-[1rem]",
  )

  const dimtext = clsx(
    "font-[400]",
    "font-[1rem]",
    "font-work",

    "text-gray",
    "text-[1rem]",
  )

  const searchbar = clsx(
    "w-[60%]",
    "h-[40px]",

    "bg-black",

    "text-center",

    "flex",
    "justify-left",
    "items-center",

    "rounded-[8px]",

    "gap-[10px]",

    "pl-[15px]",
    "pr-[15px]"
  )

  const subsearch = (isFirst: boolean = false, width: string = "w-full") => {
    return clsx(
      width,
      "h-full",

      !isFirst && ["border-l", "border-l-gray", "pl-[15px]"], // will apply if isFirst is true

      "flex",
      "items-center",
      "justify-left",

      "gap-[10px]"
    )
  }

  const uploadresume = clsx(
    "bg-yellow",

    "flex",
    "items-center",
    "justify-left",

    "text-black",
    "font-bold",

    "rounded-[8px]",
    "gap-[10px]",
    "p-[5px]",

    "shadow-[0px_0px_20px]",
    "shadow-yellow"
  )

  const navbarcontainer = clsx(
    "flex flex-row gap-[40px]"
  )

  const jobs = clsx(
    "bg-black h-min-content w-[80%] flex flex-row rounded-[12px] p-[10px] gap-[10px]",
    "shadow-[0px_0px_50px]",
    "shadow-[rgba(0,0,0,0.4)]"
  )

  const listings = clsx(
    "flex flex-col gap-[8px] w-[35%] h-full"
  )

  const description_container = clsx(
    "flex w-[65%] flex-col h-min-content rounded-[8px] bg-white",
    "p-[20px]",
    "gap-[20px]",
  )

  function JobTitle() {
    return (
      <div className={"flex flex-col"}>
        <div className="flex flex-row gap-[5px] items-center">
          <span>Apple</span>
          <span className={"flex items-center gap-[3px]"}>4.5<FaStar /></span>
        </div>
        <span className={`${heading} w-full h-[min-content]`}>Senior Software Engineer</span>
        <span className={`${text} black w-full h-[min-content]`}>Cupertino, CA • $90k - $300k</span>
      </div>
    )
  }

  interface JobActionButtonProps {
    icon?: React.ReactNode
  }

  function JobActionButton({ icon }: JobActionButtonProps) {
    return (
      <div className={"bg-gray flex items-center justify-center aspect-[1/1] h-[40px] p-[10px] text-black rounded-[8px] ml-auto"}>
        {icon}
      </div>
    )
  }

  function EasyApplyButton() {
    return (
      <div className={`${uploadresume} ${text} w-min-content h-[40px] p-[10px]`}>
        <FaBoltLightning /> Easy Apply
      </div>
    )
  }

  function JobActions() {
    return (
      <div className={"flex flex-row items-center self-start ml-auto gap-[5px]"}>
        <JobActionButton icon={<FaEllipsis />} />
        <JobActionButton icon={<FaBookmark />} />
        <EasyApplyButton />
      </div>

    )
  }

  function JobHeading() {
    return (
      <div className="flex flex-row items-center border-b border-b-gray pb-[15px] h-min-content">
        <JobTitle />
        <JobActions />
      </div>
    )
  }

  function JobDescription() {
    return (
      <>
        <div className="flex flex-col items-left justify-left h-[200px] overflow-y-auto border-b border-b-gray"> <b>About the Job</b>
          <p>Imagine what you could do here. The people here at Apple don’t just create products — they create the kind of wonder that’s revolutionized entire industries. It’s the diversity of those people and their ideas that inspires the innovation that runs through everything we do, from amazing technology to industry-leading environmental efforts. Join Apple, and help us leave the world better than we found it.</p>
          <p>The Data Solutions and Initiatives (DSI) team supports Apple’s business leaders as they project, manage, and report on business performance. We do this by driving vast improvements for our customers, experiences that delight, platforms that scale to meet the demands of the business, tools that provide crucial productivity and insights.</p>
        </div>
        <p><b className="flex flex-row items-center"><MdKeyboardArrowDown />Show More</b></p>
      </>
    )
  }

  function PayInfo() {
    return (
      <>
        <span className={`${heading} text-black w-full h-[min-content]`}>Base pay range</span>
        <div className="bg-gray w-full h-min-content p-[20px] rounded-[8px] flex flex-col items-left">
          <div>
            <span className={`${heading} text-black w-full h-[min-content]`}>$90k - $300k</span>
            <span className="text text-black">/yr [Glassdoor est.]</span>
          </div>
          <span>125k/yr median</span>
          <span>Cupertino, CA</span>
        </div>
      </>
    )
  }

  interface CompanyOverviewEntryProps {
    name: string,
    info: string
  }

  function CompanyOverviewEntry({ name, info }: CompanyOverviewEntryProps) {
    return (
      <div className="w-full flex pb-[10px]">
        <b className="w-[30%]">{name}</b>
        <span className="">{info}</span>
      </div>
    )
  }

  interface CompanyOverviewProps {
    children?: React.ReactNode
  }

  function CompanyOverview({ children }: CompanyOverviewProps) {
    return (
      <>
        <span className={`${heading} text-black w-full h-[min-content]`}>Company overview</span>
        <div className="grid grid-cols-2 p-[5px]">
          {children}
        </div>
      </>
    )
  }

  interface ReviewProps {
    pros?: string[],
    cons?: string[]
  }

  function Reviews({ pros, cons }: ReviewProps) {
    const proListItems = pros?.map((pro) => {
      return (
        <li>{pro}</li>
      )
    })

    const conListItems = cons?.map((con) => {
      return (
        <li>{con}</li>
      )
    })

    return (
      <>
        <span className={`${heading} text-black w-full h-[min-content]`}>Reviews</span>
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="flex flex-col w-full items-center">
            <div className={`text-white font-bold text-[20px] flex justify-center items-center bg-green w-full rounded-[8px] p-[5px] z-10`}>
              Pros
            </div>
            <div className="bg-gray w-[90%] p-[8px] rounded-[8px] mt-[-5px]">
              <ul className="list-disc list-inside">
                {proListItems ?? "None listed..."}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className={`text-white font-bold text-[20px] flex justify-center items-center bg-red w-full rounded-[8px] p-[5px] z-10`}>
              Cons
            </div>
            <div className="bg-gray w-[90%] p-[8px] rounded-[8px] mt-[-5px]">
              <ul className="list-disc list-inside">
                {conListItems ?? "None listed..."}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }

  interface NavbarButtonProps {
    text: string
  }

  function NavbarButton({ text }: NavbarButtonProps) {
    return (
      <li className="border-b border-[rgba(0,0,0,0)] hover:border-white">{text}</li>
    )
  }

  interface NavbarProps {
    children?: React.ReactNode
  }

  function Navbar({ children }: NavbarProps) {
    return (
      <div className={`${navbar} gap-[30px]`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Glassdoor_Logo_2023.svg" className="w-[150px] fill-white" />
        <nav>
          <ul className="flex flex-row gap-[30px] text-white">
            {children}
          </ul>
        </nav>
        <span className="ml-auto text-white flex flex-row gap-[8px] items-center"><FaSearch />Search</span>
        <span className="text-white text-[20px] flex flex-row gap-[8px] items-center"><FaBell /></span>
        <span className="text-white text-[20px] flex flex-row gap-[8px] items-center"><IoPersonCircleSharp /></span>
      </div>
    )
  }

  function Searchbar() {
    return (
      <div className={searchbar}>
        <div className={subsearch(true, "w-[100%] text-gray")}>
          <FaSearch />
          <span className={dimtext}>Find your perfect job</span>
        </div>
        <div className={subsearch(false, "w-[60%] text-gray")}>
          <FaLocationDot />
          <span className={dimtext}>Location</span>
        </div>
      </div>
    )
  }

  function UploadResumeButton() {
    return (
      <span className={`${text} ${uploadresume}`}><FaBoltLightning />Upload your resume - let employers find you!</span>
    )
  }

  interface JobsBrowserProps {
    children?: React.ReactNode
  }


  function JobsBrowser({ children }: JobsBrowserProps) {
    return (
      <div className={navbarcontainer}>
        {children}
      </div>
    )
  }

  interface JobsBrowserButtonProps {
    text: string
    icon?: React.ReactNode
  }

  function JobsBrowserButton({ text, icon }: JobsBrowserButtonProps) {
    const main = clsx(
      "border-[rgba(0,0,0,0)] border-b-[3px] hover:border-white pl-[12px] pr-[12px]"
    )

    const name = clsx(
      "font-bold flex flex-row items-center gap-[8px]",

      "font-[400]",
      "font-[1rem]",
      "font-work",

      "text-[#ffffeb]",
      "text-[1rem]",
    )

    function content() {
      // give back span with icon if given
      if (icon) {
        return (
          <span className={name}>{icon}{text}</span>
        )
      } else {
        return (
          <span className={name}>{text}</span>
        )
      }
    }

    return (
      <div className={main}>
        <span className={name}>{content()}</span>
      </div>
    )
  }

  interface GeneralJobProps {
    children?: React.ReactNode
  }

  function Jobs({ children }: GeneralJobProps) {
    return (
      <div className={jobs}>
        {children}
      </div>
    )
  }

  function JobListings({ children }: GeneralJobProps) {
    return (
      <div className={listings}>
        {children}
      </div>
    )
  }

  function JobInfo({ children }: GeneralJobProps) {
    return (
      <div className={description_container}>
        {children}
      </div>
    )
  }

  return (
    <>
      <div className={main}>
        <Navbar>
          <NavbarButton text="Community" />
          <NavbarButton text="Jobs" />
          <NavbarButton text="Companies" />
          <NavbarButton text="Salaries" />
        </Navbar>
        <Searchbar />
        <UploadResumeButton />
        <JobsBrowser>
          <JobsBrowserButton text="For You" icon={<IoSparkles />} />
          <JobsBrowserButton text="Search" />
          <JobsBrowserButton text="Your Activity" />
        </JobsBrowser>
        <Jobs>
          <JobListings>
            <JobListing
              companyName="Apple"
              jobTitle="Senior Software Engineer"
              rating={4.5}
              location="Cupertino, CA"
              salaryInfo="90 - 300k"
              since="12d"
              color="#ffffff"
              fontColor="10121c"
              icon={<IoLogoApple />}
            />
            <JobListing
              companyName="Netflix"
              jobTitle="Project Manager"
              rating={4.3}
              location="San Diego, CA"
              salaryInfo="110- 250k"
              since="16d"
              color="#ac2847"
              fontColor="#ffffff"
              icon={<SiNetflix />}
            />
            <JobListing
              companyName="Amazon"
              jobTitle="Delivery Driver"
              rating={3.9}
              location="Orlando, FL"
              salaryInfo="10 - 30k"
              since="12d"
              color="#f3a833"
              fontColor="10121c"
              icon={<FaAmazon />}
            />
            <JobListing
              companyName="Twitter"
              jobTitle="Data Science Intern"
              rating={4.5}
              location="Las Vegas, NV"
              salaryInfo="110- 250k"
              since="126d"
              color="#3388de"
              fontColor="white"
              icon={<FaTwitter />}
            />
            <JobListing
              companyName="Spotify"
              jobTitle="Playlist Curator"
              rating={3.7}
              location="New York, NY"
              salaryInfo="30 - 60k"
              since="1d"
              color="#26854c"
              fontColor="#10121c"
              icon={<FaSpotify />}
            />
            <JobListing
              companyName="Airbnb"
              jobTitle="Junior Software Engineer"
              rating={4.9}
              location="Miami, FL"
              salaryInfo="100 - 200k"
              since="2h"
              color="#fa6e79"
              fontColor="#10121c"
              icon={<TbBrandAirbnb />}
            />
          </JobListings>
          <JobInfo>
            <JobHeading />
            <JobDescription />
            <PayInfo />
            <CompanyOverview>
              <CompanyOverviewEntry name="Size" info="1,000-10,000 employees" />
              <CompanyOverviewEntry name="Founded" info="2018" />
              <CompanyOverviewEntry name="Type" info="For-profit organization" />
              <CompanyOverviewEntry name="Industry" info="Technology and Hardware" />
              <CompanyOverviewEntry name="Sector" info="Technology" />
            </CompanyOverview>
            <Reviews
              pros={[
                "Friendly coworkers",
                "Reasonable hours",
                "Good company culture"
              ]}
              cons={[
                "Unrealistic management",
                "Expensive amenities",
                "Mediocre benefits"
              ]}
            />
          </JobInfo>
        </Jobs>
      </div>
    </>
  )
}
