import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import {List} from "../components/List";


const Tab1: React.FC = () => {


    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <List></List>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
