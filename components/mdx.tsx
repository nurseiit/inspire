/* eslint react/jsx-props-no-spreading: 0 */
import styled, { css } from 'styled-components';
import Code from './code';

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 0 10px 0;

  line-height: 1.6;
`;
const a = styled.a`
  text-decoration: underline;
`;
const img = styled.img`
  max-width: 100%;
  margin-bottom: 1.3em;
`;
const h = css`
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.2;
`;
export const h1 = styled.h1`
  ${h}
  font-size: 1.7rem;
  margin-bottom: 0.5em;
`;
const h2 = styled.h2`
  ${h}
  font-size: 1.5rem;
`;
const h3 = styled.h2`
  ${h}
  font-size: 1.3rem;
`;
const h4 = styled.h2`
  ${h}
  font-size: 1.1rem;
`;
const p = styled.p`
  margin: 2em 0;
  font-size: 1em;
  text-align: justify;
`;
const list = css`
  margin: 0;
  padding: 0 0 0 5px;
  list-style-position: inside;
`;
const ul = styled.ul`
  ${list}
`;
const ol = styled.ol`
  ${list}
`;
export default {
  wrapper: Wrapper,
  a,
  img,
  code: Code,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
};
