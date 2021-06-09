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
            'saison1'=> Saison::getSumNbOmg(1),
            'saison2'=> Saison::getSumNbOmg(2),
            'saison3'=> Saison::getSumNbOmg(3)
        ];

        $qteOmgBooks = DB::table('livres')
            ->where('annee', 1994)
            ->avg('omg_count');



        return view('test', compact('total_omg_saison'));//->with('scriptRachel', json_decode($scriptRachel, true));
    }
}
