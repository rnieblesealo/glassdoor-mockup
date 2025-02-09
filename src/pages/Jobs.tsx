import clsx from "clsx"

import { FaSearch, FaStar } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { FaBookmark } from "react-icons/fa";
import { TbBrandAirbnb } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

import JobListing from "../components/JobListing"
import NavbarItem from "../components/NavbarItem"

export default function Jobs() {
  const main = clsx(
    "w-screen",
    "h-min-content",

    "bg-[#3ca370]",

    "flex",
    "flex-col",
    "items-center",

    "gap-[20px]",
  )

  const navbar = clsx(
    "w-full",
    "h-[60px]",

    "bg-[#272736]",

    "flex",
    "items-center",
    "justify-left",

    "pl-[20px]",
    "pr-[20px]",
  )

  const heading = clsx(
    "font-work",
    "font-[600]",

    "text-[1.7rem]",
    "text-[#ffffeb]"
  )

  const text = clsx(
    "font-[400]",
    "font-[1rem]",
    "font-work",

    "text-[#ffffeb]",
    "text-[1rem]",
  )

  const dimtext = clsx(
    "font-[400]",
    "font-[1rem]",
    "font-work",

    "text-[#7e7e8f]",
    "text-[1rem]",
  )

  const searchbar = clsx(
    "w-[70%]",
    "h-[40px]",

    "bg-[#272736]",

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

      !isFirst && ["border-l", "border-l-[#7e7e8f]", "pl-[15px]"], // will apply if isFirst is true

      "flex",
      "items-center",
      "justify-left",

      "gap-[10px]"
    )
  }

  const uploadresume = clsx(
    "flex",
    "items-center",
    "justify-left",

    "text-black",
    "font-bold",

    "gap-[10px]",
    "p-[5px]",
    "bg-[#ffe478]",
    "rounded-[8px]",

    "shadow-[0px_0px_20px_#ffe47890]",
  )

  const navbarcontainer = clsx(
    "flex flex-row gap-[40px]"
  )

  const jobs = clsx(
    "bg-[#272736] h-min-content w-[80%] flex flex-row rounded-[12px] p-[10px] gap-[10px]"
  )

  const listings = clsx(
    "flex flex-col gap-[8px] w-[35%] h-full"
  )

  const descriptioncontainer = clsx(
    "flex w-[65%] flex-col h-min-content rounded-[8px] bg-[#ffffeb]",
    "p-[5px]",
    "gap-[20px]"
  )

  return (
    <>
      <div className={main}>
        <div className={`${navbar} gap-[30px]`}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Glassdoor_Logo_2023.svg" className="w-[150px] fill-white" />
          <nav>
            <ul className="flex flex-row gap-[30px] text-white">
              <li>Community</li>
              <li>Jobs</li>
              <li>Companies</li>
              <li>Salaries</li>
            </ul>
          </nav>
          <span className="ml-auto text-white flex flex-row gap-[8px] items-center"><FaSearch />Search</span>
          <span className="text-white text-[20px] flex flex-row gap-[8px] items-center"><FaBell /></span>
          <span className="text-white text-[20px] flex flex-row gap-[8px] items-center"><IoPersonCircleSharp /></span>

        </div>

        <div className={searchbar}>
          <div className={subsearch(true, "w-[100%]")}>
            <FaSearch color="#7e7e8f" />
            <span className={dimtext}>Find your perfect job</span>
          </div>
          <div className={subsearch(false, "w-[60%]")}>
            <FaLocationDot color="#7e7e8f" />
            <span className={dimtext}>Location</span>
          </div>
        </div>

        <span className={`${text} ${uploadresume}`}><FaBoltLightning />Upload your resume - let employers find you!</span>

        <div className={navbarcontainer}>
          <NavbarItem text="For You" icon={<IoSparkles />} />
          <NavbarItem text="Search" />
          <NavbarItem text="Your Activity" />
        </div>

        <div className={jobs}>
          <div className={listings}>
            <JobListing
              companyName="Apple"
              jobTitle="Senior Software Engineer"
              rating={4.5}
              location="Cupertino, CA"
              salaryInfo="90 - 300k"
              since="12d"
              color="white"
              fontColor="black"
              icon={<IoLogoApple />}
            />
            <JobListing
              companyName="Netflix"
              jobTitle="Project Manager"
              rating={4.3}
              location="San Diego, CA"
              salaryInfo="110- 250k"
              since="16d"
              color="red"
              fontColor="white"
              icon={<SiNetflix />}
            />
            <JobListing
              companyName="Amazon"
              jobTitle="Delivery Driver"
              rating={3.9}
              location="Orlando, FL"
              salaryInfo="10 - 30k"
              since="12d"
              color="orange"
              fontColor="black"
              icon={<FaAmazon />}
            />
            <JobListing
              companyName="Twitter"
              jobTitle="Data Science Intern"
              rating={4.5}
              location="Las Vegas, NV"
              salaryInfo="110- 250k"
              since="126d"
              color="blue"
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
              color="green"
              fontColor="white"
              icon={<FaSpotify />}
            />
            <JobListing
              companyName="Airbnb"
              jobTitle="Junior Software Engineer"
              rating={4.9}
              location="Miami, FL"
              salaryInfo="100 - 200k"
              since="2h"
              color="pink"
              fontColor="black"
              icon={<TbBrandAirbnb />}
            />
          </div>
          <div className={descriptioncontainer}>

            <div className="flex flex-row items-center border-b-[2px] h-min-content">

              <div className={"flex flex-col"}>
                <div className="flex flex-row gap-[5px] items-center">
                  <span>Apple</span>
                  <span className={"flex items-center gap-[3px]"}>4.5<FaStar /></span>
                </div>
                <span className={`${heading} text-black w-full h-[min-content]`}>Senior Software Engineer</span>
                <span className={`${text} text-black w-full h-[min-content]`}>Cupertino, CA • $90k - $300k</span>
              </div>

              <div className={"flex flex-row items-center self-start ml-auto gap-[5px]"}>
                <div className={"bg-[rgba(0,0,0,0.2)] flex items-center justify-center aspect-[1/1] h-[40px] p-[10px] text-black rounded-[8px] ml-auto"}>
                  <HiEllipsisHorizontal />
                </div>
                <div className={"bg-[rgba(0,0,0,0.1)] flex items-center justify-center aspect-[1/1] h-[40px] p-[10px] text-black rounded-[8px]"}>
                  <FaBookmark />
                </div>
                <div className={`${uploadresume} ${text} w-min-content h-[40px] p-[10px]`}>
                  <FaBoltLightning /> Easy Apply
                </div>
              </div>

            </div>

            <div className="flex flex-col items-left justify-left h-[200px] overflow-y-auto">
              <b>About the Job</b>
              <p>Imagine what you could do here. The people here at Apple don’t just create products — they create the kind of wonder that’s revolutionized entire industries. It’s the diversity of those people and their ideas that inspires the innovation that runs through everything we do, from amazing technology to industry-leading environmental efforts. Join Apple, and help us leave the world better than we found it.</p>
              <p>The Data Solutions and Initiatives (DSI) team supports Apple’s business leaders as they project, manage, and report on business performance. We do this by driving vast improvements for our customers, experiences that delight, platforms that scale to meet the demands of the business, tools that provide crucial productivity and insights.</p>
            </div>

            <p><b className="flex flex-row items-center"><MdKeyboardArrowDown />Show More</b></p>

            <span className={`${heading} text-black w-full h-[min-content]`}>Base pay range</span>

            <div className="bg-[rgba(0,0,0,0.1)] w-full h-min-content p-[20px] rounded-[8px] flex flex-col items-left">
              <div>
                <span className={`${heading} text-black w-full h-[min-content]`}>$90k - $300k</span>
                <span className="text text-black">/yr [Glassdoor est.]</span>
              </div>

              <span>125k/yr median</span>
              <span>Cupertino, CA</span>

            </div>

            <span className={`${heading} text-black w-full h-[min-content]`}>Company overview</span>

            <div className="grid grid-cols-2">

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Size</b>
                <span className="">51 to 200 employees</span>
              </div>

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Founded</b>
                <span className="">2018</span>
              </div>

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Type</b>
                <span className="">For-profit organization</span>
              </div>

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Industry </b>
                <span className="">Technology and Hardware</span>
              </div>

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Sector</b>
                <span className="">Technology</span>
              </div>

              <div className="w-full flex p-[20px]">
                <b className="w-[30%]">Revenue</b>
                <span className="">$1bn - 2bn/yr</span>
              </div>

            </div>

            <span className={`${heading} text-black w-full h-[min-content]`}>Reviews</span>

            <div className="grid grid-cols-2 gap-[10px]">

              <div className="flex flex-col w-full items-center">
                <div className={`text-white font-bold text-[20px] flex justify-center items-center bg-green-500 w-full rounded-[8px] p-[5px]`}>
                  Pros
                </div>

                <div className="bg-[rgba(0,0,0,0.1)] w-[90%] p-[8px]">
                  <ul>
                    <li>Very caring</li>
                    <li>Good benefits</li>
                    <li>Paid leave</li>
                  </ul>
                </div>

              </div>

              <div className="flex flex-col w-full items-center">
                <div className={`text-white font-bold text-[20px] flex justify-center items-center bg-red-500 w-full rounded-[8px] p-[5px]`}>
                  Cons
                </div>

                <div className="bg-[rgba(0,0,0,0.1)] w-[90%] p-[8px]">
                  <ul>
                    <li>Tend to overwork employees</li>
                    <li>Tough commute</li>
                    <li>Restrictive non-disclosure agreemeents</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
