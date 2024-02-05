import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonLabel, IonInput, IonItem, IonSelect, IonSelectOption, IonButton } from "@ionic/react";

const content = {
    padding: '5%'
}

function newCarS1() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/annonces" />
                    </IonButtons>
                    <IonTitle size="large"> Nouvelle Voiture </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen style={content}>
                <IonCard>
                    <IonCardTitle className='ion-margin-top ion-text-center'> Specification du vehicule </IonCardTitle>
                    <IonCardContent>
                        <IonList>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Model du vehicule </IonLabel>
                                <IonInput type="text" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Marque" interface="popover" placeholder="Marque">
                                    <IonSelectOption value="1">Lamborgini</IonSelectOption>
                                    <IonSelectOption value="2">Ferrari</IonSelectOption>
                                    <IonSelectOption value="3">Mercedes</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Categorie" interface="popover" placeholder="Categorie">
                                    <IonSelectOption value="1">Plaisir</IonSelectOption>
                                    <IonSelectOption value="2">4x4</IonSelectOption>
                                    <IonSelectOption value="3">Poids Lourds</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Specification" interface="popover" placeholder="Specification">
                                    <IonSelectOption value="1">Bluetooth</IonSelectOption>
                                    <IonSelectOption value="2">Ecran de bord</IonSelectOption>
                                    <IonSelectOption value="3">Climatisation integre</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Energie" interface="popover" placeholder="Energie">
                                    <IonSelectOption value="1">Essence</IonSelectOption>
                                    <IonSelectOption value="2">Diesel</IonSelectOption>
                                    <IonSelectOption value="3">Electricite</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Couleur" interface="popover" placeholder="Couleur">
                                    <IonSelectOption value="1">Bleu</IonSelectOption>
                                    <IonSelectOption value="2">Vert</IonSelectOption>
                                    <IonSelectOption value="3">Rouge</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Mode de transmission" interface="popover" placeholder="Mode de transmission">
                                    <IonSelectOption value="1">Automatique</IonSelectOption>
                                    <IonSelectOption value="2">Manuel</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonSelect aria-label="Lieu" interface="popover" placeholder="Lieu">
                                    <IonSelectOption value="1">Antananarivo</IonSelectOption>
                                    <IonSelectOption value="2">Mahajanga</IonSelectOption>
                                    <IonSelectOption value="3">Diego</IonSelectOption>
                                </IonSelect>
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

export default newCarS1;