import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonPage, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter, IonLoading } from '@ionic/react';
import axios from 'axios';

function stockTokens(key: string, value: string): void {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Erreur lors du stockage dans le localStorage :', error);
    }
}

// fonction pour avoir le tokens du client connecter
async function getTokens(url: string, data: any): Promise<{ refreshToken: string, accessToken: string } | null> {
    try {
        const response = await axios.post(url, data);
        console.log(response);
        const { refreshToken, accessToken } = response.data;
        return { refreshToken, accessToken };
    } catch (error) {
        console.error('Erreur lors de la requête POST :', error);
        return null;
    }
}


function Login() {
    const navigation = useIonRouter();
    const [showLoading, setShowLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const connect = () => {
        setShowLoading(true);

        const data = {
            username: username,
            password: password
        };
        const url = 'http://localhost:1970/api/voiture/login';

        setTimeout(() => {
            setShowLoading(false);

            getTokens(url, data)
                .then((tokens: { refreshToken: string, accessToken: string } | null) => {
                    if (tokens) {
                        const { refreshToken, accessToken } = tokens;
                        stockTokens("refresh-token", refreshToken);
                        stockTokens("access-token", accessToken);
                        navigation.push('/annonces');
                    } else {
                        alert('token non recuperer');
                    }
                })
                .catch((error: any) => {
                    console.error('Erreur lors de la requête POST :', error);
                });
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
                                <IonInput type="text" className="p_input" value={username} onIonChange={(e) => setUsername(e.detail.value!)} />
                            </IonItem>
                            <IonItem className='ion-margin-top'>
                                <IonLabel position="floating"> Mot de passe </IonLabel>
                                <IonInput type="password" className="p_input" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
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
