<?php

namespace App\Models;

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

    //Récup l'audience par épisode
    public static function getAudienceEpisode($id_episode){
        return DB::table('episodes')
                    ->where('id', $id_episode)
                    ->value('audience');
    }
}
