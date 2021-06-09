<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Personnage;
use App\Models\Saison;
use App\Models\Source;

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

        /*
        $scriptPerso = Personnage::find(1)->script;
        foreach ($scriptPerso as $script){
            echo "<pre>".$script."</pre>";
        }

*/
        $livres = Source::find(1)->livre;

        return view('test', compact('livres'));
    }
}
