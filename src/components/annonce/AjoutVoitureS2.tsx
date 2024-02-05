import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";

const content = {
    padding: '5%'
}

function newCarS2() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/voitureS1" />
                    </IonButtons>
                    <IonTitle size="large"> Nouvelle Voiture </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen style={content}>
                <IonCard>
                    <IonCardTitle className='ion-margin-top ion-text-center'> Details de votre vehicule </IonCardTitle>
                    <IonCardContent>
                        <IonList>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Annee de sortie </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Plaque d'immatriculation </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Autonomie </IonLabel>
                                <IonInput type="number" className="p_input" />
                            </IonItem>
                            <IonButton expand="block" className="enter-btn" >
                                Suivant
                            </IonButton>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default newCarS2;