import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, Button } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

const Base = slice => {
  const { tittle, subtittle, buttontext, bgColorInitial, bgColorEnd, buttonlink } = slice.primary;

  return (
    <Content>
      <Description>
        {subtittle[0]?.text ? RichText.render(subtittle) : <></>}
        {tittle[0]?.text ? RichText.render(tittle) : <></>}
        {/* <Link href={buttonlink.uid}> */}
        <Button>
          {buttontext ? buttontext : `Let's Talk`}
        </Button>
        {/* </Link> */}
      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: "linear-gradient(188deg, #F3FDEC, #88E73F 65% )"
    }
  }
});
