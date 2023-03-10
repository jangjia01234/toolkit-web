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
            T๐lKit
          </a>
          <span>Account</span>
        </NavBar>

        <MainContent>
          <h1 className="mainTitle">
            ๋น์ ์ ์ํ <br />
            ํคํธโจ๋ฅผ ์ฐพ์๋ณด์ธ์
          </h1>
          <h6 className="mainText">
            ๋งค๋ ์ผ์ฌ์ฐจ๊ฒ ์ธ์ด ๋ชฉํ๊ฐ ํ์ง๋ถ์งํด์ ธ ์์ฑํ๊ณ  ์๋์? ์ฑํฅ์ ๋ฐ๋ผ
            ๋ชฉํ๋ฅผ ์ค์ฒํ๊ณ  ์ง์ํ๋ ๋ฐฉ๋ฒ์ด ๋ฌ๋ผ์. <br />
            ์์ ๋ ๋ชจ๋ฅด๋ ์ฌ์ด์ ์ํ๋ ์ต๊ด์ ๋ง๋ค์ด์ค ๋ฐฉ๋ฒ์ ์ถ์ฒํฉ๋๋ค.
          </h6>
        </MainContent>

        <Sliding>
          <section className="cardSection">
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
                Hobby
                <br />
                Records
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbh5TXK%2FbtrWTJB898A%2FkuTmhawgc1axywE6CRMeK1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Make a
                <br />
                Schedule
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgzpBu%2FbtrW77m6ZEE%2FWK3usxRy3uvkdq1NzzQfP1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Workout
                <br />
                Note
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr2hhm%2FbtrW2uckLa1%2Fy7LchSmW97nppBNDOqk3F1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Check my
                <br />
                Emotion
              </h1>
            </Card>
          </section>
          <section className="cardSection">
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
                Hobby
                <br />
                Records
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbh5TXK%2FbtrWTJB898A%2FkuTmhawgc1axywE6CRMeK1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Make a
                <br />
                Schedule
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgzpBu%2FbtrW77m6ZEE%2FWK3usxRy3uvkdq1NzzQfP1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Workout
                <br />
                Note
              </h1>
            </Card>
            <Card>
              <img
                className="shapeImg"
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr2hhm%2FbtrW2uckLa1%2Fy7LchSmW97nppBNDOqk3F1%2Fimg.png"
              ></img>
              <h1 className="shapeTitle">
                Check my
                <br />
                Emotion
              </h1>
            </Card>
          </section>
        </Sliding>

        <SubContent>
          <h1 class="contentTitle">์ํด ๊ณํ, ์ด๋ป๊ฒ ์ค์ฒํ ๊น?</h1>
          <h6 class="contentText">
            ๋งค๋ ์ผ์ฌ์ฐจ๊ฒ ์ธ์ด ๋ชฉํ๊ฐ ํ์ง๋ถ์งํด์ ธ ์์ฑํ๊ณ  ์๋์? <br />
            ์ฑํฅ์ ๋ฐ๋ผ ๋ชฉํ๋ฅผ ์ค์ฒํ๊ณ  ์ง์ํ๋ ๋ฐฉ๋ฒ์ด ๋ฌ๋ผ์. <br />
            ์์ ๋ ๋ชจ๋ฅด๋ ์ฌ์ด์ ์ํ๋ ์ต๊ด์ ๋ง๋ค์ด์ค ๋ฐฉ๋ฒ์ ์ถ์ฒํฉ๋๋ค.
          </h6>
          <div className="detail">
            <img
              className="detailImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzdrpW%2FbtrW38fOOLH%2FztH04ip9GVtQFdsFM1xuJ0%2Fimg.png"
            ></img>
            <img
              className="detailImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnnvUx%2FbtrW2uXJUrj%2Foxr5cH65WlpEDWGqgPs6ok%2Fimg.png"
            ></img>
            <img
              className="detailImg"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlxZGB%2FbtrW55JTgit%2F8b3NkSXChzmiO3x44QSB8k%2Fimg.png"
            ></img>
          </div>
        </SubContent>
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
  gap: 20px;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  .cardSection {
    display: flex;
    gap: 20px;
  }
`;

let Card = styled.div`
  background: #5532ee;
  background: -webkit-radial-gradient(center, #5532ee, #f794a6);
  background: -moz-radial-gradient(center, #5532ee, #f794a6);
  background: radial-gradient(ellipse at center, #5532ee, #f794a6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  min-width: 220px;
  height: 320px;
  padding: 20px;
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

let SubContent = styled.div`
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
  .detail {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-top: 140px;
  }
  .detailImg {
    width: 320px;
    height: 450px;
  }
`;
