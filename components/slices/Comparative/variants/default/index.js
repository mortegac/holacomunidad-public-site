import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ItemsContainer, CardList, Card, ImgHolder, ButtonContainer } from "./defaultStyles";

const Base = (props) => {

  const { description
    , title } = props.primary;

  const positive = Array.isArray(props.items) && props.items[0];
  const negative = Array.isArray(props.items) && props.items[1];

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <></>}
        <div className="description">
          {description ? description : <></>}
        </div>
      </Description>

      {/* <CardList> */}



      <ItemsContainer>
        {Array.isArray(props.items)
          ? props.items.map((box, index) => {
            return (
              // index === 0 ? (
              <Card>

                {props?.items[index]?.title[0]?.text ? RichText.render(props.items[index].title) : <></>}
                {props?.items[index]?.description ? (<p>{props.items[index].description}</p>) : <></>}
                <div className="list-check">
                  {/* <ImgHolder> */}
                  <picture>
                    <source srcSet={props.items[index].ico.url} media="(max-width: 630px)" />
                    <img src={props.items[index].ico.url} alt="Ico" />
                  </picture>
                  {/* </ImgHolder> */}
                  <p>{props.items[index].description1}</p>
                </div>
                <div className="list-check">
                  {/* <ImgHolder> */}
                  <picture>
                    <source srcSet={props.items[index].ico2.url} media="(max-width: 630px)" />
                    <img src={props.items[index].ico2.url} alt="Ico" />
                  </picture>
                  {/* </ImgHolder> */}
                  <p>{props.items[index].description2}</p>
                </div>
                <div className="list-check">
                  {/* <ImgHolder> */}
                  <picture>
                    <source srcSet={props.items[index].ico3.url} media="(max-width: 630px)" />
                    <img src={props.items[index].ico3.url} alt="Ico" />
                  </picture>
                  {/* </ImgHolder> */}
                  <p>{props.items[index].description3}</p>
                </div>

                <div className="list-check">
                  {/* <ImgHolder> */}
                  <picture>
                    <source srcSet={props.items[index].ico4.url} media="(max-width: 630px)" />
                    <img src={props.items[index].ico4.url} alt="Ico" />
                  </picture>
                  {/* </ImgHolder> */}
                  <p>{props.items[index].description4}</p>
                </div>

                <div className="list-check">
                  {/* <ImgHolder> */}
                  <picture>
                    <source srcSet={props.items[index].ico5.url} media="(max-width: 630px)" />
                    <img src={props.items[index].ico5.url} alt="Ico" />
                  </picture>
                  {/* </ImgHolder> */}
                  <p>{props.items[index].description5}</p>
                </div>



                {
                  props?.items[index]?.buttontext && (
                    <Link
                      key={`top-nav-contactButton`}
                      // href={calltoactionUri.url === "" ? `/${linkResolver(calltoactionUri)}` : calltoactionUri.uid}
                      href={"contact"}
                      passHref
                      prefetch
                    >
                      <ButtonContainer fullwidth={true}>
                        {props.items[index].buttontext}
                      </ButtonContainer>
                    </Link>

                  )
                }





              </Card>
            )
            // ) : null;
          })
          : null}
      </ItemsContainer>
      {/* </CardList> */}
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#F4F4F4",
    }
  }
});