import '../../renderer/App.css';
import { FC } from 'react';
import NoteEditor from './noteEditor';
import ReactDOM from 'react-dom';


const Root: FC = () => {

  return (
      <NoteEditor />
  );
};

ReactDOM.render(<Root />, document.getElementById('noteEditor'));