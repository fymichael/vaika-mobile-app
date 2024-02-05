import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonDatetime, useIonRouter, IonLoading } from '@ionic/react';
const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
};

function Register() {
    const navigation = useIonRouter();
    const [showLoading, setShowLoading] = useState(false);

    const connect = () => {
        setShowLoading(true);

        setTimeout(() => {
            setShowLoading(false);

            navigation.push('/annonces');
            window.location.reload();
        }, 3000);
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle className='ion-text-center'> Inscription </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Nom </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Prenom </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel> Date de naissance </IonLabel>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonDatetime isDateEnabled={isWeekday}></IonDatetime>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Contact </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Email</IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Mot de passe </IonLabel>
                                <IonInput type="password" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Nom d'utilisateur </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <div className="text-center ion-margin-top">
                                <IonButton expand="block" className="enter-btn" onClick={() => connect()}> s'inscrire </IonButton>
                                <IonLoading isOpen={showLoading} message="Veuillez patienter" duration={3000} />
                            </div>
                            <p className='ion-text-center'> Êtes vous dejà un membre </p>
                            <p className='ion-text-center'> <a href='/'> Se connecter  </a> </p>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;
