<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    use HasFactory;

    protected $table = "scripts";

    public $timestamps = false;

    //RelationShip : un script correspond a une saison et un personnage
    public function saison(){
        return $this->belongsTo(Saison::class, 'id_saison');
    }

    public function personnage(){
        return $this->belongsTo(Personnage::class, 'id_personnage');
    }

}
