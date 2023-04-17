import { SwitchTheme } from "./SwitchTheme/SwitchTheme";
import { ButtonAddItem } from "./ButtonAddItem";
import { Pagination } from "./Pagination";

const Footer = () => {
  return (
    <div>
      <ButtonAddItem />
      <SwitchTheme />
      <Pagination />
    </div>
  )
}

export { Footer };