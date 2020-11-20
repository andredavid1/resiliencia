import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #800000;
`;

export const Home = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LeftHome = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  background: #ffffff;

  h1 {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    color: #222222;
    font-size: 52px;
    padding-left: 21%;
  }

  p {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-start;
    color: #312e28;
    font-size: 20px;
    text-align: left;
    text-transform: uppercase;
    padding-left: 22%;
  }

  a {
    margin-bottom: 30px;
    padding: 0 50px;
    background: #19c589;
    color: #ffffff;
    border-color: #800000;
    border-width: 1px;
    border-radius: 20px;
    font-family: Ubuntu;
    font-size: 28px;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    span {
      display: block;
      line-height: 18px;
    }

    &:hover {
      background: ${shade(0.2, '#19c589')};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const RightHome = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Definition = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #19c589;
`;

export const LeftDefinition = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RightDefinition = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    color: #312e28;
  }

  a {
    margin-top: 30px;
    padding: 10px 50px;
    background: #800000;
    color: #ffffff;
    border-color: #312e28;
    border-width: 1px;
    border-radius: 20px;
    font-family: Ubuntu;
    font-size: 28px;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    span {
      display: block;
      line-height: 18px;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background: ${shade(0.3, '#800000')};
    }
  }
`;

export const Example = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #800000;
`;

export const LeftExample = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    color: #312e28;
  }

  a {
    margin: 30px 0;
    padding: 0 50px;
    background: #19c589;
    color: #ffffff;
    border-color: #800000;
    border-width: 1px;
    border-radius: 20px;
    font-family: Ubuntu;
    font-size: 28px;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background: ${shade(0.2, '#19c589')};
    }
  }
`;

export const RightExample = styled.div`
  width: 40%;
  height: 80vh;
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Conclusion = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
  }

  p {
    font-size: 20px;
  }

  p.sonhos {
    width: 350px;
    position: absolute;
    top: 40%;
    right: 10%;
    font-size: 28px;
    color: #312e28;
    text-shadow: 1px 0 #ffffff;
    text-align: center;
  }

  p.limites {
    width: 350px;
    position: absolute;
    top: 45%;
    right: 10%;
    font-size: 28px;
    color: #312e28;
    text-shadow: 1px 0 #ffffff;
    text-align: center;
  }

  a {
    position: absolute;
    bottom: 30px;
    right: 30px;
    padding: 5px 10px;
    background: #800000;
    color: #ffffff;
    border-radius: 10px;
    text-decoration: none;
    transition: 0.5s;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background: ${shade(0.3, '#800000')};
    }
  }
`;
