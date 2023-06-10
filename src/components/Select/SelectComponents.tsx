import styled from 'styled-components';

const Main = styled('div')`
  font-family: sans-serif;
  display: inline-block;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 10px;
`;

const DropDownContainer = styled('div')`
  width: 10em;
`;

const DropDownHeader = styled('div')`
  padding: 0.5em 0 0.5em 1em;
  border: 1px solid #1d1e47;
  color: #1d1e47;
  background: #14bcff;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    height: 100px;
    width: 100px;
  }
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #1d1e47;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
`;

const ListItem = styled('li')`
  list-style: none;
  cursor: pointer;
  padding: 0.5em 0 0.5em 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    height: 100px;
    width: 100px;
  }
  &:hover {
    background: #14bcff;
    color: #1d1e47;
  }
`;

export {
  Main, ListItem, DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer,
};
