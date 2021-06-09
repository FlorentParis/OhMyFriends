<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Self_;

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

    public static function getSumNbOmg($id){
        $total = DB::table('scripts')
            ->where('id_saison', $id)
            ->sum('nb_omg');
        return $total;
    }


}
