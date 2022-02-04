import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  scroll-behavior: smooth;
  text-decoration: none;
  box-sizing: border-box;
  color: inherit;
  font-family: 'Lato', sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
@media(max-width: 1023px) {
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 767px) {
  html {
    font-size: 87.5%;
  }
}
`;

export default GlobalStyled;