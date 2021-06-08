<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Saison;
class SaisonSeeder extends Seeder
{

    private static function createSource(){
        $saison = new Saison();
        $saison->id;

        assert($saison->save(),"Echec de l'insertion");
    }

    public function run()
    {
        for ($i = 1; $i < 11; $i++) {
            self::createSource();
        }
    }
}
