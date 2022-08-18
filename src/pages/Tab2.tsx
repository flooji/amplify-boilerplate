import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@aws-amplify/ui-react";
import {ProfileCard, ToggleRight} from "../ui-components";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
          <ProfileCard backgroundColor={"lightgray"} name={"Barbara Bubble"} job={"Waitress"} imageUrl={"./assets/images/profile_pic.jpg"}/>
          <Table
              caption=""
              highlightOnHover={false}>
              <TableHead>
                  <TableRow>
                      <TableCell as="th">Citrus</TableCell>
                      <TableCell as="th">Stone Fruit</TableCell>
                      <TableCell as="th">Berry</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>Orange</TableCell>
                      <TableCell>Nectarine</TableCell>
                      <TableCell>Raspberry</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Grapefruit</TableCell>
                      <TableCell>Apricot</TableCell>
                      <TableCell>Blueberry</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Lime</TableCell>
                      <TableCell>Peach</TableCell>
                      <TableCell>Strawberry</TableCell>
                  </TableRow>
              </TableBody>
          </Table>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
