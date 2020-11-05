import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title } from './styles/Body';

export default function Body({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Body.Wrapper = function BodyWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Body.Row = function BodyRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Body.Column = function BodyColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Body.Link = function BodyLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Body.Title = function BodyTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};