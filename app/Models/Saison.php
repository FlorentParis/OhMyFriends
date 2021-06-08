<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saison extends Model
{
    protected $table = 'saisons';

    public $timestamps = false;

    public function script(){
        return $this->belongsTo(Script::class, 'id_saison');
    }

    public function Episode(){
        return $this->hasMany(Episode::class,'id_saison','id');
    }
}
