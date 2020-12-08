import logo from './logo.svg';
import './App.css';
import './i18n/config';
import { useTranslation } from 'react-i18next';

function App() { 
  const { t } = useTranslation(); // Errors, because TS does not know we have a defaultNS defined in the config
  const { t: nst } = useTranslation('ns1');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t('title')}</h2>
        <h2>{nst('title')}</h2>
      </header>
    </div>
  );
}

export default App;
