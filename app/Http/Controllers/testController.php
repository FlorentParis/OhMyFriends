<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Personnage;
use App\Models\Saison;
use App\Models\Script;
use App\Models\Source;
use App\Models\Livre;
use Illuminate\Support\Facades\DB;

class testController extends Controller
{
    public function test(){
        //$personnage = Personnage::all();
        //foreach ($personnage as $someone){
        //    var_dump($someone['nom']);
        //}
        /*
        $episodes = Saison::find(2)->episode;
        foreach ($episodes as $episode){
            echo "<pre>".$episode."</pre>";
        }*/

        /**/
        //$scriptRachel = Personnage::find(1)->script;
        //$scriptRachel = json_encode($scriptRachel);
        //$scriptMonica = Personnage::find(2)->script;
        $total_omg_saison = [
            'saison1'=> Saison::getTotalNbOmgSaison(1),
            'saison2'=> Saison::getTotalNbOmgSaison(2),
            'saison3'=> Saison::getTotalNbOmgSaison(3)
        ];

        $total_omg_personnage = [
            'Rachel'=>Saison::getOmgPersonnageSerie(1)
        ];

        $scripts = Personnage::getAllScript(1);
        foreach ($scripts as $script){
            echo"<pre>".$script."</pre>";
        }

        $qteOmgBooks = [
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

        $audienceEpisode = [
            'episode_1'=> Episode::getAudienceEpisode(1),
            'episode_2'=> Episode::getAudienceEpisode(2)
        ];

        $audienceSaison = [
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

        return view('test', compact('total_omg_personnage', 'total_omg_saison', 'qteOmgBooks', 'audienceEpisode', 'audienceSaison'));//->with('scriptRachel', json_decode($scriptRachel, true));
    }
}
