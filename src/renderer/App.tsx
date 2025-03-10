import './App.css';
import GuessTheNumber from './components/GuessTheNumber';
import useServerEventHandlers from './hooks/serverEventHandlers.hook';
import {
  UserActionHandlers,
  useUserActionHandlers,
} from './hooks/userActionHandlers.hook';

export default function App() {
  const userActionHandlers: UserActionHandlers = useUserActionHandlers();
  useServerEventHandlers();
  return (
    <div className="body-container">
      <GuessTheNumber userActionHandlers={userActionHandlers} />
    </div>
  );
}
