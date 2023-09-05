import { Default, NoButton, noButtonNobg, Stores } from "./variants";

export const IdeasSlice = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["noButton"]: NoButton,
    ["store"]: Stores,
    ["noButtonNobg"]: noButtonNobg,
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};