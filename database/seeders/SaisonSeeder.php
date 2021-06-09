<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Saison;
class SaisonSeeder extends Seeder
{

    private static function createSource(float $nb){
        $saison = new Saison();
        $saison->id;
        $saison->nb_avg_omg = $nb;

        assert($saison->save(),"Echec de l'insertion");
    }

    public function run()
    {
        self::createSource(2.90);
        self::createSource(4.50);
        self::createSource(3.60);
        self::createSource(4.90);
        self::createSource(3.90);
        self::createSource(5.30);
        self::createSource(4.40);
        self::createSource(4.50);
        self::createSource(5.40);
        self::createSource(6.80);
    }
}
