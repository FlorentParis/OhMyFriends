<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    protected $table = 'sources';
    public $timestamps = false;
    public function Livre(){
        return $this->belongTo(Livre::class, 'id_source');
    }
}
