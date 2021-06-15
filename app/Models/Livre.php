<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Livre extends Model
{
    protected $table = 'livres';

    public $timestamps = false;

    public function source(){
        return $this->belongsTo(Source::class,'id_source');
    }

    //Récupere la moyenne des omg ds les livres except 'spok'
    public static function getVarNbOmgSource($annee){
        return DB::table('livres')
                    ->where('annee', $annee)
                    ->Where('id_source', '!=', '6')
                    ->avg('omg_count');
    }
}


