<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Saison extends Model
{
    protected $table = 'saisons';

    public $timestamps = false;

    //Une saison posséde plusieurs épisodes et plusieurs Scripts
    public function episode(){
        return $this->hasMany(Episode::class, 'id_saison');
    }

    public function script(){
        return $this->hasMany(Script::class, 'id_saison');
    }

    public static function getTotalNbOmgSaison($id): int
    {
        return DB::table('scripts')
            ->where('id_saison', $id)
            ->sum('nb_omg');
    }

    public static function getOmgPersonnageSerie($id_personnage){
        return Script::all()
            ->where('id_personnage', $id_personnage)
            ->sum('nb_omg');
    }

    public static function getAudienceSaison($id_saison){
        return DB::table('episodes')
                    ->where('id', $id_saison)
                    ->avg('audience');
    }
}
