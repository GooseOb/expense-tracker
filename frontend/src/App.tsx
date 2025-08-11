import { Button } from './components/Button';
import { Input } from './components/Input';
import { InputLabel } from './components/InputLabel';
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
      <InputLabel>Name</InputLabel>
      <InputLabel htmlFor="name1">Name</InputLabel>

      <Input />
      <Input helperText="Error message" />
      <Input
        type="text"
        placeholder="Enter name"
        defaultValue={'John Doe'}
        error
        helperText="Error message"
      />
    </>
  );
}

export default App;
