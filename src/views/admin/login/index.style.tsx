import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: calc(100vh - 130px);
  background: #c5b0971a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWidgetContainer = styled.div`
  width: 600px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 526px) {
    width: 350px;
  }
`;

export const LoginPart = styled.form`
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0 4px 12px;

  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoPart = styled.img``;

export const InputPart = styled.input`
  background: #ffffff;
  border-radius: 10px;
  padding-left: 15px;

  font-size: 20px;
  width: 100%;
  border: none;
  height: 40px;
  margin-bottom: 20px;
`;

export const LogoContainer = styled.div`
  width: 250px;

  margin-bottom: 30px;
`;

export const SubmitButtonContainer = styled.div`
  width: 200px;

  .register {
    cursor: pointer;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #e8b89b;
    width: 100%;
    border-radius: 30px;
    border: none;
    text-align: center;
    margin: auto;

    height: 50px;

    font-size: 20px;

    line-height: 50px;
    font-weight: 600;

    cursor: pointer;

    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  .submit {
    text-transform: uppercase;
    color: #ffffff;
    background-color: #e8b89b;
    width: 100%;
    border-radius: 30px;
    border: none;
    text-align: center;
    margin: auto;

    height: 50px;

    font-size: 20px;

    line-height: 50px;
    font-weight: 600;

    cursor: pointer;

    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const ContentPart = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0;

  .inputContainer {
    width: 100%;
    text-align: left;
  }
`;

export const RegisterButton = styled.div`
  cursor: pointer;
`;
