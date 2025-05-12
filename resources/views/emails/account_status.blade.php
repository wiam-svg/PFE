<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification de statut de compte | Plateforme de Signalements Municipaux</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid #0056b3;
        }
        .logo {
            max-height: 60px;
            margin-bottom: 10px;
        }
        .content {
            padding: 30px 20px;
        }
        .footer {
            font-size: 12px;
            text-align: center;
            color: #666666;
            padding: 20px;
            border-top: 1px solid #dddddd;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            margin: 20px 0;
            background-color: #0056b3;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
        }
        .status-approved {
            color: #2e7d32;
            padding: 15px;
            background-color: #e8f5e9;
            border-radius: 4px;
            border-left: 4px solid #2e7d32;
        }
        .status-rejected {
            color: #c62828;
            padding: 15px;
            background-color: #ffebee;
            border-radius: 4px;
            border-left: 4px solid #c62828;
        }
        .info-block {
            background-color: #e3f2fd;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .contact-info {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 4px;
            margin-top: 30px;
        }
        h1 {
            color: #0056b3;
            font-size: 24px;
        }
        h2 {
            font-size: 20px;
            margin-top: 30px;
        }
        p {
            margin: 15px 0;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            margin: 0 10px;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Plateforme de Signalements Municipaux</h1>
        </div>
        
        <div class="content">
            <h2>Bonjour {{ $user->nom }},</h2>
            
            @if($status == 'approved')
                <div class="status-approved">
                    <h3>Votre compte a été validé !</h3>
                    <p>Nous avons le plaisir de vous informer que votre demande d'inscription à la plateforme de signalements municipaux a été examinée et <strong>approuvée</strong> par notre équipe administrative.</p>
                </div>
                
                <p>Vous pouvez dès maintenant vous connecter à votre compte et profiter de l'ensemble des fonctionnalités de notre plateforme :</p>
                
                <ul>
                    <li>Créer et suivre des signalements</li>
                    <li>Participer aux discussions sur les problématiques urbaines</li>
                    <li>Recevoir des notifications sur l'avancement des interventions</li>
                    <li>Consulter l'historique des signalements de votre quartier</li>
                </ul>
                
                <div style="text-align: center;">
                    <a href="/login" class="button">Accéder à mon compte</a>
                </div>
                
                <div class="info-block">
                    <strong>Information importante :</strong> Pour une expérience optimale, nous vous recommandons de compléter votre profil avec vos centres d'intérêt et votre localisation précise afin de recevoir des alertes personnalisées.
                </div>
            @else
                <div class="status-rejected">
                    <h3>Votre demande d'inscription n'a pas été approuvée</h3>
                    <p>Nous sommes au regret de vous informer que votre demande d'inscription à la plateforme de signalements municipaux n'a pas pu être <strong>validée</strong> par notre équipe administrative.</p>
                </div>
                
                <p>Cette décision peut être due à plusieurs raisons :</p>
                
                <ul>
                    <li>Informations incomplètes ou incorrectes dans votre formulaire d'inscription</li>
                    <li>Impossibilité de vérifier votre résidence dans notre municipalité</li>
                    <li>Non-respect des conditions d'utilisation de la plateforme</li>
                </ul>
                
                <p>Si vous pensez qu'il s'agit d'une erreur ou si vous souhaitez obtenir plus d'informations, n'hésitez pas à contacter notre service support :</p>
                
               
                
                <div class="info-block">
                    <strong>Information importante :</strong> Vous pouvez soumettre une nouvelle demande d'inscription en veillant à fournir toutes les informations requises et en vous assurant de respecter nos conditions d'utilisation.
                </div>
            @endif
            
            <div class="contact-info">
                <h3>Besoin d'aide ?</h3>
                <p>Notre équipe support est à votre disposition :</p>
                <ul>
                    <li>Email :reparebladi@gmail.com</li>
                    <li>Téléphone : 212 702 20 72 81 </li>
                    <li>Horaires : Du lundi au Samedi, 9h-17h</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre directement.</p>
            <p>© 2025 Ville Maroc - Tous droits réservés</p>
            <p><a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a> | <a href="#">Se désabonner</a></p>
            
            <div class="social-links">
                <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </div>
        </div>
    </div>
</body>
</html>
