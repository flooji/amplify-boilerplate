import React from 'react';
import {IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader} from '@ionic/react';

import './List.css';

export const List: React.FC = () => (
    <IonContent className="list-wrapper">
        <IonList className="list">
            <IonHeader> Recent Conversations </IonHeader>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-finn.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Finn</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-han.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Han</h2>
                    <h3>Look, kid...</h3>
                    <p>I've got enough on my plate as it is, and I...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-rey.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Rey</h2>
                    <h3>I can handle myself</h3>
                    <p>You will remove these restraints and leave...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-luke.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Luke</h2>
                    <h3>Your thoughts betray you</h3>
                    <p>I feel the good in you, the conflict...</p>
                </IonLabel>
            </IonItem>
        </IonList>

        <IonList className="list">
            <IonListHeader> Online </IonListHeader>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-poe.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Poe</h2>
                    <h3>New Ride</h3>
                    <p>I just upgraded my X-Wing. Next time...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-ben.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Ben</h2>
                    <h3>Move Along</h3>
                    <p>These aren't the droids you're looking for...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-leia.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Leia</h2>
                    <h3>You're My Only Hope</h3>
                    <p>I've placed information vital to the survival...</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonAvatar slot="start">
                    <img src="./assets/images/avatar-yoda.png" />
                </IonAvatar>
                <IonLabel>
                    <h2>Yoda</h2>
                    <h3>Size matters not</h3>
                    <p>Do or do not. There is no try...</p>
                </IonLabel>
            </IonItem>
        </IonList>
    </IonContent>
);
