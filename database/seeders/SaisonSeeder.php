<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SaisonModel;
class SaisonSeeder extends Seeder
{

    private static function createSource(){
        $saison = new SaisonModel();
        $saison->id;

        assert($saison->save(),"Echec de l'insertion");
    }

    public function run()
    {
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
        self::createSource();
    }
}
