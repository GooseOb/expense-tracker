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
      <Icon iconName="plus" size={15} color="white" />
      <Icon iconName="plus" />
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <DatePicker />
    </>
  );
}

export default App;
