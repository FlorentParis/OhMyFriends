<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    protected $table = 'episodes';
    public $timestamps = false;
    public function Saison(){
        return $this->belongTo(Saison::class, 'id_saison');
    }
}
