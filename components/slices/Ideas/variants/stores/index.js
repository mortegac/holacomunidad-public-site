import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, StoresSection } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

const Base = slice => {
  const { tittle, subtittle } = slice.primary;

  return (
    <Content>
      {console.log("--primary?.android?.url--", JSON.stringify(slice.primary))}
      {console.log("--slice--", slice)}
      <Description>
        {subtittle[0]?.text ? RichText.render(subtittle) : <></>}
        {tittle[0]?.text ? RichText.render(tittle) : <></>}
        <StoresSection>
          <a href={slice.primary?.androidstore?.url}>
            <img style={{ width: "50%", }} src={slice.primary?.android?.url || "#"} alt="Play Store" className="img" />
          </a>
          <a href={slice.primary?.iostore?.url}>
            <img style={{ width: "50%" }} src={slice.primary?.ios?.url || "#"} alt="Play Store" className="img" />
          </a>
        </StoresSection>
      </Description>
    </Content>
  );
};

export const Stores = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: "linear-gradient(188deg, #F3DDCC, #F3DDCC 65% )"
    }
  }
});
