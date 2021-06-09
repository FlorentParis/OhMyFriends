<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saison extends Model
{
    protected $table = 'saisons';

    public $timestamps = false;

    //Une saison posséde plusieurs épisodes et plusieurs Scripts
    public function episode(){
        return $this->hasMany(Episode::class, 'id_saison');
    }

    public function scripts(){
        return $this->hasMany(Script::class, 'id_saison');
    }


}
