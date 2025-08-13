import { Button } from './components/Button';
import { DatePicker } from './components/DatePicker';
import { Icon } from './components/Icon';
import { Input } from './components/Input';
import { InputLabel } from './components/InputLabel';
import { Loader } from './components/Loader';
import { Logo } from './components/Logo';

function App() {
  const selectedDate: string = '2023-10-01';
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Selected date:', event.target.value);
  };
  return (
    <>
      <Logo />
      <br />
      <Loader />
      <br />
      <Button>Log in</Button>
      <Button disabled>Log in</Button>
      <br />
      <Button variant="ghost">Button</Button>
      <Button variant="ghost" disabled>
        Button
      </Button>
      <br />
      <Button variant="round">x</Button>
      <Button variant="round" disabled>
        x
      </Button>
      <br />
      <InputLabel>Name</InputLabel>
      <br />
      <InputLabel htmlFor="name1">Name</InputLabel>

      <br />
      <Input />
      <Input helperText="Error message" />
      <Input
        type="text"
        placeholder="Enter name"
        defaultValue={'John Doe'}
        error
        helperText="Error message"
      />
      <Input
        defaultValue={'Bank'}
        leftIcon={{ iconName: 'search' }}
        rightIcon={{ iconName: 'close', color: '#d1d1d1' }}
      />
      <br />
      <Icon iconName="plus" size={15} color="red" />
      <Icon iconName="plus" />
      <br />
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <br />
      <DatePicker />
    </>
  );
}

export default App;
