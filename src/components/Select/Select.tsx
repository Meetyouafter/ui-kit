import React, { FC, useEffect, useState } from 'react';
import {
  Main,
  ListItem,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
} from './SelectComponents';

type SelectProps = {
  isOpen?: boolean;
  header: string;
  elements: string[];
};

const Select: FC<SelectProps> = ({ isOpen, header, elements }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(isOpen);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelect = () => setIsOpenSelect(!isOpenSelect);

  const onElementClick = (value: string) => {
    setSelectedOption(value);
    setIsOpenSelect(false);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const checkElementOnImg = (element: string) => {
    if (!element) return element;
    if (element.match(/\.(png|jpg|jpeg|svg)$/)) {
      return <img src={element} alt="select element" loading="lazy" />;
    }
    return element;
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggleSelect}>
          {checkElementOnImg(selectedOption) || checkElementOnImg(header)}
        </DropDownHeader>
        {isOpenSelect && (
          <DropDownListContainer>
            <DropDownList>
              {elements.map((element) => (
                <ListItem
                  onClick={() => onElementClick(element)}
                  key={Math.random()}
                >
                  {checkElementOnImg(element)}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

Select.defaultProps = {
  isOpen: false,
};

export default Select;
