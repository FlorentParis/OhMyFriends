<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personnage extends Model
{
    protected $table = 'personnages';
    public $timestamps = false;

    public function script(){
        return $this->belongsTo(Script::class, 'id_saison');
    }
}
