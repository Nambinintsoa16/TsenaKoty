import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginHtml from '../components/LoginHtml';
import "./Login.css";
const Login : React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
          </IonHeader>
          <LoginHtml />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  