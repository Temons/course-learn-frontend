import { DropdownDirection } from "../../../types/ui";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionTopLeft,
  'top right': cls.optionsTopRight
}
