import { RichText } from "prismic-reactjs";
import Link from "next/link";

import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ImgHolder,
  ButtonContainer,
  ListContainer,
  ItemsContainer,
  ContentContainer,
} from "../default/defaultStyles";

const Base = (props) => {
  const { description, image, title, buttontext } = props.primary;

  return (
    <Content>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 630px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>

      <Description>
        {title[0]?.text && (
          RichText.render(title)
        )}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id
            laboriosam a dignissimos! Quo temporibus quam saepe distinctio culpa
            quisquam laborum ut repudiandae velit repellat perferendis doloribus
            odio, et dignissimos..
          </p>
        )}

        <ItemsContainer>
          {Array.isArray(props.items)
            ? props.items.map((box, index) => {
              return index <= 8 ? (
                <li className="item" key={`box-item-${index}`}>
                  <ListContainer>
                    <img src={box?.imagelist?.url || "-"} alt="" className="img" />
                    <ContentContainer>
                      <h3>{box.titlelist}</h3>
                      <p>{box.descriptionlist}</p>
                    </ContentContainer>
                  </ListContainer>
                </li>
              ) : null;
            })
            : null}
        </ItemsContainer>

        {/* 
        <Link
          key={`comparation-contactButton`}
          href={"contact"}
          passHref
          prefetch
        >
          <ButtonContainer fullwidth={false}>
            {buttontext ? buttontext : `Agende una reunión`}
          </ButtonContainer>
        </Link> */}






      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
      // borderRadius: '100%',
      // backgroundImage: "linear-gradient(188deg, #078FF1 , #33C7DA 65% )",

    }
  }
});
// export const Default = SliceFactory(Base);
// 