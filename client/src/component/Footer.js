import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 27vh;
  border-bottom: 1px solid black;
  background: #464646;
  position: relative;
  @media screen and (max-width: 480px) {
    height: 85vh;
  }
`;

const LogoTag = styled.img`
  position: absolute;
  top: 20%;
  left: 8%;
  width: 13vw;
  @media screen and (max-width: 480px) {
    width: 30vw;
    font-size: 0.9rem;
    top: 10%;
    left: 35%;
  }
`;
const AboutTag = styled.div`
  position: absolute;
  display: block;
  top: 25%;
  left: 35%;
  line-height: 170%;
  text-align: left;
  color: white;
  font-size: 1rem;

  #repo {
    color: white;
    text-decoration: none;
  }
  #repo:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    width: 20vw;
    font-size: 0.9rem;
    top: 25%;
    left: 3%;
    #repo {
      width: 20vw;
      font-size: 0.9rem;
    }
  }
`;
const NameTag = styled.div`
  position: absolute;
  right: 26%;
  top: 25%;
  color: white;
  line-height: 170%;
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    top: 40%;
    left: 3%;
    line-height: 300%;
  }
`;
const LinkTag = styled.div`
  position: absolute;
  right: 6%;
  top: 25%;
  display: flex;
  flex-direction: column;
  line-height: 170%;
  font-size: 1rem;
  flex-wrap: wrap;
  #link1 {
    color: white;
    text-decoration: none;
  }
  #link1:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  #link2 {
    color: white;
    text-decoration: none;
  }
  #link2:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  /* ----------------------------------- */
  #link3 {
    color: white;
    text-decoration: none;
  }
  #link3:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }
  /* ----------------------------------- */
  #link4 {
    color: white;
    text-decoration: none;
  }
  #link4:hover {
    color: #9ce6ff;
    text-decoration: underline;
  }

  @media screen and (max-width: 480px) {
    top: 40%;
    line-height: 270%;
    left: 19%;
    #link1 {
      font-size: 0.9rem;
    }

    #link2 {
      font-size: 0.9rem;
    }

    #link3 {
      font-size: 0.9rem;
    }

    #link4 {
      font-size: 0.9rem;
    }
  }
`;
const Copy = styled.div`
  position: absolute;
  bottom: 5%;
  left: 8%;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 10%;
    bottom: 5%;
    left: 8%;
  }
`;

function Footer() {
  return (
    <Container>
      <LogoTag
        src="https://iconmage.s3.ap-northeast-2.amazonaws.com/Footer.png"
        alt=""
      />
      <AboutTag>
        About us<br></br>
        <a id="repo" href="https://github.com/codestates/underTheSea">
          https://github.com/codestates/underTheSea
        </a>
      </AboutTag>
      <NameTag>
        김웅진<br></br>박기정<br></br>송다영<br></br>정성우
      </NameTag>
      <LinkTag>
        <a id="link1" href="https://github.com/kimwoongjin">
          https://github.com/kimwoongjin
        </a>
        <a id="link2" href="https://github.com/pgj0116">
          https://github.com/pgj0116
        </a>
        <a id="link3" href="https://github.com/songdayoung1">
          https://github.com/songdayoung1
        </a>
        <a id="link4" href="https://github.com/JeongSeongWu">
          https://github.com/JeongSeongWu
        </a>
      </LinkTag>
      <Copy>Copyright © 2022 Under The Sea All rights reserved.</Copy>
    </Container>
  );
}

export default Footer;
