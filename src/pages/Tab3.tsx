import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {ProfileCardCollection} from "../ui-components";
import {DataStore} from "@aws-amplify/datastore";
import {Profile} from "../models";
import {Predicates} from "aws-amplify";
import {Button} from "@aws-amplify/ui-react";

const Tab3: React.FC = () => {
    async function deleteProfile() {
        await DataStore.delete(Profile, Predicates.ALL);
    }

    async function createProfile() {
        await DataStore.save(
            new Profile({
                name: "Elisabeth",
                job: "Gardener",
                image: "./assets/images/elisabeth.jpg"
            })
        );
    }

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
          <Button onClick={deleteProfile}>Delete ALL profiles</Button>
          <Button onClick={createProfile}>Create profile</Button>
          <ProfileCardCollection />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
