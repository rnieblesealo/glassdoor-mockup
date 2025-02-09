import clsx from "clsx"

interface NavbarItemProps {
  text: string
  icon?: React.ReactNode
}

export default function NavbarItem({ text, icon }: NavbarItemProps) {
  const main = clsx(
    "border-b-[3px] pl-[12px] pr-[12px]"
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
