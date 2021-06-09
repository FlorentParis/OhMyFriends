<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    protected $table = 'sources';
    public $timestamps = false;

    public function livre(){
        return $this->hasMany(Livre::class, 'id_source');
    }
}
