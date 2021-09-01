import styled from "styled-components";

export const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 33.3333px;
  /* background-color: $blue-ribbon-color; */
  font-weight: 600;
  font-size: 22.59px;
  line-height: 27.1px;
  color: #fff;
  padding: 23px 37px;

  & {
    overflow: hidden;
    color: ${(props) => props.mainTextColor};
    background-color: ${(props) => props.subBgColor};
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);

    &:hover {
      color: ${(props) => props.subTextColor};
      background-color: ${(props) => props.subBgColor};
    }

    &::before {
      position: absolute;
      top: -4px;
      content: "";
      color: #fff;
      background-color: ${(props) => props.mainBgColor};
      width: 113%;
      height: 110%;
      left: -10%;
      transform: skew(30deg);
      transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
    }

    &:hover::before {
      transform: translate3d(100%, 0, 0);
    }
  }
`;
