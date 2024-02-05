import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { cashOutline, chevronUpCircle, trashOutline } from 'ionicons/icons';

const cssDivContainer = {
    display: 'flex',
    justifyContent: 'space-between',
};

const cssDivImg = {
    width: '100%',
    height: '30%'
};

const cssDiv1 = {
    flex: '1',
};

const cssDiv2 = {
    flex: '1',
};

const firebaseConfig = {
    apiKey: "AIzaSyAgOXkuYSkV9GhAxHmelyEXqhXdmtNDrzc",
    authDomain: "cloud-3324f.firebaseapp.com",
    projectId: "cloud-3324f",
    storageBucket: "cloud-3324f.appspot.com",
    messagingSenderId: "363453581998",
    appId: "1:363453581998:web:083a1d7929966373387b3f"
};

firebase.initializeApp(firebaseConfig);

function AnnonceDetail() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const storage = getStorage();
        const pathReference = ref(storage, 'voiture.jpg');

        getDownloadURL(pathReference)
            .then(url => {
                setImageUrl(url);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de l\'URL de téléchargement:', error);
            });
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/annonces" />
                    </IonButtons>
                    <IonTitle>Détails de l'annonce</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>

                    <img alt="Voiture" src={imageUrl} />
                    <IonCardHeader>
                        <IonCardTitle> Prix : 15 000 000 000 $ </IonCardTitle>
                        <IonCardSubtitle>La Lamborghini Huracan est l'un des modèles les plus emblématiques de la marque italienne</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent style={cssDivContainer}>
                        <div style={cssDiv1}>
                            <p>Marque : Lamborghini</p>
                            <p>Model:Huracan</p>
                            <p>Categorie : plaisir</p>
                            <p>Energie : Essence</p>
                            <p>Couleur : Bleu</p>
                            <p>Mode de transmission : Manuel</p>
                        </div>
                        <div style={cssDiv2}>
                            <p>Immatriculation : 4568 TBV</p>
                            <p>Annee : 2023</p>
                            <p>Autonomie : 15</p>
                            <p>Places : 5</p>
                            <p>Portes : 5</p>
                            <IonBadge color="success">Disponible</IonBadge>
                        </div>
                    </IonCardContent>
                </IonCard>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={chevronUpCircle}></IonIcon>
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonFabButton>
                            <IonIcon icon={cashOutline}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={trashOutline}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};
export default AnnonceDetail;


function useIonRouter() {
    throw new Error('Function not implemented.');
}

