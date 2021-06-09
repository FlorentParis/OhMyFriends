<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Livre extends Model
{
    protected $table = 'livres';

    public $timestamps = false;

    public function source(){
        return $this->belongsTo(Source::class,'id_source');
    }

    public static function getVarNbOmgSource($annee){
        $qteOmgBooks = DB::table('livres')
                    ->where('annee', $annee)
                    ->orWhere('id_source', '!=', '6')
                    ->avg('omg_count');
        return $qteOmgBooks;
    }
}


