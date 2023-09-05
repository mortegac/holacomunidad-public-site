import { linkResolver } from "../prismicio";

export const getAlternates = ({ alternate_languages, sitename }) => {

    return alternate_languages.map((page, i) => (
        <link
            key={i}
            hrefLang={page.lang}
            rel="alternate"
            href={`${sitename}${linkResolver(page)}/`}
        />
    ))
}


// Open Graph tags
export const getMetaTags = ({ description, author, title }) => [
    {
        name: `description`,
        content: description || dummy(""),
    },
    {
        name: `twitter:card`,
        content: `summary`,
    },
    {
        name: `twitter:creator`,
        content: "@holacomunidad",
    },
    {
        name: `twitter:title`,
        content: title || dummy(""),
    },
    {
        name: `twitter:description`,
        content: description || dummy(""),
    },
    {
        property: `og:title`,
        content: title || dummy(""),
    },
    {
        property: `og:description`,
        content: description || dummy(""),
    },
    {
        property: `og:url`,
        content: "https://holacomunidad.cl",
    },
    {
        property: `og:type`,
        content: `website`,
    },
    {
        name: `og:image`,
        content: "https://images.prismic.io/holacomunidadv2/ac375b05-4a63-492c-87ad-b65f2bb080f4_SOCIAL-MEDIA.png",
    },
    {
        name: `og:image:alt`,
        content: "holacomunidad.cl",
    },
    {
        name: `og:image:width`,
        content: "1200",
    },
    {
        name: `og:image:height`,
        content: "630",
    },
    {
        name: `og:site_name`,
        content: "Hola Comunidad",
    },
    {
        name: `viewport`,
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
    },
    {
        name: `keywords`,
        content: "Descubre lo que está pasando cerca de ti con nuestra nueva aplicación móvil. Te mantendrá informado con las últimas noticias, eventos, empleos y anuncios de pequeñas empresas en tu comunidad local.",
    },
].map((items, i) => (
    <meta key={`meta-${i}`} {...items}></meta>
))



export const dummy = (content = "") => [
    {
        text: content,
        type: "heading 1",
        spans: []
    },
];


export const getTitle = ({ type, title }) => title.replace(/['"]+/g, '')