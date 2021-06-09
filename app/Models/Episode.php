<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Episode extends Model
{
    protected $table = 'episodes';

    public $timestamps = false;

    //Un épisode possé une saison
    public function saison(){
        return $this->belongsTo(Saison::class, 'id_saison');
    }

    public static function getAudienceEpisode($id){
        $audienceEpisodes = DB::table('episodes')
                    ->select('audience')
                    ->where('id', $id)
                    ->get();

        return $audienceEpisodes;
    }
}
