import { SliceFactory } from "../../../../common/Containers";
import { Description, Container, ImgContent, ImgHolder } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";


const Base = (props) => {
  const { description, imgswapp, title, subtitle, projects, imageapplestore } = props.primary;


  return (
    <Container>
      <ImgContent>
        <picture>
          <source srcSet={imgswapp.url} media="(max-width: 500px)" />
          <img src={imgswapp.url} alt="project image" />
        </picture>
      </ImgContent>

      <Description>
        {description[0]?.text ? RichText.render(subtitle) : <h3>Project</h3>}
        {title[0]?.text ? RichText.render(title) : <h2>Swap Profit app</h2>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Your new exchange model for competitive gaming amongst peers where you can Swap potential Profits and earn rewards in your events.</p>
        )}
        {/* <ImgHolder>
          <picture>
            <source srcSet={projects.url} media="(max-width: 135px)" />
            <img src={projects.url} alt="google play" />
          </picture>
          <picture>
            <source srcSet={imageapplestore.url} media="(max-width: 135px)" />
            <img src={imageapplestore.url} alt="app store" />
          </picture>
        </ImgHolder> */}
      </Description>
    </Container>
  );
};

export const Default = SliceFactory(Base);