import * as firebase from 'firebase/app';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from 'react';
import { IonBadge, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add, addOutline, carOutline } from 'ionicons/icons';
import { logOutOutline } from 'ionicons/icons';
import { useIonRouter } from '@ionic/react';

const firebaseConfig = {
  apiKey: "AIzaSyAgOXkuYSkV9GhAxHmelyEXqhXdmtNDrzc",
  authDomain: "cloud-3324f.firebaseapp.com",
  projectId: "cloud-3324f",
  storageBucket: "cloud-3324f.appspot.com",
  messagingSenderId: "363453581998",
  appId: "1:363453581998:web:083a1d7929966373387b3f"
};

firebase.initializeApp(firebaseConfig);

const fabStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: '999',
};

function Annonces() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const navigation = useIonRouter();

  useEffect(() => {
    const fetchImageUrls = async () => {
      const storage = getStorage();
      const imageNames = ['voiture.jpg', 'red-car.jpg'];
      const urls = await Promise.all(imageNames.map(name => getDownloadURL(ref(storage, name))));
      setImageUrls(urls);
    };

    fetchImageUrls();
  }, []);

  const navigateToDetails = () => {
    navigation.push('/details');
  };

  const addNewAnnonce = () => {
    navigation.push('/annonce');
  };

  const addCar = () => {
    navigation.push('/voitureS1');
  };

  const logOut = () => {
    navigation.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large" className='ion-text-center'>Vos annonces</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logOut}>
              <IonIcon icon={logOutOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {imageUrls.map((imageUrl, index) => (
          <IonCard key={index} className='ion-margin-top' onClick={navigateToDetails}>
            <img alt="voiture" src={imageUrl} />
            <IonCardHeader>
              <IonCardTitle> Lamborghini Huracan </IonCardTitle>
              <IonCardSubtitle> Date de publication : 15 Aout 2023 </IonCardSubtitle>
              <IonCardSubtitle>
                <p> 15 000 000 000 $ <IonBadge color="success" className='ion-float-right'>Disponible</IonBadge> </p>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        ))}
        <IonFab style={fabStyle}>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={addOutline} onClick={addNewAnnonce}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={carOutline} onClick={addCar}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

export default Annonces;
