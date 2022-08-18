import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import {Button} from "@aws-amplify/ui-react";
import {ActionCard} from "../ui-components";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Hello you</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello you</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Button>Create new profile</Button>
          <ActionCard description={"This is a card"} title={"Card title"}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
