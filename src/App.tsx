import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Login from './components/authentification/Login';
import Inscription from './components/authentification/Inscription';
import Annonces from './components/annonce/Annonces';
import AnnonceDetail from './components/annonce/DetailAnnonce';
import newAnnonce from './components/annonce/AjoutAnnonce';
import newCarS1 from './components/annonce/AjoutVoitureS1';
import newCarS2 from './components/annonce/AjoutVoitureS2';
import newCarS3 from './components/annonce/AjoutVoitureS3';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Login} />
          <Route exact path="/inscription" component={Inscription} />
          <Route exact path="/annonces" component={Annonces} />
          <Route exact path="/details" component={AnnonceDetail} />
          <Route exact path="/annonce" component={newAnnonce} />
          <Route exact path="/voitureS1" component={newCarS1} />
          <Route exact path="/voitureS2" component={newCarS2} />
          <Route exact path="/voitureS3" component={newCarS3} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
