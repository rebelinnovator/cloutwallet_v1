import styled from "styled-components";

export const Style = {
  Container: styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f6f6f6;
    margin-bottom: 15px;
    padding: 0px 15px;
    .creator {
      display: flex;
      align-items: center;
      height: 75%;
      width: 15%;
      img {
        margin-right: 15px;
        border-radius: 50%;
        border: 1px solid white;
        width: 45px;
        height: 45px;
        min-width: 45px;
      }
      p {
        font-family: "IBM Plex Mono";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        color: #434343;
      }
    }
    span {
      font-family: "Apercu Pro";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      text-align: right;
      color: #000000;
    }
  `,
};
