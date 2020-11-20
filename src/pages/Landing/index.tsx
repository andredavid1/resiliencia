import React from 'react';
import ResilienciaImg from '../../assets/images/resiliencia.jpg';
import SpringImg from '../../assets/images/spring.gif';
import ExampleImg from '../../assets/images/frase.png';
import ConclusionImg from '../../assets/images/superacao.jpg';
import {
  Container,
  Home,
  LeftHome,
  RightHome,
  Definition,
  LeftDefinition,
  RightDefinition,
  Example,
  LeftExample,
  RightExample,
  Conclusion,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Home id="home">
        <LeftHome>
          <h1>Resiliência</h1>
          <p>
            Habilidade que nos <br /> leva ao sucesso
          </p>
          <a href="#definition">
            Clique Aqui <span>e</span> Saiba Mais
          </a>
        </LeftHome>
        <RightHome>
          <img src={ResilienciaImg} alt="resiliência" />
        </RightHome>
      </Home>
      <Definition id="definition">
        <LeftDefinition>
          <img src={SpringImg} alt="resiliência" />
        </LeftDefinition>
        <RightDefinition>
          <p>Supere as adversidades,</p>
          <p>recomeçe se preciso for,</p>
          <p>demonstre maturidade e força...</p>

          <a href="#example">Siga em Frente</a>
        </RightDefinition>
      </Definition>
      <Example id="example">
        <LeftExample>
          <p>Errar</p>
          <p>faz parte do processo</p>
          <p>de aprendizagem</p>

          <a href="#conclusion">Persista</a>

          <p>Finalize o que começou.</p>
          <p>Avance</p>
        </LeftExample>
        <RightExample>
          <img
            src={ExampleImg}
            alt="levanta, sacode a poeira e dá a volta por cima"
          />
        </RightExample>
      </Example>
      <Conclusion id="conclusion">
        <img src={ConclusionImg} alt="conclusão" />
        <p className="sonhos">Não destrua seus sonhos</p>
        <p className="limites">Destrua os seus limites</p>
        <a href="#home">Home</a>
      </Conclusion>
    </Container>
  );
};

export default Landing;
