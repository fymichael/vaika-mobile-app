import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton
} from '@ionic/react';

const content = {
    padding: '5%'
};

function NewCarS3() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            console.log('oif');
        }
        else{
            console.log('fichier vide');
        }
    };

    const handleUpload = () => {
        if (file) {
            const storageRef = ref(getStorage(), file.name);
    
            uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log('url de image : ', downloadURL);
                }).catch((error) => {
                    console.error('erreur lors du recuperation du lien de telechargement :', error);
                });
            }).catch((error: any) => {
                console.error('erreur :', error);
            });
        }
    };
    


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/voitureS2" />
                    </IonButtons>
                    <IonTitle size="large"> Nouvelle Voiture </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen style={content}>
                <IonCard>
                    <IonCardTitle className='ion-margin-top ion-text-center'> Details du vehicule </IonCardTitle>
                    <IonCardContent>
                        <IonList>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Nombre de porte </IonLabel>
                                <IonInput type="number" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Nombre de siège </IonLabel>
                                <IonInput type="number" className="p_input" />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Kilometrage </IonLabel>
                                <IonInput type="number" className="p_input" />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked"> Ajouter une photo </IonLabel>
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <input type="file" onChange={handleFileChange} />
                            </IonItem>
                            <IonButton expand="block" className="enter-btn" onClick={handleUpload}>
                                Terminer
                            </IonButton>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default NewCarS3;
