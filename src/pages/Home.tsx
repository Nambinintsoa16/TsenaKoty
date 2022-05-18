import {IonApp,IonIcon,IonLabel,IonRouterOutlet,IonTabBar,IonTabButton,IonTabs, setupIonicReact} from '@ionic/react';
import { basket, cart, home,personCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import ReactSession from 'react-client-session/dist/ReactSession';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import './Home.css';

const Home: React.FC = () => {
return (
<IonApp>
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/Accueil">
          <Tab1 />
        </Route>
        <Route exact path="/Compte">
          <Tab2 />
        </Route>
        <Route path="/Panier">
          <Tab3 />
        </Route>
        <Route path="/Boutique">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/Accueil" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="Accueil" href="/Accueil">
          <IonIcon icon={home} />
          <IonLabel>Accueil</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Compte" href="/Compte">
          <IonIcon icon={personCircle} />
          <IonLabel>Compte</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Panier" href="/Panier">
          <IonIcon icon={cart} />
          <IonLabel>Panier</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Boutique" href="/Boutique">
          <IonIcon icon={basket} />
          <IonLabel>Boutique</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
</IonApp>
);
};
export default Home;