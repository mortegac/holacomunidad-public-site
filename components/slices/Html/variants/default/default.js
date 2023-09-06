import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, Button } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";
import { generateHtml } from "../../../../../utils/htmlSerializer";



const Base = slice => {
  const { title, html } = slice.primary;

  return (
    <Content>
      {console.log("--HTMl--", slice)}
      <Description>
        {title[0]?.text ? RichText.render(title) : <></>}

        <div id="htmlContainer">
          {generateHtml(html)}
        </div>
      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {}
  }
});
