<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    use HasFactory;

    protected $table = "scripts";

    public $timestamps = false;

    //RelationShip :
    public function personnage(){
        return $this->hasOne(Personnage::class, 'id_personnage', 'id');
    }

    public function saison(){
        return $this->hasMany(Saison::class, 'id_saison', 'id');
    }

}
