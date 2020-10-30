import {Title, Subtitle, Container, Button, Image} from './styles';

const ErrorMessage = ({children}) => (
  <Container>
    <Image
      src={
        'https://media1.tenor.com/images/cdfe58ca8a95b5e505dc82a4698da400/tenor.gif'
      }
      alt="fail-whale"
    />
    <Title>Whoops, something went wrong loading our api.</Title>
    <Subtitle>
      It make take our server a minutes or two to load from a cold start...
    </Subtitle>
    <Button onClick={() => window.location.reload()}>Retry</Button>
  </Container>
);

export default ErrorMessage;
