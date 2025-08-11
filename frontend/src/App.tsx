import { Button } from './components/Button';
import { Loader } from './components/Loader';
import { Logo } from './components/Logo';

function App() {
  return (
    <>
      <Logo />
      <Loader />
      <Button>Log in</Button>
      <Button disabled>Log in</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="ghost" disabled>
        Button
      </Button>
      <Button variant="round">x</Button>
      <Button variant="round" disabled>
        x
      </Button>
    </>
  );
}

export default App;
