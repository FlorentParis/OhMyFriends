<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Personnage;
use App\Models\Saison;
use App\Models\Livre;

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
        return view('test')->with('data', $data);
    }

    //TODO for
    public function getTotalOmgPerSeason(): array
    {
        return [
            'saison 1'=> Saison::getTotalNbOmgSaison(1),
            'saison 2'=> Saison::getTotalNbOmgSaison(2),
            'saison 3'=> Saison::getTotalNbOmgSaison(3),
            'saison 4'=> Saison::getTotalNbOmgSaison(4),
            'saison 5'=> Saison::getTotalNbOmgSaison(5),
            'saison 6'=> Saison::getTotalNbOmgSaison(6),
            'saison 7'=> Saison::getTotalNbOmgSaison(7),
            'saison 8'=> Saison::getTotalNbOmgSaison(8),
            'saison 9'=> Saison::getTotalNbOmgSaison(9),
            'saison 10'=> Saison::getTotalNbOmgSaison(10),
        ];
    }

    //TODO ??
    public function getOmgCharacterSerie(): array{
        return [
            'Rachel'=>Saison::getOmgPersonnageSerie(1),
            'Monica'=> Saison::getOmgPersonnageSerie(2),
        ];
    }

    //TODO for
    public function getQteOmgBooks(): array{
        return [
            'annee_1994'=> Livre::getVarNbOmgSource(1994),
            'annee_1995'=> Livre::getVarNbOmgSource(1995),
            'annee_1996'=> Livre::getVarNbOmgSource(1996),
            'annee_1997'=> Livre::getVarNbOmgSource(1997),
            'annee_1998'=> Livre::getVarNbOmgSource(1998),
            'annee_1999'=> Livre::getVarNbOmgSource(1999),
            'annee_2000'=> Livre::getVarNbOmgSource(2000),
            'annee_2001'=> Livre::getVarNbOmgSource(2001),
            'annee_2002'=> Livre::getVarNbOmgSource(2002),
            'annee_2003'=> Livre::getVarNbOmgSource(2003),
            'annee_2004'=> Livre::getVarNbOmgSource(2004),
            'annee_2005'=> Livre::getVarNbOmgSource(2005),
            'annee_2006'=> Livre::getVarNbOmgSource(2006),
            'annee_2007'=> Livre::getVarNbOmgSource(2007),
            'annee_2008'=> Livre::getVarNbOmgSource(2008),
            'annee_2009'=> Livre::getVarNbOmgSource(2009),
            'annee_2010'=> Livre::getVarNbOmgSource(2010),
            'annee_2011'=> Livre::getVarNbOmgSource(2011),
            'annee_2012'=> Livre::getVarNbOmgSource(2012),
            'annee_2013'=> Livre::getVarNbOmgSource(2013),
            'annee_2014'=> Livre::getVarNbOmgSource(2014),
            'annee_2015'=> Livre::getVarNbOmgSource(2015),
            'annee_2016'=> Livre::getVarNbOmgSource(2016),
            'annee_2017'=> Livre::getVarNbOmgSource(2017),
            'annee_2018'=> Livre::getVarNbOmgSource(2018),
            'annee_2019'=> Livre::getVarNbOmgSource(2019)
        ];
    }

    //TODO for
    public function getAudienceEpisode(): array{
        return [
            'episode_1'=> Episode::getAudienceEpisode(1),
            'episode_2'=> Episode::getAudienceEpisode(2)
        ];
    }

    //TODO for
    public function getAudienceSeason(): array{
        return [
            'Saison_1'=> Saison::getAudienceSaison(1),
            'Saison_2'=> Saison::getAudienceSaison(2),
            'Saison_3'=> Saison::getAudienceSaison(3),
            'Saison_4'=> Saison::getAudienceSaison(4),
            'Saison_5'=> Saison::getAudienceSaison(5),
            'Saison_6'=> Saison::getAudienceSaison(6),
            'Saison_7'=> Saison::getAudienceSaison(7),
            'Saison_8'=> Saison::getAudienceSaison(8),
            'Saison_9'=> Saison::getAudienceSaison(9),
            'Saison_10'=> Saison::getAudienceSaison(10)
        ];
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
