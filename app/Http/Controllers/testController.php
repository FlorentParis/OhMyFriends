<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Personnage;
use App\Models\Saison;
use App\Models\Script;
use App\Models\Source;
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

        return view('test', compact('total_omg_personnage', 'total_omg_saison'));//->with('scriptRachel', json_decode($scriptRachel, true));
    }
}
