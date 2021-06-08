<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livre extends Model
{
    protected $table = 'livres';
    public $timestamps = false;
/*     protected $primarykey['id', 'id_source'];
 */    public function Source(){
        return $this->hasOne(Source::class,'id_source','id');
    }
}

