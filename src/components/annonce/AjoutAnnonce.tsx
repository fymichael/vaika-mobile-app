import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";

const content = {
    padding: '5%'
}

const itemStyle = {
    marginBottom: '20px'
};

function newAnnonce() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/annonces" />
                    </IonButtons>
                    <IonTitle size="large"> Nouvelle annonce </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen style={content}>
                <IonCard>
                    <IonList>
                        <IonItem className='ion-margin-top'>
                            <IonSelect aria-label="voiture" interface="popover" placeholder="Choisissez le vehicule" style={itemStyle}>
                                <IonSelectOption value="1">Lamborgini</IonSelectOption>
                                <IonSelectOption value="2">Ferrari</IonSelectOption>
                                <IonSelectOption value="3">Mercedes</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem className='ion-margin-top' style={itemStyle}>
                            <IonTextarea
                                label="Description de votre annonce"
                                labelPlacement="floating"
                                counter={true}
                                maxlength={100}
                                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} caractères restant`}
                            ></IonTextarea>
                        </IonItem>
                        <IonItem className='ion-margin-top' style={itemStyle}>
                            <IonLabel position="floating"> Prix estimé </IonLabel>
                            <IonInput type="number" step="any" className="p_input" />
                        </IonItem>
                        <IonButton expand="block" className="enter-btn" >
                            Publier
                        </IonButton>
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default newAnnonce;