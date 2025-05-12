<?php

namespace App\Helpers;

class GeoHelper
{
    public static function getCoordinates($address, $apiKey)
    {
        $addressEncoded = urlencode($address);
        $url = "https://api.geoapify.com/v1/geocode/search?text=$addressEncoded&apiKey=$apiKey";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($response, true);
        return $data['features'][0]['geometry']['coordinates'] ?? null;
    }
}
