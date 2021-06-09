<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    protected $table = 'episodes';

    public $timestamps = false;

    //Un épisode possé une saison
    public function saison(){
        return $this->belongsTo(Saison::class, 'id_saison');
    }

}
