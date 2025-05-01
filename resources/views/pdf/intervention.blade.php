<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Détails de l'intervention</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; }
        h1 { color: #2e7d32; }
        .box { border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <h1>Intervention #{{ $intervention->id }}</h1>

    <div class="box">
        <strong>Signalement :</strong> {{ $intervention->signalement->titre }} <br>
        <strong>Description :</strong> {{ $intervention->signalement->description }} <br>
        <strong>Adresse :</strong> {{ $intervention->signalement->adresse }} <br>
        <strong>Statut du signalement :</strong> {{ $intervention->signalement->statut }} <br>
    </div>

    <div class="box">
        <strong>Statut de l'intervention :</strong> {{ $intervention->resolution_status }} <br>
        <strong>Date début :</strong> {{ $intervention->dateDebut }} <br>
        <strong>Date fin :</strong> {{ $intervention->dateFin }} <br>
    </div>

    @if($intervention->solution_photo)
        <div class="box">
            <strong>Photo de la solution :</strong><br>
            <img src="{{ public_path('storage/' . $intervention->solution_photo) }}" width="300" />
        </div>
    @endif
</body>
</html>
