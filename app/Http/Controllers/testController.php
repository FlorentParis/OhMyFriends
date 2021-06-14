<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Personnage;
use App\Models\Saison;
use App\Models\Livre;
use App\Models\Script;

class testController extends Controller
{
    public function test(){
        $data=[
            'omgSaison' => self::getTotalOmgPerSeason(),
            'omgPersoSerie'=> self::getOmgCharacterSerie(),
            'omgPersoSaison' => self::getOmgCharacterSeason(),
            'qteOmgBooks'=>self::getQteOmgBooks(),
            'audienceEpisode'=>self::getAudienceEpisode(),
            'audienceSeason'=>self::getAudienceSeason()
        ];
        $data = json_encode($data);
        return view('test', compact('data'));
    }

    public function getTotalOmgPerSeason(): array
    {
        $OmgSeasons = [];
        for ($i = 1; $i <= 10; $i++){
            array_push($OmgSeasons, [$i=> Saison::getTotalNbOmgSaison($i)]);
        };
        return $OmgSeasons;
    }

    //TODO ??
    public function getOmgCharacterSerie(): array{
        return [
            'Rachel'=>Saison::getOmgPersonnageSerie(1),
            'Monica'=> Saison::getOmgPersonnageSerie(2),
            'Phoebe'=> Saison::getOmgPersonnageSerie(3),
            'Ross'=> Saison::getOmgPersonnageSerie(4),
            'Chandler'=> Saison::getOmgPersonnageSerie(5),
            'Joey'=> Saison::getOmgPersonnageSerie(6)

        ];
    }

    public function getQteOmgBooks(): array{
        $OmgsBooks = [];
        for ($i = 1994; $i <= 2019; $i++){
            array_push($OmgsBooks, [$i=> Livre::getVarNbOmgSource($i)]);
        };
        return $OmgsBooks;
    }

    public function getAudienceEpisode(): array{
        $AudienceEpisodes = [];
        for ($i = 1; $i <= 236; $i++){
            array_push($AudienceEpisodes, [$i=> Episode::getAudienceEpisode($i)]);
        };
        return $AudienceEpisodes;
    }

    public function getAudienceSeason(): array{
        $AudienceSeasons = [];
        for ($i = 1; $i <= 10; $i++){
            array_push($AudienceSeasons, [$i=> Saison::getAudienceSaison($i)]);
        };
        return $AudienceSeasons;
    }

    public function getOmgCharacterSeason(): array{
        $characters = Personnage::all();
        $characOmg = [];
        foreach ($characters as $character){
            $scripts = Personnage::getAllScript($character->id);
            $array = [
                'nom'=>$character->nom,
                'nb_omg'=>[]
            ];
            foreach ($scripts as $script){
                array_push($array['nb_omg'], $script);
                echo"<pre>".$script."</pre>";
            }
            array_push($characOmg, $array);
            echo "-------";
        }
        return $characOmg;
    }
}
