import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { FC, useState } from 'react';
import {Modal } from 'antd'
import icon from '../../assets/icon.svg';
import './App.css';

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVersion, setCurrentVersion] = useState("0.0.1");
  const [latestVersion, setLatestVersion] = useState("0.0.2");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function Hello() {
    return (
      <div>
        <div className="Hello">
          <img width="200" alt="icon" src={icon} />
        </div>
        <h1>electron-react-boilerplate</h1>
        <div className="Hello">
          <a
            href="https://electron-react-boilerplate.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="books">
                📚
              </span>
              Read our docs
            </button>
          </a>
          <a
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="folded hands">
                🙏
              </span>
              Donate
            </button>
          </a>
          <button type="button" onClick={showModal}>
              <span role="img" aria-label="hammer">
                🔨
              </span>
              Search for update
            </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Modal className='autoUpdateModal' title="Auto Update Checker" closable={false} maskClosable={false} open={isModalOpen} 
        onOk={handleOk} okText={"Restart App and Install New Version"}
        onCancel={handleCancel} cancelText={"Resume"} >
          <div>Current installed version : {currentVersion}</div>
          <div>Latest downloadable version : {latestVersion}</div>
      </Modal>
      <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
    </div>
  );
};
export default App;


