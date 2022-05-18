import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg } from '@ionic/react';
import  lalao  from '../../assets/images/lalao.png';
import AccueilHtml from '../../components/AccueilHtml';
import { starOutline, chatboxEllipsesOutline, shareOutline, thumbsUpOutline, thumbsDownOutline, heart } from 'ionicons/icons';
import './Tab1.scss';

const Tab1: React.FC = () => {
  return (
    <IonPage>
    <IonContent>
          <AccueilHtml/>    
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
