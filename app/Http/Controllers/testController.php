<?php

namespace App\Http\Controllers;

use App\Models\Personnage;
use App\Models\Script;
use Illuminate\Http\Request;

class testController extends Controller
{
    public function test(){
        $script = Script::all();
        $script->find(1)->personnage;
        var_dump($script);

        //$personnage = Personnage::all();
        //foreach ($personnage as $someone){
        //    var_dump($someone['nom']);
        //}
        return view('test');
    }
}
