import React from "react";
import styled from "styled-components";
import { css } from "../styles/theme.css";
// import { css } from "../assets/img/shape3.png";

const Home = () => {
  return (
    <div className="Home">
      <AppLayout>
        <NavBar>
          <div className="menuBar">
            <span className="hamburgerIcon">
              <i class="fa-solid fa-bars"></i>
            </span>
            <span>Menu</span>
          </div>
          <a className="logo" href="/">
            T👀lKit
          </a>
          <span>Account</span>
        </NavBar>

        <MainContent>
          <h1 className="mainTitle">
            당신을 위한 <br />
            키트✨를 찾아보세요
          </h1>
          <h6 className="mainText">
            매년 야심차게 세운 목표가 흐지부지해져 자책하고 있나요? 성향에 따라
            목표를 실천하고 지속하는 방법이 달라요. <br />
            자신도 모르는 사이에 원하는 습관을 만들어줄 방법을 추천합니다.
          </h6>
        </MainContent>

        <Sliding>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpXJiV%2FbtrW5625GKB%2FkcIUe8BgpKkz1vbFcBLlIk%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkYVM7%2FbtrW0OB8BcB%2FCTcwF6uWnqYO7L8dGoilyk%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbh5TXK%2FbtrWTJB898A%2FkuTmhawgc1axywE6CRMeK1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgzpBu%2FbtrW77m6ZEE%2FWK3usxRy3uvkdq1NzzQfP1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr2hhm%2FbtrW2uckLa1%2Fy7LchSmW97nppBNDOqk3F1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpXJiV%2FbtrW5625GKB%2FkcIUe8BgpKkz1vbFcBLlIk%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkYVM7%2FbtrW0OB8BcB%2FCTcwF6uWnqYO7L8dGoilyk%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbh5TXK%2FbtrWTJB898A%2FkuTmhawgc1axywE6CRMeK1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgzpBu%2FbtrW77m6ZEE%2FWK3usxRy3uvkdq1NzzQfP1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
          <Card>
            <img
              className="shapeImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr2hhm%2FbtrW2uckLa1%2Fy7LchSmW97nppBNDOqk3F1%2Fimg.png"
            ></img>
            <h1 className="shapeTitle">
              New year
              <br />
              New me
            </h1>
          </Card>
        </Sliding>

        <Content>
          <h1 class="contentTitle">새해 계획, 어떻게 실천할까?</h1>
          <h6 class="contentText">
            매년 야심차게 세운 목표가 흐지부지해져 자책하고 있나요? <br />
            성향에 따라 목표를 실천하고 지속하는 방법이 달라요. <br />
            자신도 모르는 사이에 원하는 습관을 만들어줄 방법을 추천합니다.
          </h6>
        </Content>
      </AppLayout>
    </div>
  );
};

export default Home;

let AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #06060e;
  color: white;
  font-weight: 400;
  overflow: hidden;
  background: #5532ee;
  background: -webkit-linear-gradient(right, #5532ee, #151a3c);
  background: -moz-linear-gradient(right, #5532ee, #151a3c);
  background: linear-gradient(to left, #5532ee, #151a3c);
  ::-webkit-scrollbar {
    display: none;
  }
`;

let NavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  background: #5532ee;
  background: -webkit-linear-gradient(right, #5532ee, #151a3c);
  background: -moz-linear-gradient(right, #5532ee, #151a3c);
  background: linear-gradient(to left, #5532ee, #151a3c);
  .menuBar {
    &:hover {
      cursor: pointer;
    }
  }
  .hamburgerIcon {
    margin-right: 10px;
  }
  .logo {
    text-decoration: none;
    color: white;
    font-family: "ClimateCrisisKRVF";
    font-size: 35px;
    &:hover {
      cursor: pointer;
    }
  }
`;

let MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .mainTitle {
    align-items: flex-start;
    margin: 250px 0 100px 0;
    padding-left: 100px;
    font-size: 50px;
    font-family: "ClimateCrisisKRVF";
    width: 100%;
  }
  .mainText {
    width: 100%;
    padding-left: 100px;
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    line-height: 145%;
    margin-bottom: 100px;
  }
`;

let Sliding = styled.div`
  display: flex;
  padding: 40px 0 100px 0;
  gap: 24px;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

let Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  min-width: 220px;
  height: 320px;
  padding: 20px;
  background: #5532ee;
  background: -webkit-radial-gradient(center, #5532ee, #f794a6);
  background: -moz-radial-gradient(center, #5532ee, #f794a6);
  background: radial-gradient(ellipse at center, #5532ee, #f794a6);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.4s;
  }
  .shapeImg {
    width: 150px;
    height: 150px;
    margin-bottom: 40px;
  }
  .shapeTitle {
    color: #e7e7e7;
    font-weight: 800;
    font-family: "KIMM_Bold";
    font-size: 25px;
    text-align: center;
    font-style: italic;
  }
`;

let Content = styled.div`
  margin: 150px 0 250px 0;
  .contentTitle {
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
  }
  .contentText {
    font-size: 18px;
    font-weight: 100;
    text-align: center;
    line-height: 145%;
  }
`;
