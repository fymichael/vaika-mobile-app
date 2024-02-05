import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter, IonLoading } from '@ionic/react';

function Login(){
    const navigation = useIonRouter();

    const [showLoading, setShowLoading] = useState(false);

    const connect = () => {
        setShowLoading(true);

        setTimeout(() => {
            setShowLoading(false);

            navigation.push('/annonces');
        }, 3000);
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle className="ion-text-center"> Bienvenue! </IonCardTitle>
                        <IonCardSubtitle className="ion-text-center"> Identifiez-vous </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Nom d'utilisateur ou email </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Mot de passe </IonLabel>
                                <IonInput type="password" className="p_input"/>
                            </IonItem>
                            <div className="text-center ion-margin-top">
                                <IonButton expand="full" className="enter-btn" onClick={() => connect()}> se connecter </IonButton>
                                <IonLoading isOpen={showLoading} message="Veuillez patienter" duration={3000} />
                            </div>
                            <p className='ion-text-center'> Vous n'êtes pas encore inscrit </p>
                            <p className='ion-text-center'> <a href='/inscription'> S'inscrire </a> </p>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
