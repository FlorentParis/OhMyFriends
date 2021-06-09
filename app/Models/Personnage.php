<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Personnage extends Model
{
    protected $table = 'personnages';
    public $timestamps = false;

    public function script(){
        return $this->hasMany(Script::class, 'id_personnage');
    }

    public static function getAllScript($id_personnage): array
    {
        $scripts = DB::table('scripts')
            ->select('nb_omg')
            ->where('id_personnage', $id_personnage)
            ->get();

        $nbOmg=[];
        foreach($scripts as $script){
            array_push($nbOmg, $script->nb_omg);
        }

        return $nbOmg;
    }

}
